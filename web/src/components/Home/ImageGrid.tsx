"use client";

import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { title: "WAREHOUSE EXPO MUMBAI", caption: "WAREHOUSE EXPO MUMBAI", src: "/portfolio_images/20220901_125003_Original-scaled.jpeg" },
    { title: "ABM", caption: "MEDICAL EXHIBITION MUMBAI", src: "/portfolio_images/17.jpg" },
    { title: "SAFR", caption: "IFSEC EXHIBITION", src: "/portfolio_images/13.jpg" },
    { title: "ANSCER ROBOTIC", caption: "INDIA WAREHOUSE EXHIBITION", src: "/portfolio_images/anscer.jpg" },
    { title: "Music Events", caption: "Music Events Organized by Aaakriti Design", src: "https://aakritidesign.in/wp-content/uploads/2022/10/music-events.jpg" },
    { title: "Music Event", caption: "Organized by Aakriti Design", src: "https://aakritidesign.in/wp-content/uploads/2022/10/work-11.jpg" },
    { title: "C-NET Stall Design", caption: "Exhibition Stall Design", src: "https://aakritidesign.in/wp-content/uploads/2022/10/work-2.jpg" },
    { title: "Music Events", caption: "Organized By Aakriti Design", src: "https://aakritidesign.in/wp-content/uploads/2022/10/work-9.jpg" },
    { title: "STV Stall Design", caption: "Exhibition Stall Design", src: "https://aakritidesign.in/wp-content/uploads/2022/10/work-3.jpg" },
    { title: "CAME", caption: "IFSEC EXHIBITION", src: "/portfolio_images/6.jpg" },
    { title: "AIR CARE", caption: "AIR CARE", src: "/portfolio_images/10.jpg" },
    { title: "Time Watch", caption: "Time Watch Expo", src: "https://aakritidesign.in/wp-content/uploads/2022/12/IMG_1098-1.jpeg" }
].map((img, i) => ({
    ...img,
    id: i,
    size: i % 3 === 0 ? "large" : "small"
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
                    ))}
                </div>
            </div>
        </section>
    );
}
