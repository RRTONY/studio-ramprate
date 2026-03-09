import {defineType} from 'sanity'

export default defineType({
  name: 'blogLatest',
  title: 'Latest Blog Posts',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Latest from the Blog',
    },
    {
      name: 'count',
      title: 'Number of Posts',
      type: 'number',
      initialValue: 3,
      validation: (rule) => rule.min(1).max(12),
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Latest Blog Posts', subtitle: 'Blog Section'}
    },
  },
})
