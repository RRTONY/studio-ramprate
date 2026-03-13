import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Client / Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'result', title: 'Result Headline', type: 'string'}),
    defineField({name: 'desc', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Short bullet metrics e.g. "26% cost reduction"',
    }),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [{title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'title', subtitle: 'result'},
    prepare({title, subtitle}) {
      return {title: title || 'Case Study', subtitle: subtitle || ''}
    },
  },
})
