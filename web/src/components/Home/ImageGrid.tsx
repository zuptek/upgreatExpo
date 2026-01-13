"use client";

import React from 'react';
import { motion } from 'framer-motion';

const images = Array(12).fill(null).map((_, i) => ({
    id: i,
    src: "", // Placeholder as requested
    size: i % 3 === 0 ? "large" : "small" // Simple logic to vary sizes
}));

export default function ImageGrid() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl font-bold text-[#003063] mb-6">
                        Crafting Visual Stories
                    </h2>
                    <p className="text-lg text-slate-600">
                        From intimate gatherings to massive global expos, we create environments that engage, inspire, and deliver results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`relative group overflow-hidden rounded-sm bg-gray-300 ${img.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery Image ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#00529b]/0 group-hover:bg-[#00529b]/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
