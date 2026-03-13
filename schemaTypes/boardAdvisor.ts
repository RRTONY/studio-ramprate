import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'boardAdvisor',
  title: 'Board Advisor',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text', rows: 3}),
    defineField({name: 'whyAdvise', title: 'Why I Advise', type: 'text', rows: 2}),
    defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'twitter', title: 'Twitter/X URL', type: 'url'}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
  ],
  orderings: [{title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})
