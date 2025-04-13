"use client"

import { useLanguage } from "@/contexts/language-context"
import { languages, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  
  // Updated language options with correct flags
  const languageOptions = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "sr", name: "Српски", flag: "🇷🇸" },
    { code: "ro", name: "Română", flag: "🇷🇴" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as Language)}
            className={language === lang.code ? "bg-muted font-medium" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
