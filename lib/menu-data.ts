import type { Language } from "./translations"

export type MenuItem = {
  id: string
  price: number
  image: string
  translations: {
    [key in Language]: {
      name: string
      description: string
    }
  }
}

export const burgers: MenuItem[] = [
  {
    id: "b1",
    price: 32,
    image: "/srpski/images/burgers/classic-pljeskavica.svg",
    translations: {
      en: {
        name: "Classic Pljeskavica",
        description:
          "Traditional Serbian burger patty made with a blend of beef and pork, served with kajmak and ajvar.",
      },
      ro: {
        name: "Pljeskavica Clasică",
        description:
          "Burger tradițional sârbesc preparat cu un amestec de carne de vită și porc, servit cu kajmak și ajvar.",
      },
      sr: {
        name: "Класична Пљескавица",
        description:
          "Традиционална српска пљескавица направљена од мешавине говедине и свињетине, сервирана са кајмаком и ајваром.",
      },
    },
  },
  {
    id: "b2",
    price: 38,
    image: "/srpski/images/burgers/gurmanska-pljeskavica.svg",
    translations: {
      en: {
        name: "Gurmanska Pljeskavica",
        description: "Stuffed burger with cheese, ham, and spices for an explosion of flavors in every bite.",
      },
      ro: {
        name: "Pljeskavica Gurmand",
        description: "Burger umplut cu brânză, șuncă și condimente pentru o explozie de arome la fiecare mușcătură.",
      },
      sr: {
        name: "Гурманска Пљескавица",
        description: "Пуњена пљескавица sa сиром, шунком și condimente pentru o explozie de arome la fiecare mușcătură.",
      },
    },
  },
  {
    id: "b3",
    price: 35,
    image: "/srpski/images/burgers/leskovacka-pljeskavica.svg",
    translations: {
      en: {
        name: "Leskovačka Pljeskavica",
        description: "Spicy burger patty with hot peppers and traditional spices from the Leskovac region.",
      },
      ro: {
        name: "Pljeskavica Leskovac",
        description: "Burger picant cu ardei iuți și condimente tradiționale din regiunea Leskovac.",
      },
      sr: {
        name: "Лесковачка Пљескавица",
        description: "Љута пљескавица sa paпричицама i tradicionalnim začinima iz leсковачког региона.",
      },
    },
  },
  {
    id: "b4",
    price: 36,
    image: "/srpski/images/burgers/punjena-pljeskavica.svg",
    translations: {
      en: {
        name: "Punjena Pljeskavica",
        description: "Stuffed burger with kajmak, a creamy dairy product, for a rich and indulgent experience.",
      },
      ro: {
        name: "Pljeskavica Umplută",
        description: "Burger umplut cu kajmak, un produs lactat cremos, pentru o experiență bogată și indulgentă.",
      },
      sr: {
        name: "Пуњена Пљескавица",
        description: "Пуњена пљескавица sa kajmakom, кремастим млечним производом, за богато и раскошно искуство.",
      },
    },
  },
  {
    id: "b5",
    price: 34,
    image: "/srpski/images/burgers/sarplaninska-pljeskavica.svg",
    translations: {
      en: {
        name: "Šarplaninska Pljeskavica",
        description: "Mountain-style burger with a special blend of meats and herbs from the Šar Mountains.",
      },
      ro: {
        name: "Pljeskavica Șarplanina",
        description: "Burger în stil montan cu un amestec special de carne și ierburi din Munții Șar.",
      },
      sr: {
        name: "Шарпланинска Пљескавица",
        description: "Планинска пљескавица sa посебном мешавином меса i začinskog bilja sa Šar-planinama.",
      },
    },
  },
  {
    id: "b6",
    price: 30,
    image: "/srpski/images/burgers/cevapi.svg",
    translations: {
      en: {
        name: "Ćevapi",
        description: "Grilled minced meat sausages served with onions, flatbread, and ajvar.",
      },
      ro: {
        name: "Ćevapi",
        description: "Cârnăciori din carne tocată la grătar, serviți cu ceapă, lipie și ajvar.",
      },
      sr: {
        name: "Ћевапи",
        description: "Роштиљске кобасице од млевеног меса сервиране са луком, лепињом i aјваром.",
      },
    },
  },
  {
    id: "b7",
    price: 40,
    image: "/srpski/images/burgers/karadjordjeva.svg",
    translations: {
      en: {
        name: "Karađorđeva Šnicla",
        description: "Rolled veal or pork steak stuffed with kajmak, breaded and fried to golden perfection.",
      },
      ro: {
        name: "Karađorđeva Șnițel",
        description: "Ruladă din carne de vițel sau porc umplută cu kajmak, panată și prăjită până la perfecțiune aurie.",
      },
      sr: {
        name: "Карађорђева Шницла",
        description: "Ролована телећа или свињска шницла пуњena кајмаком, поховaна и пржена до златно савршенствo.",
      },
    },
  },
  {
    id: "b8",
    price: 28,
    image: "/srpski/images/burgers/ustipci.svg",
    translations: {
      en: {
        name: "Uštipci",
        description: "Traditional Serbian fried dough balls, served with a variety of toppings and dips.",
      },
      ro: {
        name: "Uštipci",
        description: "Gogoși tradiționale sârbești, servite cu o varietate de toppinguri și sosuri pentru înmuiat.",
      },
      sr: {
        name: "Уштипци",
        description: "Традиционална српска пржена теста, сервирана са разноврсним преливима и умацима.",
      },
    },
  },
  {
    id: "b9",
    price: 33,
    image: "/srpski/images/burgers/cevapcici.svg",
    translations: {
      en: {
        name: "Ćevapčići",
        description: "Smaller version of ćevapi with a unique blend of spices, served with freshly chopped onions and ajvar.",
      },
      ro: {
        name: "Ćevapčići",
        description: "Versiune mai mică de ćevapi cu un amestec unic de condimente, servită cu ceapă proaspăt tocată și ajvar.",
      },
      sr: {
        name: "Ћевапчићи",
        description: "Мања верзија ћевапа са јединственом мешавином зачина, сервирана са свеже сецканим луком и ајваром.",
      },
    },
  },
]

export const sides: MenuItem[] = [
  {
    id: "s1",
    price: 8,
    image: "/srpski/images/sides/kajmak.svg",
    translations: {
      en: {
        name: "Kajmak",
        description: "Traditional creamy dairy spread, perfect with any burger.",
      },
      ro: {
        name: "Kajmak",
        description: "Cremă tradițională din lapte, perfectă cu orice burger.",
      },
      sr: {
        name: "Кајмак",
        description: "Традиционални кремасти млечни намаз, савршен уз сваку пљескавицу.",
      },
    },
  },
  {
    id: "s2",
    price: 8,
    image: "/srpski/images/sides/urnebes.svg",
    translations: {
      en: {
        name: "Urnebes",
        description: "Spicy cheese salad with hot peppers, a perfect side for any burger.",
      },
      ro: {
        name: "Urnebes",
        description: "Salată picantă de brânză cu ardei iuți, un acompaniament perfect pentru orice burger.",
      },
      sr: {
        name: "Урнебес",
        description: "Љута салата од сира sa paпричицама, савршен прилог уз сваку пљескавицу.",
      },
    },
  },
  {
    id: "s3",
    price: 6,
    image: "/srpski/images/sides/lepinja.svg",
    translations: {
      en: {
        name: "Lepinja",
        description: "Traditional Serbian flatbread, freshly baked.",
      },
      ro: {
        name: "Lepinja",
        description: "Pâine plată tradițională sârbească, proaspăt coaptă.",
      },
      sr: {
        name: "Лепиња",
        description: "Традиционални српски хлеб, свеже печен.",
      },
    },
  },
  {
    id: "s4",
    price: 15,
    image: "/srpski/images/sides/srpska-salata.svg",
    translations: {
      en: {
        name: "Srpska Salata",
        description: "Fresh tomatoes, cucumbers, onions, and peppers topped with Serbian white cheese.",
      },
      ro: {
        name: "Salata Sârbească",
        description: "Roșii proaspete, castraveți, ceapă și ardei presărate cu brânză albă sârbească.",
      },
      sr: {
        name: "Српска салата",
        description: "Свежи парадајз, краставци, лук и паприка посути белим српским сиром.",
      },
    },
  },
  {
    id: "s5",
    price: 12,
    image: "/srpski/images/sides/pomfrit.svg",
    translations: {
      en: {
        name: "French Fries",
        description: "Crispy golden fries, perfectly seasoned.",
      },
      ro: {
        name: "Cartofi Prăjiți",
        description: "Cartofi aurii crocanti, perfect condimentați.",
      },
      sr: {
        name: "Помфрит",
        description: "Хрскави златни помфрит, савршено зачињен.",
      },
    },
  },
  {
    id: "s6",
    price: 9,
    image: "/srpski/images/sides/ajvar.svg",
    translations: {
      en: {
        name: "Ajvar",
        description: "Traditional Serbian roasted red pepper spread with a rich, smoky flavor.",
      },
      ro: {
        name: "Ajvar",
        description: "Pastă tradițională sârbească din ardei roșii copți, cu o aromă bogată și afumată.",
      },
      sr: {
        name: "Ајвар",
        description: "Традиционални српски намаз од печене црвене паприке sa богатим, димљеним укусом.",
      },
    },
  },
  {
    id: "s7",
    price: 14,
    image: "/srpski/images/sides/sopska-salad.svg",
    translations: {
      en: {
        name: "Sopska Salad",
        description: "Traditional Balkan salad with diced tomatoes, cucumbers, onions, and topped with grated feta cheese.",
      },
      ro: {
        name: "Salată Šopska",
        description: "Salată tradițională balcanică cu roșii, castraveți și ceapă tăiate cubulețe, presărată cu brânză feta rasă.",
      },
      sr: {
        name: "Шопска салата",
        description: "Традиционална балканска салата sa коцкицама парадајза, краставаца, лука i посута struganim sirom feta.",
      },
    },
  },
]

export const drinks: MenuItem[] = [
  {
    id: "d1",
    price: 12,
    image: "/srpski/images/drinks/jelen-pivo.svg",
    translations: {
      en: {
        name: "Jelen Beer",
        description: "Popular Serbian lager beer.",
      },
      ro: {
        name: "Bere Jelen",
        description: "Bere lager sârbească populară.",
      },
      sr: {
        name: "Јелен пиво",
        description: "Популарно српско лагер пиво.",
      },
    },
  },
  {
    id: "d2",
    price: 15,
    image: "/srpski/images/drinks/rakija.svg",
    translations: {
      en: {
        name: "Rakija",
        description: "Traditional Serbian fruit brandy, various flavors available.",
      },
      ro: {
        name: "Rakija",
        description: "Rachiu tradițional sârbesc din fructe, disponibil în diverse arome.",
      },
      sr: {
        name: "Ракија",
        description: "Традиционална српска воћна ракија, доступна у различитим укусима.",
      },
    },
  },
  {
    id: "d3",
    price: 8,
    image: "/srpski/images/drinks/coca-cola.svg",
    translations: {
      en: {
        name: "Coca-Cola",
        description: "Classic refreshing cola drink.",
      },
      ro: {
        name: "Coca-Cola",
        description: "Băutură clasică răcoritoare de cola.",
      },
      sr: {
        name: "Кока-Кола",
        description: "Класично освежавајуће пиће од коле.",
      },
    },
  },
  {
    id: "d4",
    price: 6,
    image: "/srpski/images/drinks/mineral-water.svg",
    translations: {
      en: {
        name: "Mineral Water",
        description: "Sparkling or still mineral water.",
      },
      ro: {
        name: "Apă Minerală",
        description: "Apă minerală carbogazoasă sau plată.",
      },
      sr: {
        name: "Минерална вода",
        description: "Газирана или негазирана минерална вода.",
      },
    },
  },
  {
    id: "d5",
    price: 10,
    image: "/srpski/images/drinks/homemade-lemonade.svg",
    translations: {
      en: {
        name: "Homemade Lemonade",
        description: "Freshly squeezed lemonade with mint.",
      },
      ro: {
        name: "Limonadă de Casă",
        description: "Limonadă proaspăt stoarsă cu mentă.",
      },
      sr: {
        name: "Домаћа лимунада",
        description: "Свеже цеђена лимунада sa mentom.",
      },
    },
  },
  {
    id: "d6",
    price: 8,
    image: "/srpski/images/drinks/soft-drinks.svg",
    translations: {
      en: {
        name: "Soft Drinks",
        description: "Various soft drinks available.",
      },
      ro: {
        name: "Băuturi Răcoritoare",
        description: "Diverse băuturi răcoritoare disponibile.",
      },
      sr: {
        name: "Безалкохолна пића",
        description: "Разна безалкохолна пића на располагању.",
      },
    },
  },
]

export const featuredBurgers: MenuItem[] = [
  burgers[0], // Classic Pljeskavica
  burgers[1], // Gurmanska Pljeskavica
  burgers[2], // Leskovačka Pljeskavica
]
