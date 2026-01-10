"use client";

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
    post: {
        title: string;
        slug: { current: string };
        mainImage: any;
        publishedAt: string;
        categories: { title: string }[];
        excerpt?: string; // Assuming we might add this or extract from body
    };
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            <Link href={`/blog/${post.slug.current}`}>
                <div className="relative h-48 w-full overflow-hidden">
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                            No Image
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                        {post.categories && post.categories.length > 0 && (
                            <>
                                <span>•</span>
                                <span className="text-primary">{post.categories[0].title}</span>
                            </>
                        )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    );
}
