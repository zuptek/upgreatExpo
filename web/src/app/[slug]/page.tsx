import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/Blog/RichTextComponents";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { slug } = await params;
        const query = `*[_type == "page" && slug.current == $slug][0]{ title }`;
        const page = await client.fetch(query, { slug });

        if (!page) {
            return {
                title: "Page Not Found - EventPro",
            };
        }

        return {
            title: `${page.title} - EventPro`,
        };
    } catch (error) {
        return {
            title: "EventPro",
        };
    }
}

// Generate Static Params for ISR
export async function generateStaticParams() {
    try {
        const query = `*[_type == "page"]{ slug }`;
        const pages = await client.fetch(query);

        return pages.map((page: any) => ({
            slug: page.slug.current,
        }));
    } catch (error) {
        console.error("Error fetching pages for static params:", error);
        return [];
    }
}

async function getPage(slug: string) {
    try {
        const query = `*[_type == "page" && slug.current == $slug][0]{
            title,
            body
        }`;
        return await client.fetch(query, { slug });
    } catch (error) {
        console.error("Error fetching page:", error);
        return null;
    }
}

export default async function GenericPage({ params }: Props) {
    const { slug } = await params;
    const page = await getPage(slug);

    if (!page) {
        notFound();
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">{page.title}</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <PortableText value={page.body} components={RichTextComponents} />
                    </div>
                </div>
            </div>
        </div>
    );
}
