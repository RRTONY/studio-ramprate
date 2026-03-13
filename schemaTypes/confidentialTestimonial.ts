import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'confidentialTestimonial',
  title: 'Confidential Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required()}),
    defineField({name: 'attribution', title: 'Attribution', type: 'string', description: 'e.g. "SVP, Global Infrastructure · Fortune 100 Technology Company"'}),
    defineField({
      name: 'division',
      title: 'Division',
      type: 'string',
      options: {list: [{title: 'RampRate', value: 'RampRate'}, {title: 'Syzygy', value: 'Syzygy'}, {title: 'Stratum', value: 'Stratum'}, {title: 'ImpactSoul', value: 'ImpactSoul'}]},
    }),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [{title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'attribution', subtitle: 'division'},
    prepare({title, subtitle}) {
      return {title: title || 'Confidential', subtitle: subtitle || ''}
    },
  },
})
