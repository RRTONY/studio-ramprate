import {defineType} from 'sanity'

export default defineType({
  name: 'testimonialGrid',
  title: 'Testimonial Grid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Testimonial Grid', subtitle: 'Client Testimonials Section'}
    },
  },
})
