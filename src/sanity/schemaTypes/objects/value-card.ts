import { defineType, defineField } from 'sanity'

export const valueCard = defineType({
  name: 'valueCard',
  title: 'Value Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Heart (Naturalidad)', value: 'heart' },
          { title: 'Check Circle (Calidad)', value: 'checkCircle' },
          { title: 'Globe (Sostenibilidad)', value: 'globe' },
          { title: 'Star', value: 'star' },
          { title: 'Leaf', value: 'leaf' },
          { title: 'Shield', value: 'shield' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'icon' },
  },
})
