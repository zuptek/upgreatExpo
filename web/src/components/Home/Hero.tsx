"use client";

import React from 'react';
import { Button } from '@/components/UI/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="/assets/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradient to fade video into background */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
            </div>

            {/* Background Glow Effect (Optional - kept for style) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                        We Create <br />
                        <span className="text-foreground">Unforgettable Events</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                        Your premier partner for <span className="text-primary font-semibold">Corporate Exhibitions</span> and <span className="text-primary font-semibold">Brand Activations</span>.
                        We turn your vision into reality with seamless execution.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px]" href="/services">
                            Our Services
                        </Button>
                        <Button size="lg" variant="outline" className="min-w-[160px]" href="/contact">
                            Plan Your Event
                        </Button>
                    </div>
                </motion.div>

                {/* Image/Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                        {/* Circle Background/Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl transform scale-110" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            <Image
                                src="/assets/hero_img.jpeg"
                                alt="Event Showcase"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
