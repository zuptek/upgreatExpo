'use client'

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = '43pozuam'
const dataset = 'production'

export default defineConfig({
    basePath: '/studio',
    name: 'UpgreatExpo_Studio',
    title: 'UpgreatExpo Studio',

    projectId,
    dataset,

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
