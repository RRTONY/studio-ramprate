import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
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
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'servicePillars'},
        {type: 'logoBar'},
        {type: 'textSection'},
        {type: 'ctaSection'},
        {type: 'teamGrid'},
        {type: 'blogLatest'},
        {type: 'impactSection'},
        {type: 'contactForm'},
        {type: 'testimonialGrid'},
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current'},
    prepare({title, slug}) {
      return {title, subtitle: `/${slug || ''}`}
    },
  },
})
