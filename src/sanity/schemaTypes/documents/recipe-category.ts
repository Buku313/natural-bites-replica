import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const recipeCategory = defineType({
  name: 'recipeCategory',
  title: 'Recipe Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
  ],
})
