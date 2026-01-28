"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { Calendar, Download, Globe, Award, CheckCircle } from 'lucide-react';

export default function AaharHero() {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#191970] via-[#1a1a5e] to-[#0a0a2e] pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-[#E6007E] rounded-full blur-[180px] -mr-[35%] -mt-[35%] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-white rounded-full blur-[140px] -ml-[30%] -mb-[25%] opacity-15" />
            </div>

            {/* Grid Pattern - More Prominent */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Main Content Layout - Side by Side */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Content Column */}
                    <div className="lg:w-1/2">
                        {/* Header with Icon */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8">
                                <Globe className="w-5 h-5 text-[#E6007E]" />
                                <span className="text-[#E6007E] font-bold uppercase tracking-[0.3em] text-sm">
                                    Worldwide Delivery • 50+ Countries
                                </span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                                <span className="block">Architectural</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                                    Exhibition Excellence
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtitle with Strong Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-10"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                                Transform Your Brand Presence at AAHAR 2026
                            </h2>
                            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                                We design and build award-winning exhibition stands that bring your brand to life. 
                                Combining creative design, smart functionality, and flawless craftsmanship to attract, 
                                engage, and leave lasting impressions at Pragati Maidan.
                            </p>
                        </motion.div>

                        {/* Features Grid - Now 2 columns for better layout */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                        >
                            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#E6007E]/30 transition-all group">
                                <Award className="w-10 h-10 text-[#E6007E] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-2">Award-Winning Design</h3>
                                <p className="text-white/70">Creative, functional designs that win awards and attention</p>
                            </div>
                            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#E6007E]/30 transition-all group">
                                <CheckCircle className="w-10 h-10 text-[#E6007E] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-2">Real Results</h3>
                                <p className="text-white/70">Stand out, connect audiences, achieve measurable outcomes</p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <Button
                                className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-sm h-14 px-8 rounded-sm transition-all shadow-lg hover:shadow-[#E6007E]/50 w-full sm:w-auto group"
                                href="/contact-us"
                            >
                                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Request Strategic Consultation
                            </Button>
                            <Button
                                className="bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm h-14 px-8 rounded-sm transition-all border border-white/20 backdrop-blur-sm w-full sm:w-auto group"
                                href="#portfolio"
                            >
                                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                                Access Design Portfolio
                            </Button>
                        </motion.div>

          
                    </div>

                    {/* Right Form Column - Sticky on larger screens */}
                    <div className="lg:w-1/2 lg:sticky lg:top-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-lg rounded-xl p-8 border border-white/15 shadow-2xl shadow-black/30"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
                                <p className="text-white/70">Let's create something extraordinary for AAHAR 2026</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/80">Your Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/80">Phone Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 Your phone number"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-white/80">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/80">Exhibition/Show Name *</label>
                                        <input
                                            type="text"
                                            placeholder="AAHAR 2026"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/80">Stand Size (Optional)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g., 30 SQM"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-colors"
                                        />
                                    </div>
                                </div>

                                <Button
                                    className="w-full bg-gradient-to-r from-[#E6007E] to-[#be0068] hover:from-[#ff0090] hover:to-[#e6007e] text-white font-bold uppercase tracking-widest text-sm h-14 rounded-lg transition-all shadow-lg hover:shadow-[#E6007E]/50 group mt-4"
                                >
                                    <span className="group-hover:scale-105 transition-transform">GET QUOTE NOW</span>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}