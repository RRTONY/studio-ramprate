import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'RampRate',

  projectId: 'xdo1fb5d',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.divider(),
            S.listItem()
              .title('Blog')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.listItem()
                      .title('Posts')
                      .schemaType('post')
                      .child(S.documentTypeList('post').title('Posts')),
                    S.listItem()
                      .title('Categories')
                      .schemaType('category')
                      .child(S.documentTypeList('category').title('Categories')),
                  ]),
              ),
            S.divider(),
            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem()
              .title('Client Logos')
              .schemaType('clientLogo')
              .child(S.documentTypeList('clientLogo').title('Client Logos')),
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('Confidential Testimonials')
              .schemaType('confidentialTestimonial')
              .child(S.documentTypeList('confidentialTestimonial').title('Confidential Testimonials')),
            S.listItem()
              .title('Board Advisors')
              .schemaType('boardAdvisor')
              .child(S.documentTypeList('boardAdvisor').title('Board Advisors')),
            S.listItem()
              .title('Case Studies')
              .schemaType('caseStudy')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
