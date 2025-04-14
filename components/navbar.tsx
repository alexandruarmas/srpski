"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, Home, UtensilsCrossed, Info, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src="/srpski/original-logo.jpg"
              alt="Srpski Burger Grill Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none text-[#4b1d0f]">Srpski</span>
            <span className="text-lg font-bold leading-none">Burger Grill</span>
          </div>
          <span className="sr-only">{t("site.name")}</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="group flex items-center text-gray-700 hover:text-[#4b1d0f] transition-colors">
            <Home className="mr-1 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{t("nav.home")}</span>
          </Link>
          <Link href="/menu" className="group flex items-center text-gray-700 hover:text-[#4b1d0f] transition-colors">
            <UtensilsCrossed className="mr-1 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{t("nav.menu")}</span>
          </Link>
          <Link href="/about" className="group flex items-center text-gray-700 hover:text-[#4b1d0f] transition-colors">
            <Info className="mr-1 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{t("nav.about")}</span>
          </Link>
          <Link href="/contact" className="group flex items-center text-gray-700 hover:text-[#4b1d0f] transition-colors">
            <Phone className="mr-1 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span>{t("nav.contact")}</span>
          </Link>
        </nav>

        <div className="hidden items-center space-x-2 md:flex">
          <LanguageSwitcher />
          <Button asChild className="rounded-full bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#4b1d0f] hover:text-white">
            <Link href="/order" className="flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              {t("nav.order")}
            </Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-gray-200 hover:bg-gray-50">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-gray-100">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center">
                <div className="relative h-8 w-8 overflow-hidden rounded-md mr-2">
                  <Image
                    src="/srpski/original-logo.jpg"
                    alt="Srpski Burger Grill Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                {t("nav.menuTitle")}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                href="/"
                className="flex items-center text-lg font-medium text-gray-700 hover:text-[#4b1d0f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="mr-3 h-5 w-5" />
                {t("nav.home")}
              </Link>
              <Link
                href="/menu"
                className="flex items-center text-lg font-medium text-gray-700 hover:text-[#4b1d0f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <UtensilsCrossed className="mr-3 h-5 w-5" />
                {t("nav.menu")}
              </Link>
              <Link
                href="/about"
                className="flex items-center text-lg font-medium text-gray-700 hover:text-[#4b1d0f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Info className="mr-3 h-5 w-5" />
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-lg font-medium text-gray-700 hover:text-[#4b1d0f] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-3 h-5 w-5" />
                {t("nav.contact")}
              </Link>
              <div className="flex items-center space-x-2 pt-4 border-t mt-2">
                <LanguageSwitcher />
              </div>
              <Button asChild className="mt-4 rounded-full bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#4b1d0f] hover:text-white">
                <Link href="/order" onClick={() => setIsOpen(false)} className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {t("nav.order")}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
