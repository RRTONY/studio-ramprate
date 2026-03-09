import {defineType} from 'sanity'

export default defineType({
  name: 'servicePillars',
  title: 'Service Pillars',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'pillars',
      title: 'Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'icon', title: 'Icon', type: 'image'},
            {name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()},
            {name: 'description', title: 'Description', type: 'text', rows: 3},
            {name: 'link', title: 'Link', type: 'string'},
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
      return {title: title || 'Service Pillars', subtitle: 'Service Pillars Section'}
    },
  },
})
