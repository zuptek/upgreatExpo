"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { ArrowRight } from 'lucide-react';
import TechExhibitionNetwork from './TechExhibitionNetwork';

export default function Hero() {
    const expertiseRef = useRef(null);
    const { scrollYProgress: expertiseScroll } = useScroll({
        target: expertiseRef,
        offset: ["start end", "end start"]
    });

    const yExpertiseBg = useTransform(expertiseScroll, [0, 1], ["-30%", "30%"]);

    return (
        <div className="flex flex-col w-full relative bg-white">
            {/* 1. HERO SECTION - NEW DESIGN */}
            <section className="relative w-full bg-[#191970] pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 lg:px-12 overflow-hidden">
                {/* Background Pattern/Gradient */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white rounded-full blur-3xl -mr-[20%] -mt-[20%]" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-black rounded-full blur-3xl -ml-[10%] -mb-[10%]" />
                </div>

                <div className="container mx-auto relative z-10 flex flex-col items-center">
                    {/* Main Title Above Video */}
                    {/* Main Title Above Video */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                            We Don’t Upgrade Brands. <br className="hidden md:block" />
                            We <span className="text-[#E6007E]">UpGreat</span> Them.
                        </h1>
                    </motion.div>

                    {/* Video Card - Clean, No Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-[50vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black group mb-12"
                    >
                        {/* Video */}
                        <div className="absolute inset-0 z-0">
                            {/* Removed dark overlay for cleaner look */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-[2s]"
                            >
                                <source src="/assets/hero-background.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </motion.div>

                    {/* Buttons Below Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 w-full justify-center"
                    >
                        <Button
                            className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-full transition-all shadow-lg hover:shadow-[#E6007E]/50 w-full sm:w-auto"
                            href="/contact-us"
                        >
                            Start Your Project
                        </Button>
                        <Button
                            className="bg-white hover:bg-gray-100 text-[#E6007E] font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-full transition-all shadow-lg w-full sm:w-auto"
                            href="/portfolio"
                        >
                            View Portfolio
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. SUBSCRIPTION BAR */}
            <div className="w-full bg-[#191970] py-6 border-t border-white/10 relative z-10">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-sm md:text-base font-medium text-center md:text-left">
                        Stay inspired. Join our community for the latest in event trends and insights.
                    </p>
                    <Button className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-xs px-8 h-10 rounded-sm transition-all shadow-md whitespace-nowrap">
                        Join Now
                    </Button>
                </div>
            </div>

            {/* Tech Network */}
            <section className="relative z-10 bg-white">
                <TechExhibitionNetwork />
            </section>

            {/* 4. LET'S DESIGN SECTION */}
            <section ref={expertiseRef} className="relative w-full min-h-[80vh] flex items-center overflow-hidden z-10">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#191970]/60 mix-blend-multiply z-10" />
                    <motion.img
                        style={{ y: yExpertiseBg }}
                        src="/assets/hero_img.webp"
                        alt="Trade Show Floor"
                        className="w-full h-[120%] object-cover -mt-[10%]"
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

            {/* 3. CTA SECTION */}
            <section className="w-full bg-white py-24 relative z-10">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F0F4F8] rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden"
                    >
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#191970]/5 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <h2 className="text-3xl md:text-5xl font-bold text-[#191970] mb-6 relative z-10">
                            Ready to UpGreat Your Next Event?
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
                            Let's build an unforgettable experience together. Our experts are ready to turn your vision into a landmark exhibition.
                        </p>
                        <div className="relative z-10">
                            <Button
                                className="bg-[#191970] hover:bg-[#12125a] text-white font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                href="/contact-us"
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}