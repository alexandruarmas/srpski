import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./custom-theme.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Srpski Burger Grill | Authentic Serbian Burgers in Timișoara",
  description:
    "Enjoy authentic Serbian burgers at Srpski Burger Grill in Timișoara. Order online for pickup and experience traditional Serbian flavors.",
  generator: 'v0.dev'
}

// Client-only wrapper component to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}