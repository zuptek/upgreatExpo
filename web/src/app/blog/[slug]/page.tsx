import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/Blog/RichTextComponents";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Metadata } from "next";

// Revalidate every 60 seconds
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
        const query = `*[_type == "post" && slug.current == $slug][0]{ title, mainImage }`;
        const post = await client.fetch(query, { slug });

        if (!post) {
            return {
                title: "Post Not Found - UpgreatExpo",
            };
        }

        return {
            title: `${post.title} - UpgreatExpo`,
            openGraph: {
                images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
            },
        };
    } catch (error) {
        return {
            title: "Blog - UpgreatExpo",
        };
    }
}

// Generate Static Params for ISR
export async function generateStaticParams() {
    try {
        const query = `*[_type == "post"]{ slug }`;
        const posts = await client.fetch(query);

        return posts.map((post: any) => ({
            slug: post.slug.current,
        }));
    } catch (error) {
        console.error("Error fetching posts for static params:", error);
        return [];
    }
}

async function getPost(slug: string) {
    try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      mainImage,
      publishedAt,
      categories[]->{title},
      body,
      "author": author->name
    }`;
        return await client.fetch(query, { slug });
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Post not found</h1>
            </div>
        );
    }

    return (
        <article className="min-h-screen py-20">
            {/* Hero Image */}
            {post.mainImage && (
                <div className="relative h-[50vh] w-full mb-12">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 container">
                        <div className="max-w-4xl mx-auto text-white">
                            <div className="flex items-center gap-4 mb-4 text-sm opacity-90">
                                {post.categories && (
                                    <span className="bg-primary px-3 py-1 rounded-full text-white font-medium">
                                        {post.categories[0].title}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                        </div>
                    </div>
                </div>
            )}

            <div className="container px-4">
                <div className="max-w-3xl mx-auto">
                    {!post.mainImage && (
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
                    )}

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <PortableText value={post.body} components={RichTextComponents} />
                    </div>
                </div>
            </div>
        </article>
    );
}
