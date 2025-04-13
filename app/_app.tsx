import type { AppProps } from "next/app"
import { LanguageProvider } from "@/contexts/language-context"
import { Layout } from "../components/layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
} 