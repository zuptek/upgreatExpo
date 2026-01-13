"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#00458c]/80 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003063] via-transparent to-transparent z-10 opacity-60" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/hero-background.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20 flex-grow flex flex-col justify-center">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-[clamp(3.5rem,9vw,7rem)] font-bold text-white leading-[1] tracking-tight mb-8 drop-shadow-lg"
                        >
                            Elevate <br />
                            Your <br />
                            Vision
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <Button
                                className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-xs h-14 px-8 rounded-sm transition-all shadow-lg"
                                href="/contact"
                            >
                                Start Your Project
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs h-14 px-8 rounded-sm transition-all"
                                href="/work"
                            >
                                View Portfolio
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. SUBSCRIPTION BAR */}
            <div className="w-full bg-[#003063] py-6 border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-sm md:text-base font-medium text-center md:text-left">
                        Stay inspired. Join our community for the latest in event trends and insights.
                    </p>
                    <Button className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-xs px-8 h-10 rounded-sm transition-all shadow-md whitespace-nowrap">
                        Join Now
                    </Button>
                </div>
            </div>

            {/* 3. UNFORGETTABLE MOMENTS TEXT SECTION */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#003063] leading-tight max-w-5xl"
                    >
                        UpGreat Expo designs and delivers <span className="font-bold">unforgettable experiences</span> that create lasting bonds between brands and audiences. We define the future of live events.
                    </motion.h2>
                </div>
            </section>

            {/* 4. LET'S DESIGN SECTION */}
            <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#003063]/60 mix-blend-multiply z-10" />
                    <img
                        src="/assets/hero_img.webp"
                        alt="Trade Show Floor"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-20">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="block text-white font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold text-white leading-none">
                                Immersive Trade Shows
                            </h3>
                            <h3 className="text-4xl md:text-6xl font-bold text-white/70 leading-none">
                                Captivating Exhibits
                            </h3>
                            <h3 className="text-4xl md:text-6xl font-bold text-white/50 leading-none">
                                Cutting-Edge AV Production
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}