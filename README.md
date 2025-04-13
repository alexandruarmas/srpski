# Srpski Burger Grill - Timișoara

A modern Next.js website for Srpski Burger Grill, an authentic Serbian burger restaurant in Timișoara, Romania.

![Srpski Burger Grill](/srpski/images/gif.gif)

## Features

- Multi-language support (English, Romanian, Serbian with Cyrillic script)
- Responsive design for all devices
- Beautiful UI with Tailwind CSS and Shadcn UI components
- Menu display with categories and images
- Online ordering system
- Contact page with Google Maps location
- About page with restaurant history and story
- Framer Motion animations for enhanced user experience

## Technologies Used

- Next.js 15.2
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Framer Motion animations
- Three.js for 3D elements
- React Hook Form for form validation

## Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the application for production:

```bash
npm run build
# or
pnpm build
```

This will generate a static export in the `out` directory because the project uses `output: 'export'` in the Next.js configuration.

## Path Configuration

This project uses a `basePath` configuration of `/srpski` in the Next.js config file:

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/srpski',
  assetPrefix: '/srpski',
  trailingSlash: true,
  // ...
}
```

This means all URLs in the project should include the `/srpski` prefix. When referencing images and assets in your code:

```jsx
// CORRECT - with basePath
<Image src="/srpski/images/burgers/classic-pljeskavica.svg" ... />

// WRONG - missing basePath
<Image src="/images/burgers/classic-pljeskavica.svg" ... />
```

## Image Assets

The website uses SVG and JPG images for the menu items. All static assets are stored in the `public` directory.

1. Logo files:
   - `/public/original-logo.jpg` - The logo used in the navbar and footer

2. Burger images in the `/public/images/burgers/` directory:
   - `classic-pljeskavica.svg` - Classic Serbian burger patty
   - `gurmanska-pljeskavica.svg` - Gourmet Serbian burger with special toppings
   - `leskovacka-pljeskavica.svg` - Spicy burger from the Leskovac region
   - `punjena-pljeskavica.svg` - Stuffed burger with kajmak
   - `sarplaninska-pljeskavica.svg` - Mountain-style burger
   - `cevapi.svg` - Serbian minced meat sausages
   - `karadjordjeva.svg` - Karađorđeva schnitzel
   - `cevapcici.svg` - Smaller version of ćevapi
   - `ustipci.svg` - Traditional Serbian fried dough balls

3. Side dish images in the `/public/images/sides/` directory:
   - `kajmak.svg` - Creamy dairy spread
   - `ajvar.svg` - Roasted red pepper spread
   - `lepinja.svg` - Serbian flatbread
   - `sopska-salad.svg` - Traditional Serbian salad
   - `srpska-salata.svg` - Serbian salad variant
   - `pomfrit.svg` - French fries
   - `urnebes.svg` - Spicy cheese spread

4. Drinks images in the `/public/images/drinks/` directory:
   - `jelen-pivo.svg` - Serbian beer
   - `rakija.svg` - Traditional Serbian spirit
   - `coca-cola.svg` - Cola drink
   - `mineral-water.svg` - Mineral water
   - `homemade-lemonade.svg` - Homemade lemonade
   - `soft-drinks.svg` - Soft drinks
   - `ayran.svg` - Yogurt drink

## Project Structure

```
/
├── app/                # Next.js app router
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── menu/           # Menu page
│   ├── order/          # Order page
│   └── components/     # App-specific components
├── components/         # Shared components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and data
├── public/             # Static assets
│   └── images/         # Images for the website
│       ├── burgers/    # Burger images
│       ├── sides/      # Side dish images
│       └── drinks/     # Drink images
├── styles/             # Global styles
└── out/                # Build output directory (generated)
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](license.js) file for details.

## Developer

Developed by Alexandru Armas