import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Event Management Studio',

  projectId: '43pozuam',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            S.documentTypeListItems().filter(
              (listItem) => !['navigation', 'page'].includes(listItem.getId() as string)
            )
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
