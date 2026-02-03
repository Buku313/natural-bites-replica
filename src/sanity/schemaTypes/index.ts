import type { SchemaTypeDefinition } from 'sanity'

// Objects
import { socialLink } from './objects/social-link'
import { contactInfo } from './objects/contact-info'
import { valueCard } from './objects/value-card'

// Documents
import { product } from './documents/product'
import { productCategory } from './documents/product-category'
import { recipe } from './documents/recipe'
import { recipeCategory } from './documents/recipe-category'
import { siteSettings } from './documents/site-settings'
import { homePage } from './documents/home-page'
import { nosotrosPage } from './documents/nosotros-page'
import { contactanosPage } from './documents/contactanos-page'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  socialLink,
  contactInfo,
  valueCard,

  // Documents
  product,
  productCategory,
  recipe,
  recipeCategory,
  siteSettings,
  homePage,
  nosotrosPage,
  contactanosPage,
]
