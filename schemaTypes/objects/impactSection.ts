import {defineType} from 'sanity'

export default defineType({
  name: 'impactSection',
  title: 'Impact Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'items',
      title: 'Impact Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {name: 'icon', title: 'Icon', type: 'image'},
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Impact Section', subtitle: 'Impact Section'}
    },
  },
})
