import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Surya Foods CMS'
    }
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      previewUrl: '/blog/{slug}',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.text({ label: 'Hero Image URL (or path)' }),
        author: fields.text({ label: 'Author', defaultValue: 'Surya Foods Editorial' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Industry Insights', value: 'Industry Insights' },
            { label: 'Company News', value: 'Company News' },
            { label: 'Rice Knowledge', value: 'Rice Knowledge' },
            { label: 'Export Guide', value: 'Export Guide' }
          ],
          defaultValue: 'Industry Insights'
        }),
        content: fields.markdoc({
          label: 'Content'
        }),
      },
    }),
  },
});
