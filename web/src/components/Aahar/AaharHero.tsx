"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { Globe, Award, CheckCircle, Play, Sparkles, ChevronRight, Users, Clock, Zap } from 'lucide-react';

export default function AaharHero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate particles with fixed seed-based values to prevent hydration mismatch
    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            color: i % 3 === 0 ? '#4285f4' : i % 3 === 1 ? '#E6007E' : '#00c853',
            width: (i * 7 + 50) % 100 + 20,
            height: (i * 11 + 40) % 100 + 20,
            left: (i * 13) % 100,
            top: (i * 17) % 100,
            moveX: (i * 5) % 100 - 50,
            moveY: (i * 7) % 100 - 50,
            duration: (i % 10) + 10,
        }));
    }, []);

    return (
        <section className="relative w-full min-h-screen pt-32 pb-0 overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#0f2744] to-[#14305a]">
            {/* Animated Background with Parallax */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 50%, rgba(230, 0, 126, 0.2) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 20%, rgba(66, 133, 244, 0.2) 0%, transparent 50%)',
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Particles - Only render after mount to prevent hydration mismatch */}
                {mounted && particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${particle.color}30, transparent 70%)`,
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            x: [0, particle.moveX],
                            y: [0, particle.moveY],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Interactive Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                    }} />
            </div>

            {/* Animated Logo/Icon */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1 }}
                className="absolute top-8 left-8 z-20 hidden lg:block"
            >
                <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4285f4] to-[#E6007E] flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                        className="absolute -inset-2 rounded-xl border-2 border-[#4285f4]/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
                {/* Event Banner with Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-lg bg-gradient-to-r from-white/5 to-white/10">
                        {/* Banner Image */}
                        <div className="relative aspect-[16/5] overflow-hidden">
                            <img
                                src="/assets/aahar-2026-banner.png"
                                alt="AAHAR 2026 - The International Food & Hospitality Fair"
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Countdown Timer */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold mb-2">AAHAR 2026</h2>
                                    <p className="text-white/80">March 10-14 • Bharat Mandapam, New Delhi</p>
                                </div>

                                <div className="flex gap-4">
                                    {[
                                        { value: '85', label: 'Days' },
                                        { value: '12', label: 'Hours' },
                                        { value: '45', label: 'Minutes' },
                                    ].map((item, index) => (
                                        <div key={index} className="text-center">
                                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                                <div className="text-2xl font-bold text-white">{item.value}</div>
                                                <div className="text-xs text-white/60">{item.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-left"
                    >
                        {/* Badge with Animation */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E6007E]/20 to-[#4285f4]/20 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-8"
                        >
                            <Globe className="w-5 h-5 text-[#E6007E]" />
                            <span className="text-white text-sm font-bold uppercase tracking-widest">
                                Global Exhibition Partners • 50+ Countries
                            </span>
                            <Sparkles className="w-4 h-4 text-[#4285f4]" />
                        </motion.div>

                        {/* Main Heading with Gradient */}
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                            <span className="block">BEYOND</span>
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285f4] via-[#E6007E] to-[#00c853]"
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                STRUCTURES
                            </motion.span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white/80 text-xl md:text-2xl max-w-xl mb-10 leading-relaxed">
                            Premium Exhibition Stand Design & Build services at Pragati Maidan.
                            We transform empty spaces into immersive brand experiences that captivate and convert.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mb-10">
                            {[
                                { icon: <Award className="w-6 h-6" />, value: '150+', label: 'Projects Completed' },
                                { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Clients' },
                                { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4285f4]/20 to-[#E6007E]/20 flex items-center justify-center">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-white/60 text-sm">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-6 mb-12"
                        >
                            <Button
                                href="/portfolio"
                                className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-[#4285f4] to-[#2a56c6] text-white font-bold text-lg shadow-2xl shadow-blue-500/30 overflow-hidden"
                            >
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2a56c6] to-[#4285f4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Portfolio
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </Button>

                            <Button
                                href="/contact-us"
                                className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-[#E6007E] to-[#be0068] text-white font-bold text-lg shadow-2xl shadow-pink-500/30 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#be0068] to-[#E6007E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center gap-3">
                                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Get Free Consultation
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Video/Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                        style={{ y }}
                    >
                        {/* Floating Video Container */}
                        <div className="relative">
                            {/* Outer Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#4285f4]/30 to-[#E6007E]/30 rounded-3xl blur-2xl opacity-70" />

                            {/* Main Video Container */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
                                {/* Video Player */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/assets/hero-background.mp4" type="video/mp4" />
                                </video>

                                {/* Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4285f4] to-[#E6007E] flex items-center justify-center shadow-2xl shadow-black/50"
                                    >
                                        <Play className="w-10 h-10 text-white ml-1" />
                                    </motion.button>
                                </div>

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 right-8 bg-gradient-to-r from-[#00c853] to-[#00a844] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                                >
                                    Live Project Preview
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -bottom-4 left-8 bg-gradient-to-r from-[#E6007E] to-[#be0068] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                                >
                                    4K Quality Preview
                                </motion.div>
                            </div>

                            {/* Floating Elements Around Video */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#4285f4]/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-[#E6007E]/30 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center text-white/60"
                    >
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
                            <div className="w-1 h-2 bg-white/60 rounded-full" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Bottom Wave */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full overflow-hidden"
            >
                <svg
                    className="relative block w-full h-[150px] md:h-[200px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
                        fill="url(#wave-gradient)"
                    />
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4285f4" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#E6007E" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#00c853" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Floating Contact Button */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-8 right-8 z-50 hidden lg:block"
            >
                <Button
                    href="/contact-us"
                    className="group bg-gradient-to-r from-[#4285f4] to-[#E6007E] text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/30"
                >
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                        </div>
                        <span className="font-bold">Start Your Project</span>
                    </div>
                </Button>
            </motion.div>
        </section>
    );
}