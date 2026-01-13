import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Menu Name',
            type: 'string',
            description: 'e.g. Main Menu, Footer Menu',
        }),
        defineField({
            name: 'items',
            title: 'Menu Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        }),
                        defineField({
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Page', value: 'page' },
                                    { title: 'External URL', value: 'external' },
                                ],
                                layout: 'radio',
                            },
                        }),
                        defineField({
                            name: 'page',
                            title: 'Page',
                            type: 'reference',
                            to: [{ type: 'page' }, { type: 'post' }],
                            hidden: ({ parent }) => parent?.type !== 'page',
                        }),
                        defineField({
                            name: 'externalUrl',
                            title: 'External URL',
                            type: 'url',
                            hidden: ({ parent }) => parent?.type !== 'external',
                        }),
                        defineField({
                            name: 'subItems',
                            title: 'Sub Items',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string',
                                        }),
                                        defineField({
                                            name: 'type',
                                            title: 'Type',
                                            type: 'string',
                                            options: {
                                                list: [
                                                    { title: 'Page', value: 'page' },
                                                    { title: 'External URL', value: 'external' },
                                                ],
                                                layout: 'radio',
                                            },
                                        }),
                                        defineField({
                                            name: 'page',
                                            title: 'Page',
                                            type: 'reference',
                                            to: [{ type: 'page' }, { type: 'post' }],
                                            hidden: ({ parent }) => parent?.type !== 'page',
                                        }),
                                        defineField({
                                            name: 'externalUrl',
                                            title: 'External URL',
                                            type: 'url',
                                            hidden: ({ parent }) => parent?.type !== 'external',
                                        }),
                                    ],
                                    preview: {
                                        select: {
                                            title: 'label',
                                            type: 'type',
                                        },
                                        prepare({ title, type }) {
                                            return {
                                                title: title || 'No Label',
                                                subtitle: type === 'page' ? 'Internal Page' : 'External Link',
                                            }
                                        },
                                    },
                                },
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'label',
                            type: 'type',
                        },
                        prepare({ title, type }) {
                            return {
                                title: title || 'No Label',
                                subtitle: type === 'page' ? 'Internal Page' : 'External Link',
                            }
                        },
                    },
                },
            ],
        }),
    ],
})
