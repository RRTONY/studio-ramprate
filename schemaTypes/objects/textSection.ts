import {defineType} from 'sanity'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
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
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Text Section', subtitle: 'Text Section'}
    },
  },
})
