"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { ArrowRight } from 'lucide-react';
import TechExhibitionNetwork from './TechExhibitionNetwork';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const expertiseRef = useRef(null);
    const { scrollYProgress: expertiseScroll } = useScroll({
        target: expertiseRef,
        offset: ["start end", "end start"]
    });

    // Increased parallax range for more visible effect
    const yExpertiseBg = useTransform(expertiseScroll, [0, 1], ["-30%", "30%"]);

    return (
        <div ref={containerRef} className="flex flex-col w-full relative">
            {/* 1. HERO SECTION - STICKY */}
            {/* The container needs a defined height to scroll over, but here we want the video to stick 
                while the NEXT content comes up. 
                Actually, for the curtain effect, the Hero should be sticky at top:0, 
                and the next section should have a higher z-index and background to cover it.
            */}
            <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-0">
                {/* Background Video */}
                <motion.div
                    style={{ y: yBackground }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#191970] via-[#191970] to-[#191970] opacity-95 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/hero-background.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20 flex-grow flex flex-col justify-center">
                    <div className="max-w-4xl">
                        <motion.h1
                            style={{ y: yText }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg"
                        >
                            We Don’t Upgrade Brands. <br />
                            We <span className="text-[#E6007E]">UpGreat</span> Them.
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

            {/* 2. SUBSCRIPTION BAR - Needs relative and z-index to scroll OVER the sticky hero */}
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

            {/* Tech Network - Relative z-10 to cover hero */}
            <section className="relative z-10 bg-white">
                <TechExhibitionNetwork />
            </section>


            {/* 4. LET'S DESIGN SECTION - Relative z-10 */}
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
            {/* 3. CTA SECTION - Relative z-10 */}
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
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6007E]/5 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <h2 className="text-3xl md:text-5xl font-bold text-[#191970] mb-6 relative z-10">
                            Ready to UpGreat Your Next Event?
                        </h2>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
                            Let's build an unforgettable experience together. Our experts are ready to turn your vision into a landmark exhibition.
                        </p>
                        <div className="relative z-10">
                            <Button
                                className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                                href="/contact"
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