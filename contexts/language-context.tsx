"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations, type TranslationKey } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// SSR-safe access to browser APIs
const isBrowser = typeof window !== 'undefined'

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with English during SSR for consistency
  const [language, setLanguage] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)
  
  // Mark when component has hydrated
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Only access browser APIs when on the client
  useEffect(() => {
    if (!isBrowser) return
    
    try {
      // Check if there's a saved language preference in localStorage
      const savedLanguage = localStorage.getItem("language") as Language | null
      if (savedLanguage && ["en", "ro", "sr"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        // Try to detect browser language
        const browserLang = navigator.language.split("-")[0] as Language
        if (["en", "ro", "sr"].includes(browserLang)) {
          setLanguage(browserLang)
        }
      }
    } catch (error) {
      console.error("Error accessing browser APIs:", error)
    }
  }, [])

  // Save language preference when it changes (client-side only)
  useEffect(() => {
    if (!isBrowser || !isHydrated) return
    
    try {
      // Save language preference to localStorage
      localStorage.setItem("language", language)
      // Update html lang attribute
      document.documentElement.lang = language
    } catch (error) {
      console.error("Error saving language preference:", error)
    }
  }, [language, isHydrated])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  // Toggle between languages
  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("sr")
    } else if (language === "sr") {
      setLanguage("ro")
    } else {
      setLanguage("en")
    }
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
