import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = '43pozuam';
export const dataset = 'production';
export const apiVersion = '2023-05-03';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false for ISR to work correctly with revalidation
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
