"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white text-[#4b1d0f]">
      <div className="container mx-auto px-4 py-12">
        {/* Serbian pattern divider */}
        <div className="mb-8 flex justify-center">
          <div className="h-1.5 w-full max-w-md bg-gradient-to-r from-[#4b1d0f] via-[#4b1d0f]/20 to-[#4b1d0f]"></div>
        </div>
        
        <div className="grid gap-12 md:grid-cols-3">
          <div className="bg-[#f8f4ec] p-6 rounded-lg shadow-md border border-[#4b1d0f]/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                <Image
                  src="/srpski/original-logo.jpg"
                  alt="Srpski Burger Grill Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none text-[#4b1d0f]">Srpski</span>
                <span className="text-xl font-bold leading-none">Burger Grill</span>
              </div>
            </div>
            <p className="mb-4 text-[#4b1d0f] font-medium">{t("site.tagline")}</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-[#4b1d0f] hover:text-[#2d0e04] transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-[#4b1d0f] hover:text-[#2d0e04] transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#f8f4ec] p-6 rounded-lg shadow-md border border-[#4b1d0f]/10">
            <h3 className="mb-4 text-xl font-bold text-[#4b1d0f] border-b border-[#4b1d0f]/20 pb-2">{t("contact.title")}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#4b1d0f] flex-shrink-0 mt-1" />
                <span className="text-[#4b1d0f]">Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219, Romania</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#4b1d0f]" />
                <a href="tel:+40744868928" className="text-[#4b1d0f] hover:underline">0744 868 928</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#4b1d0f]" />
                <a href="mailto:info@srpskiburger.ro" className="text-[#4b1d0f] hover:underline">info@srpskiburger.ro</a>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f4ec] p-6 rounded-lg shadow-md border border-[#4b1d0f]/10">
            <h3 className="mb-4 text-xl font-bold text-[#4b1d0f] border-b border-[#4b1d0f]/20 pb-2">{t("footer.hours")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#4b1d0f]" />
                <p className="text-[#4b1d0f]">{t("footer.weekdays")}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#4b1d0f]" />
                <p className="text-[#4b1d0f]">
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
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Serbian pattern divider */}
        <div className="mt-12 mb-6 flex justify-center">
          <div className="h-1.5 w-full max-w-md bg-gradient-to-r from-[#4b1d0f] via-[#4b1d0f]/20 to-[#4b1d0f]"></div>
        </div>

        <div className="text-center bg-[#f8f4ec] p-4 rounded-lg mt-6 border border-[#4b1d0f]/10">
          <p className="text-[#4b1d0f]">
            &copy; {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
