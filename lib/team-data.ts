import type { Language } from "./translations"

export type TeamMember = {
  id: string
  image: string
  translations: {
    [key in Language]: {
      name: string
      role: string
      bio: string
    }
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: "team1",
    image: "/placeholder.svg?height=400&width=400",
    translations: {
      en: {
        name: "Milan Petrović",
        role: "Founder & Head Chef",
        bio: "Born and raised in Belgrade, Milan brings authentic Serbian cooking techniques and family recipes to every dish.",
      },
      ro: {
        name: "Milan Petrović",
        role: "Fondator și Bucătar Șef",
        bio: "Născut și crescut în Belgrad, Milan aduce tehnici autentice de gătit sârbești și rețete de familie în fiecare fel de mâncare.",
      },
      sr: {
        name: "Милан Петровић",
        role: "Оснивач и главни кувар",
        bio: "Рођен и одрастао у Београду, Милан доноси аутентичне српске технике кувања и породичне рецепте у свако јело.",
      },
    },
  },
  {
    id: "team2",
    image: "/placeholder.svg?height=400&width=400",
    translations: {
      en: {
        name: "Ana Popescu",
        role: "Restaurant Manager",
        bio: "With over 10 years in hospitality, Ana ensures every guest has an exceptional dining experience.",
      },
      ro: {
        name: "Ana Popescu",
        role: "Manager Restaurant",
        bio: "Cu peste 10 ani în ospitalitate, Ana se asigură că fiecare oaspete are o experiență culinară excepțională.",
      },
      sr: {
        name: "Ана Попеску",
        role: "Менаџер ресторана",
        bio: "Са преко 10 година искуства у угоститељству, Ана обезбеђује да сваки гост има изузетно искуство обедовања.",
      },
    },
  },
  {
    id: "team3",
    image: "/placeholder.svg?height=400&width=400",
    translations: {
      en: {
        name: "Nikola Jovanović",
        role: "Grill Master",
        bio: "Trained in traditional Serbian grilling methods, Nikola is the master behind our perfectly cooked pljeskavica.",
      },
      ro: {
        name: "Nikola Jovanović",
        role: "Maestru Grătar",
        bio: "Instruit în metodele tradiționale sârbești de grătar, Nikola este maestrul din spatele pljeskavicei noastre perfect gătite.",
      },
      sr: {
        name: "Никола Јовановић",
        role: "Мајстор роштиља",
        bio: "Обучен у традиционалним српским методама роштиља, Никола је мајстор иза наше савршено печене пљескавице.",
      },
    },
  },
]
