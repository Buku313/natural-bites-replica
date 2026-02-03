import type { StructureResolver } from 'sanity/structure'
import { CogIcon, HomeIcon, UsersIcon, EnvelopeIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('4420a16e-702c-4543-b1cb-8c876147f4d3')
                ),
              S.listItem()
                .title('Nosotros Page')
                .icon(UsersIcon)
                .child(
                  S.document()
                    .schemaType('nosotrosPage')
                    .documentId('e8649bda-1b11-434c-923f-94738ba0c1cd')
                ),
              S.listItem()
                .title('Contáctanos Page')
                .icon(EnvelopeIcon)
                .child(
                  S.document()
                    .schemaType('contactanosPage')
                    .documentId('6f9e63c2-1d00-4eb1-9f37-c0bd1ad9185d')
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('productCategory').title('Product Categories'),
      S.documentTypeListItem('recipe').title('Recipes'),
      S.documentTypeListItem('recipeCategory').title('Recipe Categories'),
    ])
