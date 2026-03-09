import {defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'headline'},
    prepare({title}) {
      return {title: title || 'Hero', subtitle: 'Hero Section'}
    },
  },
})
