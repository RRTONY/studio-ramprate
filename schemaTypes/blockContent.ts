import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Lead (large intro)', value: 'lead'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Pull Quote', value: 'pullquote'},
        {title: 'Align Center', value: 'textCenter'},
        {title: 'Align Right', value: 'textRight'},
        {title: 'Align Justify', value: 'textJustify'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike-through', value: 'strike-through'},
          {title: 'Superscript', value: 'sup'},
          {title: 'Subscript', value: 'sub'},
          {title: 'Highlight', value: 'highlight'},
          {title: 'Code (inline)', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (rule) =>
                  rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [{type: 'page'}, {type: 'post'}],
              },
            ],
          },
        ],
      },
    }),

    // ── Code Block ────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      title: 'Code Block',
      fields: [
        {
          name: 'code',
          type: 'text',
          title: 'Code',
          validation: (rule) => rule.required(),
        },
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              {title: 'Plain text', value: 'text'},
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'Python', value: 'python'},
              {title: 'Bash / Shell', value: 'bash'},
              {title: 'JSON', value: 'json'},
              {title: 'SQL', value: 'sql'},
              {title: 'Markdown', value: 'markdown'},
            ],
          },
          initialValue: 'text',
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename (optional)',
        },
      ],
      preview: {
        select: {language: 'language', filename: 'filename', code: 'code'},
        prepare({language, filename, code}: any) {
          return {
            title: filename || `Code (${language || 'text'})`,
            subtitle: code?.slice(0, 60),
          }
        },
      },
    }),

    // ── Callout / Notice Box ──────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout Box',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Type',
          options: {
            list: [
              {title: '💡 Tip', value: 'tip'},
              {title: 'ℹ️ Info', value: 'info'},
              {title: '⚠️ Warning', value: 'warning'},
              {title: '✅ Success', value: 'success'},
              {title: '❌ Error', value: 'error'},
            ],
            layout: 'radio',
          },
          initialValue: 'info',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title (optional)',
        },
        {
          name: 'body',
          type: 'text',
          title: 'Body text',
          validation: (rule) => rule.required(),
        },
      ],
      preview: {
        select: {type: 'type', title: 'title', body: 'body'},
        prepare({type, title, body}: any) {
          const icons: Record<string, string> = {tip: '💡', info: 'ℹ️', warning: '⚠️', success: '✅', error: '❌'}
          return {title: `${icons[type] || 'ℹ️'} ${title || type}`, subtitle: body?.slice(0, 60)}
        },
      },
    }),

    // ── Button / CTA ──────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'button',
      title: 'Button / CTA',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button label',
          validation: (rule) => rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          validation: (rule) =>
            rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}),
        },
        {
          name: 'style',
          type: 'string',
          title: 'Style',
          options: {
            list: [
              {title: 'Primary (filled)', value: 'primary'},
              {title: 'Secondary (outline)', value: 'secondary'},
              {title: 'Ghost (text + arrow)', value: 'ghost'},
            ],
            layout: 'radio',
          },
          initialValue: 'primary',
        },
        {
          name: 'align',
          type: 'string',
          title: 'Alignment',
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
        {
          name: 'newTab',
          type: 'boolean',
          title: 'Open in new tab',
          initialValue: false,
        },
      ],
      preview: {
        select: {label: 'label', style: 'style', url: 'url'},
        prepare({label, style}: any) {
          return {title: `Button: ${label}`, subtitle: style}
        },
      },
    }),

    // ── Spacer ────────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'spacer',
      title: 'Spacer',
      fields: [
        {
          name: 'height',
          type: 'string',
          title: 'Height',
          options: {
            list: [
              {title: 'Small (24px)', value: 'sm'},
              {title: 'Medium (48px)', value: 'md'},
              {title: 'Large (80px)', value: 'lg'},
              {title: 'Extra Large (120px)', value: 'xl'},
            ],
            layout: 'radio',
          },
          initialValue: 'md',
        },
      ],
      preview: {
        select: {height: 'height'},
        prepare({height}: any) {
          const map: Record<string, string> = {sm: '24px', md: '48px', lg: '80px', xl: '120px'}
          return {title: `Spacer — ${map[height] || '48px'}`}
        },
      },
    }),

    // ── Divider ───────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'divider',
      title: 'Divider',
      fields: [
        {
          name: 'style',
          type: 'string',
          title: 'Style',
          options: {
            list: [
              {title: 'Solid', value: 'solid'},
              {title: 'Dashed', value: 'dashed'},
              {title: 'Dotted', value: 'dotted'},
            ],
            layout: 'radio',
          },
          initialValue: 'solid',
        },
        {
          name: 'spacing',
          type: 'string',
          title: 'Spacing',
          options: {
            list: [
              {title: 'Small (16px)', value: 'sm'},
              {title: 'Medium (32px)', value: 'md'},
              {title: 'Large (56px)', value: 'lg'},
            ],
            layout: 'radio',
          },
          initialValue: 'md',
        },
      ],
      preview: {
        prepare() {
          return {title: '─────── Divider ───────'}
        },
      },
    }),

    // ── YouTube ───────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'youtube',
      title: 'YouTube Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube URL',
          description: 'Paste the full YouTube URL (e.g. https://www.youtube.com/watch?v=...)',
          validation: (rule) => rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        },
      ],
      preview: {
        select: {url: 'url', caption: 'caption'},
        prepare({url, caption}: any) {
          return {title: caption || url, subtitle: 'YouTube Video'}
        },
      },
    }),

    // ── Vimeo ─────────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'object',
      name: 'vimeo',
      title: 'Vimeo Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'Vimeo URL',
          description: 'Paste the full Vimeo URL (e.g. https://vimeo.com/123456789)',
          validation: (rule) => rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        },
      ],
      preview: {
        select: {url: 'url', caption: 'caption'},
        prepare({url, caption}: any) {
          return {title: caption || url, subtitle: 'Vimeo Video'}
        },
      },
    }),

    // ── Image ─────────────────────────────────────────────────────────────────
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'alignment',
          type: 'string',
          title: 'Alignment',
          options: {
            list: [
              {title: 'Left (float)', value: 'alignleft'},
              {title: 'Right (float)', value: 'alignright'},
              {title: 'Center', value: 'aligncenter'},
              {title: 'Full width', value: 'alignnone'},
            ],
            layout: 'radio',
          },
          initialValue: 'alignnone',
        },
        {
          name: 'width',
          type: 'number',
          title: 'Width (px, leave blank for full width)',
        },
      ],
    }),
  ],
})
