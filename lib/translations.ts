export type Language = "en" | "ro" | "sr"

export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
]

export const translations = {
  en: {
    // Common
    "site.name": "Srpski Burger Grill",
    "site.tagline": "Authentic Serbian burgers made with traditional recipes and the finest ingredients",

    // Navigation
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.menuTitle": "Navigation Menu",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.order": "Order Online",

    // Home Page
    "home.hero.title": "Srpski Burger Grill",
    "home.hero.subtitle": "Authentic Serbian burgers made with traditional recipes and the finest ingredients",
    "home.hero.order": "Order Online",
    "home.hero.menu": "View Menu",
    "home.featured.title": "Our Signature Burgers",
    "home.featured.viewAll": "View Full Menu",
    "home.about.title": "About Srpski Burger Grill",
    "home.about.description1":
      "Located in the heart of Timișoara, Srpski Burger Grill brings authentic Serbian flavors to Romania. Our burgers are made with traditional recipes passed down through generations, using only the freshest ingredients and premium meats.",
    "home.about.description2":
      "We take pride in our unique grilling technique that gives our burgers that distinctive smoky flavor that keeps our customers coming back for more.",
    "home.cta.title": "Ready to Taste the Best Serbian Burgers?",
    "home.cta.subtitle": "Order online 30 minutes before pickup and have your delicious meal ready when you arrive!",
    "home.cta.button": "Order Now",

    // Menu Page
    "menu.title": "Our Menu",
    "menu.subtitle": "Discover our authentic Serbian burgers and specialties",
    "menu.tab.burgers": "Burgers",
    "menu.tab.sides": "Sides",
    "menu.tab.drinks": "Drinks",
    "menu.order": "Order",

    // About Page
    "about.title": "About Us",
    "about.subtitle": "Discover the story behind Srpski Burger Grill",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Srpski Burger Grill was founded in 2018 by Chef Milan Petrović, who wanted to bring authentic Serbian flavors to Timișoara. Born and raised in Belgrade, Milan learned the art of making traditional pljeskavica from his grandfather, a renowned chef in Serbia.",
    "about.story.p2":
      "After years of perfecting his recipes and techniques, Milan decided to share his passion for Serbian cuisine with the people of Timișoara. What started as a small food truck quickly gained popularity, leading to the opening of our current restaurant location.",
    "about.story.p3":
      "Today, Srpski Burger Grill is known for serving the most authentic Serbian burgers in the city, made with traditional recipes and the finest ingredients. We take pride in our unique grilling technique that gives our burgers that distinctive smoky flavor that keeps our customers coming back for more.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Our mission is to provide an authentic taste of Serbian cuisine while creating a welcoming atmosphere for our guests. We believe in preserving traditional cooking methods while adding our own creative touch to deliver an unforgettable dining experience.",
    "about.team.title": "Our Team",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "We'd love to hear from you! Reach out with any questions or feedback.",
    "contact.form.title": "Get in Touch",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Our Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",

    // Order Page
    "order.title": "Order Online",
    "order.subtitle": "Place your order for pickup at least 30 minutes in advance",
    "order.cart.title": "Your Order",
    "order.cart.empty": "Your cart is empty",
    "order.cart.total": "Total",
    "order.form.name": "Name",
    "order.form.phone": "Phone",
    "order.form.email": "Email",
    "order.form.fiscalCode": "Fiscal Code (CUI/CNP - Optional)",
    "order.form.fiscalNote": "For businesses that need a fiscal invoice",
    "order.form.pickupTime": "Pickup Time (min. 30 min from now)",
    "order.form.hours": "Our opening hours: 11:00 - 19:00 (Monday-Friday)",
    "order.form.timeFormat": "Please enter time in 24-hour format (e.g., 18:30)",
    "order.form.payment": "Payment Method",
    "order.form.cardOnly": "Card Payment at Pickup",
    "order.form.cardOnline": "Online Card Payment",
    "order.form.cardNote": "All orders require card payment at pickup for fiscal compliance",
    "order.form.prepaymentNote": "All orders must be paid online in advance to prevent no-shows and ensure fiscal compliance",
    "order.form.anafNote": "In accordance with Romanian fiscal regulations (ANAF), all orders must be paid by card to ensure proper fiscal records.",
    "order.form.submit": "Place Order",
    "order.form.proceed": "Proceed to Payment",
    "order.add": "Add to Order",
    "order.payment.title": "Payment Details",
    "order.payment.cardNumber": "Card Number",
    "order.payment.cardHolder": "Cardholder Name",
    "order.payment.expiryDate": "Expiry Date",
    "order.payment.cvv": "CVV",
    "order.payment.pay": "Pay Now",
    "order.payment.processing": "Processing...",
    "order.payment.cancel": "Cancel",
    "order.payment.success": "Payment Successful!",

    // Footer
    "footer.hours": "Opening Hours",
    "footer.weekdays": "Monday - Friday: 11:00 - 19:00",
    "footer.weekends": "Saturday - Sunday: Closed",
    "footer.rights": "All rights reserved.",
  },

  ro: {
    // Common
    "site.name": "Srpski Burger Grill",
    "site.tagline": "Burgeri sârbești autentici preparați cu rețete tradiționale și cele mai fine ingrediente",

    // Navigation
    "nav.home": "Acasă",
    "nav.menu": "Meniu",
    "nav.menuTitle": "Meniu de navigare",
    "nav.about": "Despre",
    "nav.contact": "Contact",
    "nav.order": "Comandă online",

    // Home Page
    "home.hero.title": "Srpski Burger Grill",
    "home.hero.subtitle": "Burgeri sârbești autentici preparați cu rețete tradiționale și cele mai fine ingrediente",
    "home.hero.order": "Comandă online",
    "home.hero.menu": "Vezi meniul",
    "home.featured.title": "Burgerii noștri speciali",
    "home.featured.viewAll": "Vezi meniul complet",
    "home.about.title": "Despre Srpski Burger Grill",
    "home.about.description1":
      "Situat în inima Timișoarei, Srpski Burger Grill aduce arome sârbești autentice în România. Burgerii noștri sunt preparați cu rețete tradiționale transmise din generație în generație, folosind doar cele mai proaspete ingrediente și carne premium.",
    "home.about.description2":
      "Suntem mândri de tehnica noastră unică de grătar care oferă burgerilor noștri acea aromă distinctivă afumată care îi face pe clienții noștri să revină pentru mai mult.",
    "home.cta.title": "Gata să guști cei mai buni burgeri sârbești?",
    "home.cta.subtitle": "Comandă online cu 30 de minute înainte de ridicare și ai masa delicioasă gata când ajungi!",
    "home.cta.button": "Comandă acum",

    // Menu Page
    "menu.title": "Meniul nostru",
    "menu.subtitle": "Descoperă burgerii și specialitățile noastre sârbești autentice",
    "menu.tab.burgers": "Burgeri",
    "menu.tab.sides": "Garnituri",
    "menu.tab.drinks": "Băuturi",
    "menu.order": "Comandă",

    // About Page
    "about.title": "Despre noi",
    "about.subtitle": "Descoperă povestea din spatele Srpski Burger Grill",
    "about.story.title": "Povestea noastră",
    "about.story.p1":
      "Srpski Burger Grill a fost fondat în 2018 de Chef Milan Petrović, care a dorit să aducă arome sârbești autentice în Timișoara. Născut și crescut în Belgrad, Milan a învățat arta de a face pljeskavica tradițională de la bunicul său, un renumit bucătar din Serbia.",
    "about.story.p2":
      "După ani de perfecționare a rețetelor și tehnicilor sale, Milan a decis să-și împărtășească pasiunea pentru bucătăria sârbească cu locuitorii Timișoarei. Ceea ce a început ca un mic food truck a câștigat rapid popularitate, ducând la deschiderea locației actuale a restaurantului nostru.",
    "about.story.p3":
      "Astăzi, Srpski Burger Grill este cunoscut pentru servirea celor mai autentici burgeri sârbești din oraș, preparați cu rețete tradiționale și cele mai fine ingrediente. Suntem mândri de tehnica noastră unică de grătar care oferă burgerilor noștri acea aromă distinctivă afumată care îi face pe clienții noștri să revină pentru mai mult.",
    "about.mission.title": "Misiunea noastră",
    "about.mission.description":
      "Misiunea noastră este să oferim un gust autentic al bucătăriei sârbești, creând în același timp o atmosferă primitoare pentru oaspeții noștri. Credem în păstrarea metodelor tradiționale de gătit, adăugând propria noastră atingere creativă pentru a oferi o experiență culinară de neuitat.",
    "about.team.title": "Echipa noastră",

    // Contact Page
    "contact.title": "Contactează-ne",
    "contact.subtitle": "Ne-ar plăcea să auzim de la tine! Contactează-ne cu orice întrebări sau feedback.",
    "contact.form.title": "Ia legătura cu noi",
    "contact.form.name": "Nume",
    "contact.form.email": "Email",
    "contact.form.subject": "Subiect",
    "contact.form.message": "Mesaj",
    "contact.form.submit": "Trimite mesaj",
    "contact.info.title": "Informațiile noastre",
    "contact.info.address": "Adresă",
    "contact.info.phone": "Telefon",
    "contact.info.email": "Email",

    // Order Page
    "order.title": "Comandă online",
    "order.subtitle": "Plasează comanda pentru ridicare cu cel puțin 30 de minute în avans",
    "order.cart.title": "Comanda ta",
    "order.cart.empty": "Coșul tău este gol",
    "order.cart.total": "Total",
    "order.form.name": "Nume",
    "order.form.phone": "Telefon",
    "order.form.email": "Email",
    "order.form.fiscalCode": "Cod Fiscal (CUI/CNP - Opțional)",
    "order.form.fiscalNote": "Pentru companii care au nevoie de factură fiscală",
    "order.form.pickupTime": "Ora de ridicare (min. 30 min de acum)",
    "order.form.hours": "Programul nostru: 11:00 - 19:00 (Luni-Vineri)",
    "order.form.timeFormat": "Vă rugăm să introduceți ora în format 24 de ore (ex., 18:30)",
    "order.form.payment": "Metodă de plată",
    "order.form.cardOnly": "Plată cu card la ridicare",
    "order.form.cardOnline": "Plată online cu card",
    "order.form.cardNote": "Toate comenzile necesită plată cu card la ridicare pentru conformitate fiscală",
    "order.form.prepaymentNote": "Toate comenzile trebuie plătite în avans online pentru a preveni neprezentările și a asigura conformitatea fiscală",
    "order.form.anafNote": "În conformitate cu reglementările fiscale din România (ANAF), toate comenzile trebuie plătite cu cardul pentru a asigura înregistrările fiscale corespunzătoare.",
    "order.form.submit": "Plasează comanda",
    "order.form.proceed": "Continuă la plată",
    "order.add": "Adaugă la comandă",
    "order.payment.title": "Detalii de plată",
    "order.payment.cardNumber": "Număr card",
    "order.payment.cardHolder": "Nume titular card",
    "order.payment.expiryDate": "Data expirării",
    "order.payment.cvv": "CVV",
    "order.payment.pay": "Plătește acum",
    "order.payment.processing": "Se procesează...",
    "order.payment.cancel": "Anulează",
    "order.payment.success": "Plată efectuată cu succes!",

    // Footer
    "footer.hours": "Program de funcționare",
    "footer.weekdays": "Luni - Vineri: 11:00 - 19:00",
    "footer.weekends": "Sâmbătă - Duminică: Închis",
    "footer.rights": "Toate drepturile rezervate.",
  },

  sr: {
    // Common
    "site.name": "Српски Бургер Грил",
    "site.tagline": "Аутентични српски бургери направљени са традиционалним рецептима и најфинијим састојцима",

    // Navigation
    "nav.home": "Почетна",
    "nav.menu": "Мени",
    "nav.menuTitle": "Мени за навигацију",
    "nav.about": "О нама",
    "nav.contact": "Контакт",
    "nav.order": "Наручи онлајн",

    // Home Page
    "home.hero.title": "Српски Бургер Грил",
    "home.hero.subtitle": "Аутентични српски бургери направљени са традиционалним рецептима и најфинијим састојцима",
    "home.hero.order": "Наручи онлајн",
    "home.hero.menu": "Погледај мени",
    "home.featured.title": "Наши специјални бургери",
    "home.featured.viewAll": "Погледај цео мени",
    "home.about.title": "О Српском Бургер Грилу",
    "home.about.description1":
      "Смештен у срцу Темишвара, Српски Бургер Грил доноси аутентичне српске укусе у Румунију. Наши бургери су направљени по традиционалним рецептима који се преносе генерацијама, користећи само најсвежије састојке и премијум месо.",
    "home.about.description2":
      "Поносни смо на нашу јединствену технику роштиља која нашим бургерима даје тај препознатљив димљени укус због којег се наши купци увек враћају.",
    "home.cta.title": "Спремни да пробате најбоље српске бургере?",
    "home.cta.subtitle": "Наручите онлајн 30 минута пре преузимања и имаћете укусан оброк спреман када стигнете!",
    "home.cta.button": "Наручи сада",

    // Menu Page
    "menu.title": "Наш мени",
    "menu.subtitle": "Откријте наше аутентичне српске бургере и специјалитете",
    "menu.tab.burgers": "Бургери",
    "menu.tab.sides": "Прилози",
    "menu.tab.drinks": "Пића",
    "menu.order": "Наручи",

    // About Page
    "about.title": "О нама",
    "about.subtitle": "Откријте причу иза Српског Бургер Грила",
    "about.story.title": "Наша прича",
    "about.story.p1":
      "Српски Бургер Грил је основан 2018. године од стране шефа Милана Петровића, који је желео да донесе аутентичне српске укусе у Темишвар. Рођен и одрастао у Београду, Милан је научио уметност прављења традиционалне пљескавице од свог деде, познатог кувара у Србији.",
    "about.story.p2":
      "Након година усавршавања својих рецепата и техника, Милан је одлучио да подели своју страст за српском кухињом са становницима Темишвара. Оно што је почело као мали фуд трак брзо је стекло популарност, што је довело до отварања наше тренутне локације ресторана.",
    "about.story.p3":
      "Данас је Српски Бургер Грил познат по служењу најаутентичнијих српских бургера у граду, направљених са традиционалним рецептима и најфинијим састојцима. Поносни смо на нашу јединствену технику роштиља која нашим бургерима даје тај препознатљив димљени укус због којег се наши купци увек враћају.",
    "about.mission.title": "Наша мисија",
    "about.mission.description":
      "Наша мисија је да пружимо аутентичан укус српске кухиње, стварајући истовремено пријатну атмосферу за наше госте. Верујемо у очување традиционалних метода кувања, додајући наш креативни додир како бисмо пружили незаборавно кулинарско искуство.",
    "about.team.title": "Наш тим",

    // Contact Page
    "contact.title": "Контактирајте нас",
    "contact.subtitle":
      "Волели бисмо да чујемо од вас! Јавите нам се са било којим питањима или повратним информацијама.",
    "contact.form.title": "Ступите у контакт",
    "contact.form.name": "Име",
    "contact.form.email": "Имејл",
    "contact.form.subject": "Предмет",
    "contact.form.message": "Порука",
    "contact.form.submit": "Пошаљи поруку",
    "contact.info.title": "Наше информације",
    "contact.info.address": "Адреса",
    "contact.info.phone": "Телефон",
    "contact.info.email": "Имејл",

    // Order Page
    "order.title": "Наручи онлајн",
    "order.subtitle": "Поставите своју наруџбину за преузимање најмање 30 минута унапред",
    "order.cart.title": "Ваша наруџбина",
    "order.cart.empty": "Ваша корпа је празна",
    "order.cart.total": "Укупно",
    "order.form.name": "Име",
    "order.form.phone": "Телефон",
    "order.form.email": "Имејл",
    "order.form.fiscalCode": "Фискални код (ЦУИ/ЦНП - Опционо)",
    "order.form.fiscalNote": "За предузећа којима је потребна фискална фактура",
    "order.form.pickupTime": "Време преузимања (мин. 30 мин од сада)",
    "order.form.hours": "Наше радно време: 11:00 - 19:00 (Понедељак-Петак)",
    "order.form.timeFormat": "Унесите време у 24-часовном формату (нпр. 18:30)",
    "order.form.payment": "Начин плаћања",
    "order.form.cardOnly": "Плаћање картицом при преузимању",
    "order.form.cardOnline": "Онлајн плаћање картицом",
    "order.form.cardNote": "Све наруџбине захтевају плаћање картицом при преузимању ради фискалне усклађености",
    "order.form.prepaymentNote": "Све наруџбине морају бити плаћене унапред онлајн како би се спречило неодазивање и осигурала фискална усклађеност",
    "order.form.anafNote": "У складу са румунским фискалним прописима (АНАФ), све наруџбине морају бити плаћене картицом како би се осигурали одговарајући фискални записи.",
    "order.form.submit": "Пошаљи наруџбину",
    "order.form.proceed": "Настави на плаћање",
    "order.add": "Додај у наруџбину",
    "order.payment.title": "Детаљи плаћања",
    "order.payment.cardNumber": "Број картице",
    "order.payment.cardHolder": "Име власника картице",
    "order.payment.expiryDate": "Датум истека",
    "order.payment.cvv": "ЦВВ",
    "order.payment.pay": "Плати сада",
    "order.payment.processing": "Обрада...",
    "order.payment.cancel": "Откажи",
    "order.payment.success": "Плаћање успешно!",

    // Footer
    "footer.hours": "Радно време",
    "footer.weekdays": "Понедељак - Петак: 11:00 - 19:00",
    "footer.weekends": "Субота - Недеља: Затворено",
    "footer.rights": "Сва права задржана.",
  },
}

// This will allow any string to be used as a translation key
export type TranslationKey = string;
