import {defineType} from 'sanity'

export default defineType({
  name: 'teamGrid',
  title: 'Team Grid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Team Grid', subtitle: 'Team Members Section'}
    },
  },
})
