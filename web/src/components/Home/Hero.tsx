"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { ArrowRight } from 'lucide-react';

export default function FreemanHero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
            {/* 1. THE BACKGROUND: Video with Blue Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Freeman Blue Overlay */}
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

            {/* 2. THE CONTENT */}
            <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20 flex-grow flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-[clamp(3.5rem,9vw,7rem)] font-bold text-white leading-[1] tracking-tight mb-8 drop-shadow-lg"
                    >
                        We Make <br />
                        Moments That <br />
                        Matter
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
                            Call Now
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white  hover:text-black font-bold uppercase tracking-widest text-xs h-14 px-8 rounded-sm transition-all"
                            href="/work"
                        >
                            See Our Work
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* 3. BOTTOM BAR (Subscription) */}
            <div className="relative z-20 w-full bg-[#003063] py-4 border-t border-white/10">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-sm md:text-base font-medium text-center md:text-left">
                        Want to stay ahead? Sign up for event news, updates, and exclusive content.
                    </p>
                    <Button className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-xs px-8 h-10 rounded-sm transition-all shadow-md whitespace-nowrap">
                        Subscribe
                    </Button>
                </div>
            </div>

            
        </section>
    );
}