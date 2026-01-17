'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubServiceProps {
    title: string;
    description: string;
    features?: string[];
    image?: string;
    images?: string[];
    index: number;
}

export default function SubServiceItem({ title, description, features, image, images, index }: SubServiceProps) {
    const displayImages = images && images.length > 0 ? images : (image ? [image] : []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (displayImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [displayImages.length]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    };

    return (
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        {displayImages.length > 0 && (
                            <Image
                                src={displayImages[currentImageIndex]}
                                alt={`${title} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                {displayImages.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.preventDefault(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300"
                        >
                            <ChevronLeft className="w-6 h-6 text-[#003063]" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100 duration-300"
                        >
                            <ChevronRight className="w-6 h-6 text-[#003063]" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {displayImages.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[#E6007E]' : 'bg-white/60'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-[#003063] mb-6">{title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{description}</p>
                {features && (
                    <ul className="space-y-4">
                        {features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                <span className="text-lg">{feat}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
