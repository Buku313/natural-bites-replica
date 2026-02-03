import { defineQuery } from 'next-sanity'

export const SITE_SETTINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "siteSettings"][0]{
    siteName,
    logo { asset->{ _id, url }, alt },
    logoWhite { asset->{ _id, url }, alt },
    nacascoloLogo { asset->{ _id, url }, alt },
    navLinks[]{ _key, label, href },
    socialLinks[]{ _key, platform, url },
    contactItems[]{ _key, type, label, value }
  }
`)

export const ALL_PRODUCTS_QUERY = defineQuery(/* groq */ `
  *[_type == "product"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image { asset->{ _id, url }, alt },
    category->{ _id, title, "slug": slug.current },
    price,
    compareAtPrice,
    discountLabel,
    isFeatured
  }
`)

export const ALL_RECIPES_QUERY = defineQuery(/* groq */ `
  *[_type == "recipe"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    image { asset->{ _id, url }, alt },
    category->{ _id, title, "slug": slug.current }
  }
`)

export const HOME_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "homePage"][0]{
    heroHeading,
    heroButtonText,
    heroButtonLink,
    snacksHeading,
    snacksParagraph,
    featuredProducts[]->{
      _id,
      name,
      price,
      image { asset->{ _id, url }, alt },
      category->{ _id, title }
    },
    featuredProductsQuantityLabel,
    featuredProductsBuyButtonTemplate,
    feature1Heading,
    feature1Paragraph,
    feature1ButtonText,
    feature1ButtonLink,
    feature1Image { asset->{ _id, url }, alt },
    bannerImage { asset->{ _id, url }, alt },
    feature2Heading,
    feature2Paragraph,
    feature2ButtonText,
    feature2ButtonLink,
    feature2Image { asset->{ _id, url }, alt },
    newsletterHeading,
    newsletterParagraph,
    newsletterButtonText,
    newsletterButtonLink,
    newsletterImage { asset->{ _id, url }, alt },
  }
`)

export const NOSOTROS_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "nosotrosPage"][0]{
    heroImage { asset->{ _id, url }, alt },
    heroHeading,
    heroSubtitle,
    aboutHeading,
    aboutParagraph,
    missionHeading,
    missionParagraph,
    missionImage { asset->{ _id, url }, alt },
    visionHeading,
    visionParagraph,
    visionImage { asset->{ _id, url }, alt },
    valuesHeading,
    values[]{ _key, icon, title, description },
    nacascoloText,
    nacascoloLogo { asset->{ _id, url } },
    nacascoloUrl,
  }
`)

export const CONTACTANOS_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "contactanosPage"][0]{
    heroHeading,
    heroSubtitle,
    formHeading,
    formButtonText,
    contactInfoHeading,
    socialLinksHeading,
  }
`)
