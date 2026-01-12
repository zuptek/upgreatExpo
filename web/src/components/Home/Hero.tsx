"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { CheckCircle2, Play, Users, Calendar, ArrowRight } from 'lucide-react';

export default function ConversionHero() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-[#080808] flex items-center overflow-hidden">
            {/* 1. Dynamic Background - Using a clean, dark aesthetic to make text pop */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#1a1a1a_0%,#080808_100%)]" />
                {/* Subtle moving grid to imply "Planning/Structure" */}
                <div className="absolute inset-0 opacity-[0.05] bg-[grid-white_40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: The Pitch (Logic & Trust) */}
                    <div className="lg:col-span-7 pt-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
                        >
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">Trusted by Fortune 500 Brands</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8"
                        >
                            We Don’t Just Plan Events. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">
                                We Build Legacies.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
                        >
                            Stop worrying about logistics. Our award-winning team handles everything from
                            <span className="text-white"> concept to clean-up</span>, ensuring your brand activation or corporate expo is flawless, on-time, and over-delivered.
                        </motion.p>

                        {/* Conversion Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-5 mb-12"
                        >
                            <Button className="h-16 px-10 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl shadow-[0_20px_40px_-15px_rgba(var(--primary),0.5)] transition-all hover:-translate-y-1">
                                Get a Free Proposal
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="h-16 px-10 border-white/10 bg-white/5 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-all">
                                View Case Studies
                            </Button>
                        </motion.div>

                        {/* Social Proof Benchmarks */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
                        >
                            <div>
                                <p className="text-3xl font-bold text-white">120+</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Events Yearly</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">98%</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Client Retention</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">15M+</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Guest Reach</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: Visual Proof (The "Wow" Factor) */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            {/* Main Video/Image Preview */}
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] bg-gray-900 group">
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                    <source src="/assets/hero-background.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Floating Trust Card inside image */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#080808] bg-gray-800 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-white text-xs font-medium">Joined by 50+ Global Event Managers this week</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Element */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 backdrop-blur-3xl rounded-full border border-primary/30 flex items-center justify-center p-4 text-center"
                            >
                                <p className="text-primary font-bold text-xs uppercase leading-tight">Booked for Q3 2026</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}