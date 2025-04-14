"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { burgers, sides, drinks } from "@/lib/menu-data"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  const { t, language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-2 text-center text-4xl font-bold">{t("menu.title")}</h1>
      <p className="mb-12 text-center text-gray-600">{t("menu.subtitle")}</p>

      <Tabs defaultValue="burgers" className="mx-auto max-w-4xl">
        <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="burgers">{t("menu.tab.burgers")}</TabsTrigger>
          <TabsTrigger value="sides">{t("menu.tab.sides")}</TabsTrigger>
          <TabsTrigger value="drinks">{t("menu.tab.drinks")}</TabsTrigger>
        </TabsList>

        <TabsContent value="burgers" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {burgers.map((item, index) => (
              <div key={index} className="flex overflow-hidden rounded-lg border">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.translations[language].name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{item.translations[language].name}</h3>
                    <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-red-600">{item.price} RON</span>
                    <Button asChild size="sm" className="bg-[#f8e9d2] text-[#4b1d0f] hover:bg-red-600 hover:text-white">
                      <Link href="/order">{t("menu.order")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sides" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {sides.map((item, index) => (
              <div key={index} className="flex overflow-hidden rounded-lg border">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.translations[language].name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{item.translations[language].name}</h3>
                    <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-red-600">{item.price} RON</span>
                    <Button asChild size="sm" className="bg-[#f8e9d2] text-[#4b1d0f] hover:bg-red-600 hover:text-white">
                      <Link href="/order">{t("menu.order")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drinks" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {drinks.map((item, index) => (
              <div key={index} className="flex overflow-hidden rounded-lg border">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.translations[language].name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{item.translations[language].name}</h3>
                    <p className="text-sm text-gray-600">{item.translations[language].description}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold text-red-600">{item.price} RON</span>
                    <Button asChild size="sm" className="bg-[#f8e9d2] text-[#4b1d0f] hover:bg-red-600 hover:text-white">
                      <Link href="/order">{t("menu.order")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
