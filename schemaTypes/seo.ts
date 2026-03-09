import {defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (rule) => rule.max(60).warning('Should be under 60 characters'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160).warning('Should be under 160 characters'),
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Hide this page from search engines',
      initialValue: false,
    },
  ],
})
