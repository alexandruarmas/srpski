"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { teamMembers } from "@/lib/team-data"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const { t, language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-2 text-center text-4xl font-bold text-[#4b1d0f]">{t("about.title")}</h1>
      <p className="mb-12 text-center text-[#4b1d0f]/80">{t("about.subtitle")}</p>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-md lg:h-full">
          <Image 
            src="/srpski/images/restaurant-vertical.svg" 
            alt="Restaurant interior" 
            fill 
            className="object-contain scale-125 transform-gpu" 
          />
        </div>

        <div className="space-y-6">
          <h2 className="mb-2 text-3xl font-bold text-[#4b1d0f]">{t("about.story.title")}</h2>
          <p className="text-[#4b1d0f]/90">{t("about.story.p1")}</p>
          <p className="text-[#4b1d0f]/90">{t("about.story.p2")}</p>
          <p className="text-[#4b1d0f]/90">{t("about.story.p3")}</p>

          <div className="pt-2">
            <h3 className="mb-4 text-xl font-bold text-[#4b1d0f]">{t("about.mission.title")}</h3>
            <p className="text-[#4b1d0f]/90">{t("about.mission.description")}</p>
          </div>

          <div className="mt-6 rounded-xl bg-[#f8f4ec] p-6 shadow-sm border border-[#4b1d0f]/10">
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-[#4b1d0f] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <div className="text-[#4b1d0f] font-medium">{t("footer.weekdays")}</div>
                  <div className="text-[#4b1d0f]">
                    {t("footer.weekends").includes("Closed") 
                      ? t("footer.weekends").split("Closed")[0]
                      : t("footer.weekends").includes("Închis")
                        ? t("footer.weekends").split("Închis")[0]
                        : t("footer.weekends").split("Затворено")[0]}
                    <span className="text-red-600 font-bold ml-1">
                      {t("footer.weekends").includes("Closed") 
                        ? "Closed" 
                        : t("footer.weekends").includes("Închis")
                          ? "Închis"
                          : "Затворено"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-[#4b1d0f] flex-shrink-0" />
                <a href="tel:+40744868928" className="text-[#4b1d0f] hover:underline font-medium">0744 868 928</a>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-[#4b1d0f] mt-0.5 flex-shrink-0" />
                <span className="text-[#4b1d0f]">Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219</span>
              </div>
            </div>
          </div>

          <Button asChild className="mt-4 bg-[#4b1d0f] text-white border-[#4b1d0f] hover:bg-red-600 hover:text-white">
            <Link href="/contact">{t("contact.title")}</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#4b1d0f]">{t("about.team.title")}</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-[#f8f4ec] transition-all duration-300 group-hover:border-[#4b1d0f]/20">
                <Image
                  src={member.image || "/srpski/placeholder.svg"}
                  alt={member.translations[language].name}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#4b1d0f]">{member.translations[language].name}</h3>
              <p className="mb-3 text-[#4b1d0f] font-medium">{member.translations[language].role}</p>
              <p className="text-[#4b1d0f]/80">{member.translations[language].bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
