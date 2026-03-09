import {defineType} from 'sanity'

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Get in Touch',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    prepare() {
      return {title: 'Contact Form', subtitle: 'Contact Form Section'}
    },
  },
})
