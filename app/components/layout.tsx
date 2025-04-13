import { MainNav } from "./main-nav"
import { SiteFooter } from "./site-footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
} 