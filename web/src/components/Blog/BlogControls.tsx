"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Filter, Calendar, Tag, TrendingUp, Clock, ChevronDown, X } from 'lucide-react';

interface BlogControlsProps {
    categories: { title: string; count: number }[];
    totalPosts: number;
}

export default function BlogControls({ categories, totalPosts }: BlogControlsProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const categoryFilter = searchParams.get('category') || 'all';
    const sortBy = searchParams.get('sort') || 'newest';
    const trending = searchParams.get('trending') === 'true';

    // Update local state when URL params change
    useEffect(() => {
        setSearchQuery(searchParams.get('q') || '');
    }, [searchParams]);

    const updateParams = (updates: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        updateParams({ q: searchQuery || null });
    };

    const clearFilter = (key: string) => {
        updateParams({ [key]: null });
        if (key === 'q') setSearchQuery('');
    };

    return (
        <>
            {/* Hero Search Bar */}
            <div className="max-w-2xl mx-auto mb-16 relative z-20">
                <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles, trends, or topics..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E6007E] focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#E6007E] text-white px-4 py-2 rounded-lg hover:bg-[#d4006f] transition-colors"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* Filters & Controls Section */}
            <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="flex flex-wrap gap-4">
                            {/* Category Filter */}
                            <div className="relative group">
                                <button
                                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                    onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)}
                                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors"
                                >
                                    <Filter size={18} className="text-slate-600" />
                                    <span className="font-medium text-slate-700">Category</span>
                                    <ChevronDown size={18} className="text-slate-500" />
                                </button>
                                <div className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200 p-2 transition-all duration-200 z-50 ${isCategoryOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                                    <button
                                        onClick={() => updateParams({ category: 'all' })}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors ${categoryFilter === 'all' ? 'bg-blue-50 text-[#003063] font-medium' : 'text-slate-600'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>All Categories</span>
                                            <span className="text-sm text-slate-400">{totalPosts}</span>
                                        </div>
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.title}
                                            onClick={() => updateParams({ category: category.title })}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors ${categoryFilter === category.title ? 'bg-blue-50 text-[#003063] font-medium' : 'text-slate-600'}`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{category.title}</span>
                                                <span className="text-sm text-slate-400">{category.count}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div className="relative group">
                                <button
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                    onBlur={() => setTimeout(() => setIsSortOpen(false), 200)}
                                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:border-slate-300 transition-colors"
                                >
                                    <Calendar size={18} className="text-slate-600" />
                                    <span className="font-medium text-slate-700">Sort by</span>
                                    <ChevronDown size={18} className="text-slate-500" />
                                </button>
                                <div className={`absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 p-2 transition-all duration-200 z-50 ${isSortOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                                    {[
                                        { value: 'newest', label: 'Newest First', icon: Calendar },
                                        { value: 'oldest', label: 'Oldest First', icon: Clock },
                                        { value: 'trending', label: 'Most Popular', icon: TrendingUp },
                                        { value: 'title', label: 'Alphabetical', icon: Tag },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => updateParams({ sort: option.value })}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors ${sortBy === option.value ? 'bg-blue-50 text-[#003063] font-medium' : 'text-slate-600'}`}
                                        >
                                            <option.icon size={16} />
                                            <span>{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Filter */}
                            <button
                                onClick={() => updateParams({ trending: trending ? null : 'true' })}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors ${trending ? 'bg-[#E6007E] text-white border-[#E6007E]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                            >
                                <TrendingUp size={18} />
                                <span className="font-medium">Trending</span>
                            </button>
                        </div>

                        {/* Active Filters */}
                        <div className="flex flex-wrap gap-2">
                            {searchParams.get('q') && (
                                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
                                    <span className="text-sm text-blue-700">Search: "{searchParams.get('q')}"</span>
                                    <button onClick={() => clearFilter('q')} className="text-blue-500 hover:text-blue-700">
                                        <X size={14} />
                                    </button>
                                </div>
                            )}
                            {categoryFilter !== 'all' && (
                                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg">
                                    <Tag size={14} className="text-purple-600" />
                                    <span className="text-sm text-purple-700">{categoryFilter}</span>
                                    <button onClick={() => clearFilter('category')} className="text-purple-500 hover:text-purple-700">
                                        <X size={14} />
                                    </button>
                                </div>
                            )}
                            {trending && (
                                <div className="flex items-center gap-2 bg-pink-50 px-3 py-1.5 rounded-lg">
                                    <TrendingUp size={14} className="text-pink-600" />
                                    <span className="text-sm text-pink-700">Trending</span>
                                    <button onClick={() => clearFilter('trending')} className="text-pink-500 hover:text-pink-700">
                                        <X size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
