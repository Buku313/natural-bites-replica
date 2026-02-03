import { defineType, defineField } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'object',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Address', value: 'address' },
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'phone' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { label: 'label', value: 'value' },
    prepare({ label, value }) {
      return { title: label, subtitle: value }
    },
  },
})
