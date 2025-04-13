import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useLanguage } from "@/contexts/language-context"

export function MainNav() {
  const { t } = useLanguage()
  const router = useRouter()
  
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/srpski/original-logo.jpg" 
            alt="SRPSKI BURGER GRILL"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-sf-pro text-lg font-medium hidden sm:inline-block text-[#4b1d0f]">
            SRPSKI BURGER GRILL
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-1">
          {[
            { name: t("nav.home"), href: "/" },
            { name: t("nav.menu"), href: "/menu" },
            { name: t("nav.about"), href: "/about" },
            { name: t("nav.contact"), href: "/contact" },
          ].map((item) => {
            const isActive = router.pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive 
                  ? "bg-[#f8e9d2] text-[#4b1d0f]" 
                  : "text-gray-800 hover:text-[#4b1d0f] hover:bg-[#f8e9d2]/50"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/order" 
            className="bg-[#4b1d0f] text-[#f8e9d2] px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
          >
            {t("nav.order")}
          </Link>
          
          <button className="md:hidden p-2 text-[#4b1d0f]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 