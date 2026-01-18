"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    { title: "WAREHOUSE EXPO MUMBAI", caption: "WAREHOUSE EXPO MUMBAI", src: "/portfolio_images/20220901_125003_Original-scaled.webp" },
    { title: "ABM", caption: "MEDICAL EXHIBITION MUMBAI", src: "/portfolio_images/17.webp" },
    { title: "SAFR", caption: "IFSEC EXHIBITION", src: "/portfolio_images/13.webp" },
    { title: "BABA ADHESIVE AND COATINGS", caption: "INDIA WAREHOUSE EXHIBITION", src: "/portfolio_images/Baba_adhesive_and_coatings.webp" },
    { title: "C-NET Stall Design", caption: "Exhibition Stall Design", src: "/portfolio_images/work-2.webp" },
    { title: "STV Stall Design", caption: "Exhibition Stall Design", src: "/portfolio_images/work-3.webp" },
    { title: "Thaparkarr Printing Machinery", caption: "Thaparkarr Printing Machinery", src: "/portfolio_images/Thaparkarr_printing_machinery.webp" },
    { title: "AIR CARE", caption: "AIR CARE", src: "/portfolio_images/10.webp" },
    { title: "Time Watch", caption: "Time Watch Expo", src: "/portfolio_images/12.webp" }
].map((img, i) => ({
    ...img,
    id: i,
    size: i % 3 === 0 ? "large" : "small"
}));

export default function ImageGrid() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yColumn1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const yColumn2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yColumn3 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    return (
        // Added relative z-60 to scroll over the sticky WorkCarousel (z-50)
        <section ref={containerRef} className="relative z-60 bg-slate-50 py-24">
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
                    {images.map((img, i) => {
                        // Determine which column parallax to apply based on index
                        // This is a simplified approximation since grid layout is complex with row spans
                        let yAnim = yColumn1;
                        if (i % 3 === 1) yAnim = yColumn2;
                        if (i % 3 === 2) yAnim = yColumn3;

                        return (
                            <motion.div
                                key={i}
                                style={{ y: yAnim }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`relative group overflow-hidden rounded-sm bg-gray-300 ${img.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                    }`}
                            >
                                {img.src && (
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {img.title}
                                    </h3>
                                    <p className="text-white/80 text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {img.caption}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
