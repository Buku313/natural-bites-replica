import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const nosotrosPage = defineType({
  name: 'nosotrosPage',
  title: 'Nosotros Page',
  type: 'document',
  icon: UsersIcon,
  fieldsets: [
    { name: 'hero', title: 'Hero Section', options: { collapsible: true, collapsed: false } },
    { name: 'about', title: 'About Section', options: { collapsible: true, collapsed: true } },
    { name: 'mission', title: 'Mission Section', options: { collapsible: true, collapsed: true } },
    { name: 'vision', title: 'Vision Section', options: { collapsible: true, collapsed: true } },
    { name: 'values', title: 'Values Section', options: { collapsible: true, collapsed: true } },
    { name: 'nacascolo', title: 'Nacascolo Section', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
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
      name: 'heroSubtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'hero',
    }),

    // About
    defineField({
      name: 'aboutHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'about',
    }),
    defineField({
      name: 'aboutParagraph',
      title: 'Paragraph',
      type: 'text',
      rows: 4,
      fieldset: 'about',
    }),

    // Mission
    defineField({
      name: 'missionHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'mission',
    }),
    defineField({
      name: 'missionParagraph',
      title: 'Paragraph',
      type: 'text',
      rows: 4,
      fieldset: 'mission',
    }),
    defineField({
      name: 'missionImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'mission',
    }),

    // Vision
    defineField({
      name: 'visionHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'vision',
    }),
    defineField({
      name: 'visionParagraph',
      title: 'Paragraph',
      type: 'text',
      rows: 4,
      fieldset: 'vision',
    }),
    defineField({
      name: 'visionImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt Text' })],
      fieldset: 'vision',
    }),

    // Values
    defineField({
      name: 'valuesHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'values',
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{ type: 'valueCard' }],
      validation: (rule) => rule.max(6),
      fieldset: 'values',
    }),

    // Nacascolo
    defineField({
      name: 'nacascoloText',
      title: 'Text',
      type: 'string',
      fieldset: 'nacascolo',
    }),
    defineField({
      name: 'nacascoloLogo',
      title: 'Logo',
      type: 'image',
      fieldset: 'nacascolo',
    }),
    defineField({
      name: 'nacascoloUrl',
      title: 'URL',
      type: 'url',
      fieldset: 'nacascolo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Nosotros Page' }
    },
  },
})
