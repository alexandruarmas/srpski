"use client"

import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-2 text-center text-4xl font-bold text-[#4b1d0f]">{t("contact.title")}</h1>
      <p className="mb-12 text-center text-[#4b1d0f]/80">{t("contact.subtitle")}</p>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#4b1d0f]/10">
          <h2 className="mb-8 text-2xl font-bold text-[#4b1d0f]">{t("contact.form.title")}</h2>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#4b1d0f]">
                  {t("contact.form.name")}
                </label>
                <Input 
                  id="name" 
                  placeholder={t("contact.form.name")} 
                  className="border-[#4b1d0f]/20 focus-visible:ring-[#4b1d0f]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#4b1d0f]">
                  {t("contact.form.email")}
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t("contact.form.email")} 
                  className="border-[#4b1d0f]/20 focus-visible:ring-[#4b1d0f]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-[#4b1d0f]">
                {t("contact.form.subject")}
              </label>
              <Input 
                id="subject" 
                placeholder={t("contact.form.subject")} 
                className="border-[#4b1d0f]/20 focus-visible:ring-[#4b1d0f]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#4b1d0f]">
                {t("contact.form.message")}
              </label>
              <Textarea 
                id="message" 
                placeholder={t("contact.form.message")} 
                rows={5} 
                className="border-[#4b1d0f]/20 focus-visible:ring-[#4b1d0f]"
              />
            </div>

            <Button type="submit" className="w-full rounded-full bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#4b1d0f] hover:text-white">
              {t("contact.form.submit")}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <h2 className="mb-8 text-2xl font-bold text-[#4b1d0f]">{t("contact.info.title")}</h2>

          <div className="space-y-6">
            <Card className="border-[#4b1d0f]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="flex items-start space-x-4 p-6 bg-[#f8f4ec]">
                <Clock className="h-6 w-6 text-[#4b1d0f]" />
                <div>
                  <h3 className="font-bold text-[#4b1d0f]">{t("footer.hours")}</h3>
                  <div className="flex flex-col">
                    <p className="text-[#4b1d0f]/80">Mon-Fri: 11:00 - 19:00</p>
                    <p className="text-[#4b1d0f] font-medium">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#4b1d0f]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="flex items-start space-x-4 p-6 bg-[#f8f4ec]">
                <MapPin className="h-6 w-6 text-[#4b1d0f]" />
                <div>
                  <h3 className="font-bold text-[#4b1d0f]">{t("contact.info.address")}</h3>
                  <p className="text-[#4b1d0f]/80">Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219, Romania</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#4b1d0f]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="flex items-start space-x-4 p-6 bg-[#f8f4ec]">
                <Phone className="h-6 w-6 text-[#4b1d0f]" />
                <div>
                  <h3 className="font-bold text-[#4b1d0f]">{t("contact.info.phone")}</h3>
                  <a href="tel:+40744868928" className="text-[#4b1d0f]/80 hover:underline">0744 868 928</a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#4b1d0f]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="flex items-start space-x-4 p-6 bg-[#f8f4ec]">
                <Mail className="h-6 w-6 text-[#4b1d0f]" />
                <div>
                  <h3 className="font-bold text-[#4b1d0f]">{t("contact.info.email")}</h3>
                  <a href="mailto:info@srpskiburger.ro" className="text-[#4b1d0f]/80 hover:underline">info@srpskiburger.ro</a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-xl overflow-hidden h-64 w-full shadow-md border border-[#4b1d0f]/10 mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1825257751396!2d21.22211491555881!3d45.75387997910548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610655bf%3A0xfd169ff24d29f192!2sBulevardul%2016%20Decembrie%201989%2071%2C%20Timi%C8%99oara%20300219%2C%20Romania!5e0!3m2!1sen!2sus!4v1649871234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
