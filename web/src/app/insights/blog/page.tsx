import { client } from "@/lib/sanity";
import BlogCard from "@/components/Blog/BlogCard";
import { Metadata } from "next";
import { Search, Filter, Calendar, Tag, TrendingUp, Clock, ChevronDown, X } from 'lucide-react';
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Blog - UpgreatExpo",
    description: "Insights, trends, and stories from the world of exhibition design and event management.",
};

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        slug,
        mainImage,
        publishedAt,
        categories[]->{title},
        "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "...",
        "readTime": round(length(pt::text(body)) / 5 / 180)
    }`;
    const data = await client.fetch(query);
    return data;
}

async function getCategories() {
    const query = `*[_type == "category"] {
        title,
        "count": count(*[_type == "post" && references(^._id)])
    }`;
    const data = await client.fetch(query);
    return data;
}

import BlogControls from "@/components/Blog/BlogControls";

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedSearchParams = await searchParams;
    const posts = await getPosts();
    const categories = await getCategories();

    const searchQuery = resolvedSearchParams.q as string || '';
    const categoryFilter = resolvedSearchParams.category as string || 'all';
    const sortBy = resolvedSearchParams.sort as string || 'newest';
    const trending = resolvedSearchParams.trending === 'true';

    // Filter posts based on search and category
    const filteredPosts = posts.filter((post: any) => {
        const matchesSearch = !searchQuery ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = categoryFilter === 'all' ||
            post.categories?.some((cat: any) => cat.title === categoryFilter);

        const matchesTrending = !trending || (post.readTime && post.readTime > 5); // Example trending logic

        return matchesSearch && matchesCategory && matchesTrending;
    });

    // Sort posts
    const sortedPosts = [...filteredPosts].sort((a: any, b: any) => {
        switch (sortBy) {
            case 'oldest':
                return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
            case 'trending':
                return (b.readTime || 0) - (a.readTime || 0);
            case 'title':
                return a.title.localeCompare(b.title);
            default: // newest
                return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Search */}
            <section className="relative py-32 bg-gradient-to-br from-[#003063] to-[#001e42] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center" />
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                            <TrendingUp size={18} />
                            <span className="text-sm font-medium">Latest Insights & Trends</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Explore Our <span className="text-[#E6007E]">Blog</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                            Discover expert advice, industry insights, and success stories from the world of exhibitions and events.
                        </p>

                        {/* Interactive Controls */}
                        <BlogControls categories={categories} totalPosts={posts.length} />
                    </div>
                </div>
            </section>

            {/* Filters & Controls */}
            {/* Handled by BlogControls component above */}

            {/* Blog Grid with Sidebar */}
            <section className="py-16 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Stats */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900">
                                            {sortedPosts.length} {sortedPosts.length === 1 ? 'Article' : 'Articles'}
                                        </h2>
                                        <p className="text-slate-500 mt-2">
                                            {searchQuery ? `Search results for "${searchQuery}"` : 'Latest insights and stories'}
                                        </p>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#003063]">{posts.length}</div>
                                            <div className="text-sm text-slate-500">Total Articles</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#E6007E]">
                                                {Math.round(posts.reduce((acc: number, post: any) => acc + (post.readTime || 0), 0) / posts.length)}
                                            </div>
                                            <div className="text-sm text-slate-500">Avg. Read Time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Grid */}
                            {sortedPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {sortedPosts.map((post: any, index: number) => (
                                        <BlogCard
                                            key={post.slug.current}
                                            post={post}
                                            featured={index === 0 && !searchQuery && categoryFilter === 'all'}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                                        <Search className="text-slate-400" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-400 mb-4">No articles found</h3>
                                    <p className="text-slate-500 max-w-md mx-auto mb-8">
                                        {searchQuery
                                            ? `No results found for "${searchQuery}". Try different keywords or browse all articles.`
                                            : 'No articles match your filters. Try a different category or clear filters.'}
                                    </p>
                                    <a
                                        href="?"
                                        className="inline-flex items-center gap-2 bg-[#003063] text-white px-6 py-3 rounded-lg hover:bg-[#002145] transition-colors"
                                    >
                                        <X size={18} />
                                        Clear All Filters
                                    </a>
                                </div>
                            )}

                            {/* Load More */}
                            {sortedPosts.length > 6 && (
                                <div className="mt-16 text-center">
                                    <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors font-medium">
                                        Load More Articles
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Popular Categories */}
                            <div className="bg-slate-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Tag size={20} />
                                    Popular Categories
                                </h3>
                                <div className="space-y-3">
                                    {categories.slice(0, 5).map((category: any) => (
                                        <a
                                            key={category.title}
                                            href={`?category=${encodeURIComponent(category.title)}`}
                                            className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${categoryFilter === category.title ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-white/50'}`}
                                        >
                                            <span className={`font-medium ${categoryFilter === category.title ? 'text-[#003063]' : 'text-slate-700'}`}>
                                                {category.title}
                                            </span>
                                            <span className="text-sm text-slate-500">{category.count}</span>
                                        </a>
                                    ))}
                                </div>
                                <a href="?category=all" className="block mt-6 text-center text-[#003063] font-medium hover:text-[#002145] transition-colors">
                                    View All Categories
                                </a>
                            </div>

                            {/* Trending Articles */}
                            <div className="bg-gradient-to-br from-[#003063] to-[#001e42] rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp size={20} />
                                    Trending Now
                                </h3>
                                <div className="space-y-6">
                                    {posts
                                        .filter((post: any) => post.readTime > 5)
                                        .slice(0, 3)
                                        .map((post: any) => (
                                            <a
                                                key={post.slug.current}
                                                href={`/insights/blog/${post.slug.current}`}
                                                className="block group"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-[#E6007E] mt-2 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium group-hover:text-[#E6007E] transition-colors line-clamp-2">
                                                            {post.title}
                                                        </h4>
                                                        <div className="flex items-center gap-2 mt-2 text-sm text-slate-300">
                                                            <Clock size={12} />
                                                            <span>{post.readTime || 5} min read</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-gradient-to-br from-[#E6007E] to-[#d4006f] rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                                <p className="text-white/80 mb-6 text-sm">
                                    Get the latest exhibition insights and industry trends delivered to your inbox.
                                </p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-white text-[#E6007E] font-medium py-3 rounded-lg hover:bg-slate-100 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="text-white/60 text-xs mt-4">
                                    No spam. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}