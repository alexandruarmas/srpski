import React from "react"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export function SiteFooter() {
  const { t, language } = useLanguage()
  
  const year = new Date().getFullYear()
  
  return (
    <footer className="border-t border-[#e5e5e5] bg-white pt-16 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-16">
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#4b1d0f]">{t("footer.title")}</h3>
            <p className="text-gray-600 mb-4">
              {t("footer.description")}
            </p>
            <div className="flex flex-col space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#4b1d0f]" />
                <div className="flex flex-col">
                  <span>{t("footer.weekdays")}</span>
                  <span className="text-[#4b1d0f]">
                    {t("footer.weekends").includes("Closed") 
                      ? t("footer.weekends").split("Closed")[0]
                      : t("footer.weekends").includes("Închis")
                        ? t("footer.weekends").split("Închis")[0]
                        : t("footer.weekends").split("Затворено")[0]}
                    <span className="text-red-600 font-bold">
                      {t("footer.weekends").includes("Closed") 
                        ? "Closed" 
                        : t("footer.weekends").includes("Închis")
                          ? "Închis"
                          : "Затворено"}
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#4b1d0f]" />
                <a href="tel:+40744868928" className="hover:underline">0744 868 928</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#4b1d0f]" />
                <span>Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#4b1d0f]">{t("footer.menu")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/menu/burgers" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("categories.burgers")}
                </Link>
              </li>
              <li>
                <Link href="/menu/sides" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("categories.sides")}
                </Link>
              </li>
              <li>
                <Link href="/menu/drinks" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("categories.drinks")}
                </Link>
              </li>
              <li>
                <Link href="/menu/desserts" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("categories.desserts")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#4b1d0f]">{t("footer.links")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-[#4b1d0f] flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {t("nav.order")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#4b1d0f]">{t("footer.follow")}</h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] text-gray-600 hover:border-[#4b1d0f] hover:text-[#4b1d0f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] text-gray-600 hover:border-[#4b1d0f] hover:text-[#4b1d0f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-[#e5e5e5] py-6 text-center text-xs text-gray-500">
          <p className="mb-2">
            &copy; {year} SRPSKI BURGER GRILL. {t("footer.rights")}
          </p>
          <div className="flex justify-center space-x-4 text-gray-400">
            <Link href="/privacy" className="hover:text-[#4b1d0f]">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-[#4b1d0f]">
              {t("footer.terms")}
            </Link>
            <Link href="/cookies" className="hover:text-[#4b1d0f]">
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 