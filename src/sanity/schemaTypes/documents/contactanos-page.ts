import { defineType, defineField } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const contactanosPage = defineType({
  name: 'contactanosPage',
  title: 'Contáctanos Page',
  type: 'document',
  icon: EnvelopeIcon,
  fieldsets: [
    { name: 'hero', title: 'Hero Section', options: { collapsible: true, collapsed: false } },
    { name: 'contactForm', title: 'Contact Form Section', options: { collapsible: true, collapsed: true } },
    { name: 'contactInfo', title: 'Contact Info Section', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // Hero
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

    // Contact Form
    defineField({
      name: 'formHeading',
      title: 'Form Heading',
      type: 'string',
      fieldset: 'contactForm',
    }),
    defineField({
      name: 'formButtonText',
      title: 'Form Button Text',
      type: 'string',
      fieldset: 'contactForm',
    }),

    // Contact Info
    defineField({
      name: 'contactInfoHeading',
      title: 'Contact Info Heading',
      type: 'string',
      fieldset: 'contactInfo',
    }),
    defineField({
      name: 'socialLinksHeading',
      title: 'Social Links Heading',
      type: 'string',
      fieldset: 'contactInfo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contáctanos Page' }
    },
  },
})
