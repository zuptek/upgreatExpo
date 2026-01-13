"use server";

import { client } from "@/lib/sanity";

export async function searchPosts(term: string) {
    if (!term.trim()) return [];

    try {
        const query = `*[_type == "post" && (title match $term + "*" || pt::text(body) match $term + "*")] | order(publishedAt desc) [0...5] {
            title,
            slug,
            publishedAt
        }`;
        const data = await client.fetch(query, { term });
        return data;
    } catch (error) {
        console.error("Search error:", error);
        return [];
    }
}
