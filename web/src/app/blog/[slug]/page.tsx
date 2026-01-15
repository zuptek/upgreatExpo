import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User, Tag } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const query = `*[_type == "post" && slug.current == $slug][0] { title, "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..." }`;
    const post = await client.fetch(query, { slug });

    if (!post) {
        return {
            title: "Post Not Found - UpgreatExpo",
        };
    }

    return {
        title: `${post.title} - UpgreatExpo Blog`,
        description: post.excerpt,
    };
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        mainImage,
        publishedAt,
        body,
        "authorName": author->name,
        "authorImage": author->image,
        categories[]->{title}
    }`;
    const data = await client.fetch(query, { slug });
    return data;
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        }
    },
    block: {
        h2: ({ children }: any) => <h2 className="text-3xl font-bold text-[#003063] mt-12 mb-6">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold text-[#003063] mt-8 mb-4">{children}</h3>,
        normal: ({ children }: any) => <p className="text-lg text-slate-700 leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => <blockquote className="border-l-4 border-[#E6007E] pl-6 italic text-xl text-slate-600 my-8">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-slate-700">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-slate-700">{children}</ol>,
    },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Hero / Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-[#003063]">
                {post.mainImage && (
                    <>
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003063] via-transparent to-transparent" />
                    </>
                )}

                <div className="absolute inset-0 flex items-end pb-16">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl">
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex gap-2 mb-6">
                                    {post.categories.map((cat: any) => (
                                        <span key={cat.title} className="bg-[#E6007E] text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                                            {cat.title}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-slate-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                {post.authorName && (
                                    <div className="flex items-center gap-2">
                                        <User size={18} />
                                        <span>By {post.authorName}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto px-6 lg:px-12 mt-12">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-slate max-w-none">
                        <PortableText value={post.body} components={ptComponents} />
                    </div>
                </div>
            </div>
        </article>
    );
}