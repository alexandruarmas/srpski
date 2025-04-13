"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { featuredBurgers } from "@/lib/menu-data"
import { motion } from "framer-motion"
import ClientProvider from "@/components/client-provider"

import { Button } from "@/components/ui/button"

// Static version of the page for server-side rendering
function StaticHome() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col antialiased bg-zinc-50">
      {/* Hero Section - Static version for server */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#4b1d0f] to-[#331409]">
        <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="relative z-30 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">{t("home.hero.title")}</span>
              <span className="block text-[#f8e9d2]">{t("home.hero.subtitle")}</span>
            </h1>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild className="bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#f8e9d2]/90">
                <Link href="/menu" className="inline-flex items-center px-8 py-3">
                  {t("home.hero.order")}
                </Link>
              </Button>
              <Button variant="outline" asChild className="bg-white/10 text-white border-[#f8e9d2] hover:bg-white/20">
                <Link href="/about" className="inline-flex items-center px-8 py-3">
                  {t("nav.about")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-12 h-96 w-full lg:mt-0 lg:h-96 lg:w-1/2">
            {/* Using direct img tag with transparent background */}
            <div className="relative h-full w-full flex items-center justify-center">
              <img 
                src="/srpski/images/gif.gif" 
                alt="Delicious burger"
                className="h-full object-contain z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
              {t("home.featured.title")}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBurgers.map((burger, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-zinc-50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={burger.image || "/srpski/placeholder.svg"}
                    alt={burger.translations[language].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-2 font-serif text-xl font-medium text-zinc-900">
                    {burger.translations[language].name}
                  </h3>
                  <p className="mb-6 text-zinc-600 line-clamp-2">
                    {burger.translations[language].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-[#4b1d0f]">{burger.price} RON</span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-[#4b1d0f] text-[#4b1d0f] hover:bg-[#f8e9d2] hover:text-[#331409]"
                    >
                      <Link href="/order">{t("home.cta.button")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="rounded-full group text-[#4b1d0f] hover:bg-[#f8e9d2] hover:text-[#331409] text-base px-8">
              <Link href="/menu" className="flex items-center">
                {t("home.featured.viewAll")}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f8e9d2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
                {t("home.about.title")}
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {t("home.about.description1")}
              </p>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {t("home.about.description2")}
              </p>
              <div className="grid gap-5 sm:grid-cols-2 pt-4">
                <div className="flex items-center space-x-3 text-zinc-700">
                  <Clock className="h-5 w-5 text-[#4b1d0f]" />
                  <div className="flex flex-col">
                    <span className="text-sm">{t("footer.weekdays")}</span>
                    <span className="text-sm text-[#4b1d0f]">
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
                <div className="flex items-center space-x-3 text-zinc-700">
                  <Phone className="h-5 w-5 text-[#4b1d0f]" />
                  <a href="tel:+40744868928" className="text-sm hover:underline">0744 868 928</a>
                </div>
                <div className="flex items-center space-x-3 text-zinc-700 sm:col-span-2">
                  <MapPin className="h-5 w-5 text-[#4b1d0f]" />
                  <span className="text-sm">Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 w-full overflow-hidden rounded-2xl lg:w-2/5">
              <Image
                src="/srpski/placeholder.svg?height=800&width=600"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#4b1d0f] text-[#f8e9d2]">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light text-[#f8e9d2]/90">
              {t("home.cta.subtitle")}
            </p>
            <Button asChild size="lg" className="rounded-full bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#f8e9d2]/90 text-base px-10 shadow-md hover:shadow-lg transition-all">
              <Link href="/order">{t("home.cta.button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Animated version of the page with motion effects (client-only)
function AnimatedHome() {
  const { t, language } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col antialiased bg-zinc-50">
      {/* Hero Section - Apple-inspired cleaner design */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-b from-[#4b1d0f] to-[#331409]"
      >
        <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block"
                >
                  {t("home.hero.title")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block text-[#f8e9d2]"
                >
                  {t("home.hero.subtitle")}
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Button asChild className="bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#f8e9d2]/90">
                  <Link href="/menu" className="inline-flex items-center px-8 py-3">
                    {t("home.hero.order")}
                  </Link>
                </Button>
                <Button variant="outline" asChild className="bg-white/10 text-white border-[#f8e9d2] hover:bg-white/20">
                  <Link href="/about" className="inline-flex items-center px-8 py-3">
                    {t("nav.about")}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-12 h-96 w-full lg:mt-0 lg:h-96 lg:w-1/2"
          >
            {/* Using direct img tag with transparent background */}
            <div className="relative h-full w-full flex items-center justify-center">
              <img 
                src="/srpski/images/gif.gif" 
                alt="Delicious burger"
                className="h-full object-contain z-10 relative"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Menu Items - Card redesign with Apple aesthetics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
              {t("home.featured.title")}
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBurgers.map((burger, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl bg-zinc-50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={burger.image || "/srpski/placeholder.svg"}
                    alt={burger.translations[language].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-2 font-serif text-xl font-medium text-zinc-900">
                    {burger.translations[language].name}
                  </h3>
                  <p className="mb-6 text-zinc-600 line-clamp-2">
                    {burger.translations[language].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-[#4b1d0f]">{burger.price} RON</span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-[#4b1d0f] text-[#4b1d0f] hover:bg-[#f8e9d2] hover:text-[#331409]"
                    >
                      <Link href="/order">{t("home.cta.button")}</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button asChild variant="outline" className="rounded-full group text-[#4b1d0f] hover:bg-[#f8e9d2] hover:text-[#331409] text-base px-8">
              <Link href="/menu" className="flex items-center">
                {t("home.featured.viewAll")}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section - Refined design with better spacing */}
      <section className="py-24 bg-[#f8e9d2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">
                {t("home.about.title")}
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {t("home.about.description1")}
              </p>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {t("home.about.description2")}
              </p>
              <div className="grid gap-5 sm:grid-cols-2 pt-4">
                <div className="flex items-center space-x-3 text-zinc-700">
                  <Clock className="h-5 w-5 text-[#4b1d0f]" />
                  <div className="flex flex-col">
                    <span className="text-sm">{t("footer.weekdays")}</span>
                    <span className="text-sm text-[#4b1d0f]">
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
                <div className="flex items-center space-x-3 text-zinc-700">
                  <Phone className="h-5 w-5 text-[#4b1d0f]" />
                  <a href="tel:+40744868928" className="text-sm hover:underline">0744 868 928</a>
                </div>
                <div className="flex items-center space-x-3 text-zinc-700 sm:col-span-2">
                  <MapPin className="h-5 w-5 text-[#4b1d0f]" />
                  <span className="text-sm">Bulevardul 16 Decembrie 1989, 71, Timișoara, 300219</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-96 w-full overflow-hidden rounded-2xl lg:w-2/5"
            >
              <Image
                src="/srpski/placeholder.svg?height=800&width=600"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Clean, focused design */}
      <section className="py-24 bg-[#4b1d0f] text-[#f8e9d2]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl space-y-8"
          >
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {t("home.cta.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light text-[#f8e9d2]/90">
              {t("home.cta.subtitle")}
            </p>
            <Button asChild size="lg" className="rounded-full bg-[#f8e9d2] text-[#4b1d0f] hover:bg-[#f8e9d2]/90 text-base px-10 shadow-md hover:shadow-lg transition-all">
              <Link href="/order">{t("home.cta.button")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Main component that uses ClientProvider to handle the transition
export default function Home() {
  return (
    <ClientProvider fallback={<StaticHome />}>
      <AnimatedHome />
    </ClientProvider>
  )
}
