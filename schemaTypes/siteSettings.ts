import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'RampRate',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'bCorpBadge',
      title: 'B-Corp Badge',
      type: 'image',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()},
            {name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()},
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'street', title: 'Street', type: 'string'},
        {name: 'city', title: 'City', type: 'string'},
        {name: 'state', title: 'State', type: 'string'},
        {name: 'zip', title: 'ZIP', type: 'string'},
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Twitter / X', value: 'twitter'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Facebook', value: 'facebook'},
                ],
              },
              validation: (rule) => rule.required(),
            },
            {name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required()},
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
          },
        },
      ],
    }),
    defineField({
      name: 'companyValues',
      title: 'Company Values',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'timeline',
      title: 'Company Timeline',
      type: 'array',
      of: [{type: 'object', fields: [{name: 'year', title: 'Year', type: 'string'}, {name: 'event', title: 'Event', type: 'string'}], preview: {select: {title: 'year', subtitle: 'event'}}}],
    }),
    defineField({
      name: 'corporateFacts',
      title: 'Corporate Facts',
      type: 'array',
      of: [{type: 'object', fields: [{name: 'label', title: 'Label', type: 'string'}, {name: 'value', title: 'Value', type: 'string'}], preview: {select: {title: 'label', subtitle: 'value'}}}],
    }),
        defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'e.g. G-XXXXXXXXXX',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
