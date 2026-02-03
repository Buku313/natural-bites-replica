/**
 * Seed script: creates the 3 singleton page documents in Sanity
 * with all current hardcoded text values and images from image-map.json.
 *
 * Run with: npx tsx scripts/seed-pages.ts
 *
 * Requires SANITY_API_WRITE_TOKEN env variable.
 */
import { createClient } from '@sanity/client'
import imageMap from './image-map.json'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'pgfl5hzz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-11-01',
  useCdn: false,
})

function imgRef(key: keyof typeof imageMap, alt?: string) {
  const id = imageMap[key]
  if (!id) return undefined
  return {
    _type: 'image' as const,
    asset: { _type: 'reference' as const, _ref: id },
    ...(alt ? { alt } : {}),
  }
}

// Featured product IDs (from Sanity dataset)
const PRODUCT_IDS = {
  peanutButterSugarFree: '26086310-8a80-4097-a9dc-be79d419c9f7',
  almondButterProtein: '409711e4-c028-483e-85af-5007fc91a1f4',
  chocoNutButter: '490624cd-6c7b-4dd2-befc-8a1c8f2bab0a',
}

async function seedPages() {
  const transaction = client.transaction()

  // ── Home Page ──────────────────────────────────────────────
  transaction.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',

    // Hero
    heroImage: imgRef('hero-bg', 'Peanut butter background'),
    heroHeading: 'DISFRUTÁ CON NATURALIDAD CADA MOMENTO',
    heroButtonText: '¡Comienza aquí!',
    heroButtonLink: '/tienda',

    // Snacks
    snacksHeading: 'SNACKS SALUDABLES',
    snacksParagraph:
      'En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor inolvidable a todas tus recetas, formando parte de un estilo de vida saludable.',

    // Featured Products
    featuredProducts: [
      { _type: 'reference', _ref: PRODUCT_IDS.peanutButterSugarFree, _key: 'fp1' },
      { _type: 'reference', _ref: PRODUCT_IDS.almondButterProtein, _key: 'fp2' },
      { _type: 'reference', _ref: PRODUCT_IDS.chocoNutButter, _key: 'fp3' },
    ],
    featuredProductsQuantityLabel: 'Cantidad',
    featuredProductsBuyButtonTemplate: '{price} | Compre ahora',

    // Feature Block 1
    feature1Image: imgRef('chips-dip', 'Tortilla chips with dips'),
    feature1Heading: 'UN SNACK CON NATURALIDAD PARA TODO MOMENTO',
    feature1Paragraph:
      'Ya sea en un momento a solas, con amigos o en un break, nuestros productos te acompañan en cada momento, siempre con naturalidad.',
    feature1ButtonText: 'Elegí tu favorito',
    feature1ButtonLink: '/tienda',

    // Banner
    bannerImage: imgRef('banner-nuevo-look', 'New Product Alert - 4 nuevos sabores'),

    // Feature Block 2
    feature2Image: imgRef('banano', 'Muffin Mix with Banana'),
    feature2Heading: 'SNACKS SALUDABLES PARA TODO MOMENTO',
    feature2Paragraph:
      'Una deliciosa variedad de snacks saludables que todos pueden disfrutar en cualquier ocasión.',
    feature2ButtonText: 'Conocé nuestras recetas',
    feature2ButtonLink: '/recetas',

    // Newsletter
    newsletterImage: imgRef('bowl', 'Bowl of nuts'),
    newsletterHeading: 'EAT HEALTHY.\nSMILE MORE.',
    newsletterParagraph:
      'Recibe tips de cocina saludable\n¡todas las semanas en tu email!',
    newsletterButtonText: '¡Suscríbete aquí!',
    newsletterButtonLink: '/recetas',
  })

  // ── Nosotros Page ──────────────────────────────────────────
  transaction.createOrReplace({
    _id: 'nosotrosPage',
    _type: 'nosotrosPage',

    // Hero
    heroImage: imgRef('nosotros-hero', 'Nosotros - Natural Bites'),
    heroHeading: 'NOSOTROS',
    heroSubtitle: 'Conoce nuestra historia y pasión por lo natural',

    // About
    aboutHeading: 'Nuestra Historia',
    aboutParagraph:
      'En Natural Bites buscamos crear productos deliciosos y naturales que le den un sabor inolvidable a todas tus recetas, formando parte de un estilo de vida saludable.',

    // Mission
    missionHeading: 'Nuestra Misión',
    missionParagraph:
      'Ofrecer productos naturales de la más alta calidad que complementen un estilo de vida saludable, sin sacrificar el sabor ni la experiencia de disfrutar cada bocado.',
    missionImage: imgRef('bowl', 'Natural ingredients'),

    // Vision
    visionHeading: 'Nuestra Visión',
    visionParagraph:
      'Ser la marca líder en snacks saludables en Centroamérica, inspirando a las personas a tomar decisiones más conscientes sobre su alimentación sin renunciar al placer de comer.',
    visionImage: imgRef('banano', 'Healthy products'),

    // Values
    valuesHeading: 'Nuestros Valores',
    values: [
      {
        _type: 'valueCard',
        _key: 'v1',
        icon: 'heart',
        title: 'Naturalidad',
        description:
          'Utilizamos ingredientes 100% naturales sin aditivos artificiales ni conservantes.',
      },
      {
        _type: 'valueCard',
        _key: 'v2',
        icon: 'checkCircle',
        title: 'Calidad',
        description:
          'Cada producto pasa por estrictos controles de calidad para garantizar la excelencia.',
      },
      {
        _type: 'valueCard',
        _key: 'v3',
        icon: 'globe',
        title: 'Sostenibilidad',
        description:
          'Comprometidos con prácticas sustentables y el cuidado del medio ambiente.',
      },
    ],

    // Nacascolo
    nacascoloText: 'Otra empresa de',
    nacascoloLogo: imgRef('nacas-logo'),
    nacascoloUrl: 'http://www.nacascolo.com',
  })

  // ── Contáctanos Page ───────────────────────────────────────
  transaction.createOrReplace({
    _id: 'contactanosPage',
    _type: 'contactanosPage',

    // Hero
    heroHeading: 'CONTÁCTANOS',
    heroSubtitle: 'Estamos aquí para ayudarte',

    // Form
    formHeading: 'Envíanos un mensaje',
    formButtonText: 'Enviar mensaje',

    // Contact Info
    contactInfoHeading: 'Información de contacto',
    socialLinksHeading: 'Síguenos',
  })

  console.log('Committing 3 page documents...')
  const result = await transaction.commit()
  console.log('Done!', result.documentIds)
}

seedPages().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
