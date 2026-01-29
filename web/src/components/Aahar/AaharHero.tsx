"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { Calendar, Globe, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function AaharHero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* 1. BACKGROUND VIDEO LAYER */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-50"
                >
                    <source src="/assets/services/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay to match theme - Deep Navy/Black blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e] via-[#0a0a2e]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            {/* 2. CONTENT CONTAINER */}
            <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    
                    {/* LEFT SIDE: BRANDING & HEADLINE */}
                    <div className="w-full lg:w-3/5 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
                                <Globe className="w-4 h-4 text-[#E6007E]" />
                                <span className="text-white text-xs font-bold uppercase tracking-widest">
                                    Global Exhibition Partners
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-6">
                                BEYOND <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007E] to-[#ff4eb0]">
                                    STRUCTURES
                                </span>
                            </h1>

                            <p className="max-w-xl text-lg md:text-xl text-white/70 leading-relaxed mb-8 border-l-2 border-[#E6007E] pl-6">
                                Premium Exhibition Stand Design & Build services at Pragati Maidan. We turn empty spaces into brand experiences.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-6 mt-10">
                                <div className="flex items-center gap-2 text-white/80">
                                    <Award className="w-5 h-5 text-[#E6007E]" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Top Rated</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/80">
                                    <CheckCircle className="w-5 h-5 text-[#E6007E]" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Turnkey Solutions</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: GLASSMORPHISM FORM */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/5"
                    >
                        <div className="relative group">
                            {/* Glow Effect behind form */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#E6007E] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            
                            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-1">Inquire Now</h3>
                                <p className="text-white/50 text-sm mb-8">Get a 3D design proposal within 48 hours.</p>

                                <form className="space-y-4">
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none transition-all"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Work Email"
                                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] outline-none transition-all"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Stand Size"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:border-[#E6007E] outline-none transition-all"
                                            />
                                            <input
                                                type="text"
                                                placeholder="City"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:border-[#E6007E] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <Button className="w-full bg-[#E6007E] hover:bg-[#be0068] text-white font-black py-8 rounded-lg mt-4 flex items-center justify-center gap-2 group shadow-[0_10px_20px_rgba(230,0,126,0.3)]">
                                        BOOK CONSULTATION
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
        </section>
    );
}