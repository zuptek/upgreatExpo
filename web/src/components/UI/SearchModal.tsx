"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Loader2, ArrowRight } from 'lucide-react';
import { searchPosts } from '@/app/actions';
import Link from 'next/link';

// Simple debounce hook implementation inline
function useDebounceValue<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SearchResult {
    title: string;
    slug: { current: string };
    publishedAt: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const debouncedSearchTerm = useDebounceValue(searchTerm, 500);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            // Focus input when modal opens
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const fetchResults = async () => {
            if (!debouncedSearchTerm.trim()) {
                setResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const data = await searchPosts(debouncedSearchTerm);
                setResults(data);
            } catch (error) {
                console.error("Search error:", error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [debouncedSearchTerm]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header / Input */}
                        <div className="flex items-center p-4 border-b border-gray-100">
                            <Search className="text-gray-400 w-6 h-6 mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search articles..."
                                className="flex-1 text-lg outline-none text-slate-800 placeholder:text-gray-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 text-[#E6007E] animate-spin" />
                            ) : (
                                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            )}
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {searchTerm && results.length === 0 && !isLoading ? (
                                <div className="p-8 text-center text-gray-500">
                                    No articles found for "{searchTerm}"
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-50">
                                    {results.map((result) => (
                                        <Link
                                            key={result.slug.current}
                                            href={`/insights/blog/${result.slug.current}`}
                                            onClick={onClose}
                                            className="block p-4 hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="text-lg font-medium text-slate-800 group-hover:text-[#003063] transition-colors">
                                                        {result.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-400 mt-1">
                                                        {new Date(result.publishedAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#E6007E] transition-colors" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                            {!searchTerm && (
                                <div className="p-8 text-center text-gray-400 text-sm">
                                    Type to search for insights and articles...
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
