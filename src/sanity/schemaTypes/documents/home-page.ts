import { defineType, defineField } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fieldsets: [
    { name: 'hero', title: 'Hero Section', options: { collapsible: true, collapsed: false } },
    { name: 'snacks', title: 'Snacks Section', options: { collapsible: true, collapsed: true } },
    {
      name: 'featuredProducts',
      title: 'Featured Products Section',
      options: { collapsible: true, collapsed: true },
    },
    { name: 'feature1', title: 'Feature 1 Section', options: { collapsible: true, collapsed: true } },
    { name: 'banner', title: 'Banner Section', options: { collapsible: true, collapsed: true } },
    { name: 'feature2', title: 'Feature 2 Section', options: { collapsible: true, collapsed: true } },
    { name: 'newsletter', title: 'Newsletter Section', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'hero',
    }),

    // Snacks
    defineField({
      name: 'snacksHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'snacks',
    }),
    defineField({
      name: 'snacksParagraph',
      title: 'Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'snacks',
    }),

    // Featured Products
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (rule) => rule.max(3),
      fieldset: 'featuredProducts',
    }),
    defineField({
      name: 'featuredProductsQuantityLabel',
      title: 'Quantity Label',
      type: 'string',
      fieldset: 'featuredProducts',
    }),
    defineField({
      name: 'featuredProductsBuyButtonTemplate',
      title: 'Buy Button Template',
      type: 'string',
      description: 'Use {price} as placeholder',
      fieldset: 'featuredProducts',
    }),

    // Feature 1
    defineField({
      name: 'feature1Image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'feature1',
    }),
    defineField({
      name: 'feature1Heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'feature1',
    }),
    defineField({
      name: 'feature1Paragraph',
      title: 'Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'feature1',
    }),
    defineField({
      name: 'feature1ButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'feature1',
    }),
    defineField({
      name: 'feature1ButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'feature1',
    }),

    // Banner
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'banner',
    }),

    // Feature 2
    defineField({
      name: 'feature2Image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'feature2',
    }),
    defineField({
      name: 'feature2Heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'feature2',
    }),
    defineField({
      name: 'feature2Paragraph',
      title: 'Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'feature2',
    }),
    defineField({
      name: 'feature2ButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'feature2',
    }),
    defineField({
      name: 'feature2ButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'feature2',
    }),

    // Newsletter
    defineField({
      name: 'newsletterImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'newsletter',
    }),
    defineField({
      name: 'newsletterHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'newsletter',
    }),
    defineField({
      name: 'newsletterParagraph',
      title: 'Paragraph',
      type: 'text',
      rows: 3,
      fieldset: 'newsletter',
    }),
    defineField({
      name: 'newsletterButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'newsletter',
    }),
    defineField({
      name: 'newsletterButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'newsletter',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
