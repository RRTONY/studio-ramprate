import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required()}),
    defineField({name: 'personName', title: 'Person Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'role', title: 'Role / Title', type: 'string'}),
    defineField({name: 'company', title: 'Company', type: 'string'}),
    defineField({name: 'companyLogo', title: 'Company Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'photo', title: 'Headshot', type: 'image', options: {hotspot: true}}),
    defineField({name: 'tag', title: 'Category Tag', type: 'string', options: {list: ['Enterprise', 'Media', 'Blockchain', 'Gaming', 'Finance']}}),
    defineField({name: 'tier', title: 'Tier', type: 'string', options: {list: [{title: 'Firm (company client)', value: 'firm'}, {title: 'Principal (individual)', value: 'principal'}]}}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'twitter', title: 'Twitter/X URL', type: 'url'}),
    defineField({name: 'order', title: 'Display Order', type: 'number', description: 'Lower numbers appear first'}),
  ],
  orderings: [{title: 'Display Order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'personName', subtitle: 'company', media: 'photo'},
    prepare({title, subtitle, media}: {title?: string; subtitle?: string; media?: unknown}) {
      return {title: title || 'Testimonial', subtitle: subtitle || '', media}
    },
  },
})
