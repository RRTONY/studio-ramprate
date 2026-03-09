import {defineType} from 'sanity'

export default defineType({
  name: 'logoBar',
  title: 'Logo Bar',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'clientLogo'}]}],
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Logo Bar', subtitle: 'Client Logos Section'}
    },
  },
})
