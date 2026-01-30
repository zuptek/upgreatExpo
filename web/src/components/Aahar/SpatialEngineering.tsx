"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Users, FileText, Share2, TrendingUp } from 'lucide-react';

interface BenefitProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="flex items-start gap-4 group"
        >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E6007E] to-[#be0068] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <div className="text-white">
                    {icon}
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                <p className="text-white/70 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default function DocumentationAdvantage() {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#191970] via-[#1a1a5e] to-[#0a0a2e] py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(230,0,126,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#E6007E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#E6007E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
                        🎯 THE COMPLIMENTARY DOCUMENTATION ADVANTAGE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
                        The Only Stall Designer Who Turns Your ₹5 Lakh Investment Into{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007E] to-[#ff4eb0]">
                            Year-Long Marketing Assets
                        </span>
                    </h2>
                </motion.div>

                {/* Problem Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <p className="text-white/90 text-lg leading-relaxed mb-4">
                            Most exhibitors spend lakhs on their Aahar stall and walk away with nothing but memories and phone photos. The investment vanishes the moment the event ends.
                        </p>
                        <p className="text-[#E6007E] text-xl font-bold">
                            We solved that problem.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed mt-4">
                            Every project from The UpGreat Expo includes <span className="font-bold text-white">professional documentation at zero extra cost</span>—turning your three-day exhibition into a 12-month content engine.
                        </p>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <div className="max-w-6xl mx-auto mb-16">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-12 text-center"
                    >
                        What You Get (Included Free):
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Benefit
                            icon={<Video className="w-6 h-6" />}
                            title="Time-Lapse Construction Videos"
                            description="Watch your stall come to life from foundation to final lighting. Perfect for LinkedIn, company presentations, and investor decks."
                            delay={0.1}
                        />

                        <Benefit
                            icon={<Camera className="w-6 h-6" />}
                            title="Professional Booth Photography"
                            description="High-resolution images from strategic angles—day and night shots, visitor interactions, product displays. Fully edited and social-media ready."
                            delay={0.2}
                        />

                        <Benefit
                            icon={<Users className="w-6 h-6" />}
                            title="Visitor Engagement Footage"
                            description="Capture the buzz around your booth. Real people interacting with your products. Authentic testimonial material that money can't buy."
                            delay={0.3}
                        />

                        <Benefit
                            icon={<FileText className="w-6 h-6" />}
                            title="Complete Raw File Library"
                            description="Full ownership of all footage and images. Use them in sales proposals, annual reports, website galleries, and marketing campaigns forever."
                            delay={0.4}
                        />

                        <Benefit
                            icon={<Share2 className="w-6 h-6" />}
                            title="Edited Social Media Packages"
                            description="Pre-cut video clips optimized for Instagram Reels, LinkedIn posts, and YouTube shorts. Ready to publish the day Aahar ends."
                            delay={0.5}
                        />

                        <Benefit
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Long-Term Brand Capital"
                            description="Transform a short-term expense into permanent marketing assets that deliver value for years to come."
                            delay={0.6}
                        />
                    </div>
                </div>

                {/* Case Study */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[#E6007E]" />
                            The Strategic Impact
                        </h3>

                        <p className="text-white/90 text-lg mb-6">
                            One manufacturing client used their Aahar documentation for:
                        </p>

                        <ul className="space-y-3 mb-6">
                            {[
                                'LinkedIn campaign (3-month duration)',
                                'Annual investor presentation',
                                'Sales team pitch decks',
                                'Website case study section',
                                'Recruitment marketing content'
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center gap-3 text-white/80"
                                >
                                    <div className="w-2 h-2 bg-[#E6007E] rounded-full flex-shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="bg-[#E6007E]/20 border border-[#E6007E]/30 rounded-xl p-6 mt-8">
                            <p className="text-white text-lg font-bold text-center">
                                What would have cost ₹80,000+ in separate production came bundled into their stall package.
                            </p>
                        </div>

                        <p className="text-white/90 text-lg mt-6 text-center italic">
                            This isn't just documentation—it's <span className="font-bold text-[#E6007E]">turning a short-term expense into long-term brand capital</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
