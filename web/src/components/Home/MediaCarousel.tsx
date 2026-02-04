"use client";

import React from 'react';
import { motion } from 'framer-motion';

const mediaLogos = [
    { name: "Business Standard", src: "/assets/press_and_media/image.png" },
    { name: "ANI News", src: "/assets/press_and_media/image copy.png" },
    { name: "YourStory", src: "/assets/press_and_media/image copy 2.png" },
    { name: "The Tribune", src: "/assets/press_and_media/image copy 3.png" },
    { name: "Lokmat Times", src: "/assets/press_and_media/image copy 4.png" },
    { name: "Fox Story India", src: "/assets/press_and_media/image copy 5.png" },
];

export default function MediaCarousel() {
    // Duplicate for infinite scroll
    const duplicatedMedia = [...mediaLogos, ...mediaLogos, ...mediaLogos];

    return (
        <section className="bg-white py-16 overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 mb-10">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-3"
                    >
                        As Featured In
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-16 h-1 bg-[#E6007E] mx-auto rounded-full mb-6"
                    />
                </div>
            </div>

            {/* Infinite Scrolling Carousel */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-16 items-center"
                    animate={{
                        x: [0, -100 * mediaLogos.length / 3],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedMedia.map((media, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-40 h-20 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex items-center justify-center cursor-pointer"
                        >
                            <img
                                src={media.src}
                                alt={media.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
