'use client'



export const dynamic = 'force-static';

export function generateStaticParams() {
    return [{ tool: [] }];
}

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
