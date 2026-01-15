"use client";

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    post: {
        title: string;
        slug: { current: string };
        mainImage: any;
        publishedAt: string;
        categories?: { title: string }[];
        excerpt?: string;
    };
    featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
        >
            <Link href={`/blog/${post.slug.current}`} className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                            No Image
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                    <div className="flex items-center gap-2 text-sm text-[#E6007E] font-medium mb-4">
                        <Calendar size={16} />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                        {post.categories && post.categories.length > 0 && (
                            <>
                                <span className="text-slate-300">•</span>
                                <span>{post.categories[0].title}</span>
                            </>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold text-[#003063] mb-4 line-clamp-2 group-hover:text-[#E6007E] transition-colors">
                        {post.title}
                    </h3>

                    {post.excerpt && (
                        <p className="text-slate-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="inline-flex items-center text-[#003063] font-bold group-hover:text-[#E6007E] transition-colors mt-auto">
                        Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
