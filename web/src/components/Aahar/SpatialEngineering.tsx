"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Magnet, Users, Handshake, Crown } from 'lucide-react';

interface ZoneProps {
    number: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    color: string;
    delay: number;
}

const Zone: React.FC<ZoneProps> = ({ number, icon, title, subtitle, description, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative group"
        >
            {/* Zone Number */}
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-gradient-to-br from-[#191970] to-[#E6007E] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {number}
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 h-full" style={{ borderColor: color }}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4`} style={{ backgroundColor: `${color}20` }}>
                    <div style={{ color: color }}>
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#191970] mb-2">
                    {title}
                </h3>
                <p className="text-[#E6007E] font-semibold text-sm uppercase tracking-wider mb-3">
                    {subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default function SpatialEngineering() {
    return (
        <section className="relative w-full bg-[#191970] py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(230,0,126,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#E6007E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
                        BEHAVIORAL SCIENCE MEETS ROI ENGINEERING
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        We Don't Design Booths.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E6007E]">
                            We Optimize Brand Authority
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Per Square Meter
                    </p>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-white/70 text-lg mb-12 max-w-4xl mx-auto"
                >
                    Strategic exhibition architecture backed by behavioral science and ROI engineering
                </motion.p>

                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Zone
                        number="1"
                        icon={<Magnet className="w-7 h-7" />}
                        title="Attraction"
                        subtitle="THE HOOK"
                        description="Visual magnets engineered to stop traffic in high-density aisles. Using contrast psychology and motion design to achieve 3x higher foot traffic than industry average."
                        color="#E6007E"
                        delay={0.1}
                    />

                    <Zone
                        number="2"
                        icon={<Users className="w-7 h-7" />}
                        title="Engagement"
                        subtitle="THE EXPERIENCE"
                        description="Multi-sensory demonstration areas including live kitchens and tech demos. Designed to increase dwell time by 40% and create memorable brand interactions."
                        color="#FF6B35"
                        delay={0.2}
                    />

                    <Zone
                        number="3"
                        icon={<Handshake className="w-7 h-7" />}
                        title="Conversion"
                        subtitle="THE CLOSE"
                        description="Sound-insulated B2B negotiation suites for high-value deal-making. Privacy-optimized spaces that facilitate serious business conversations and contract signings."
                        color="#4ECDC4"
                        delay={0.3}
                    />

                    <Zone
                        number="4"
                        icon={<Crown className="w-7 h-7" />}
                        title="Relationship"
                        subtitle="THE LEGACY"
                        description="VIP lounges designed for deep stakeholder engagement. Premium hospitality zones that transform transactional meetings into long-term partnerships."
                        color="#FFD700"
                        delay={0.4}
                    />
                </div>

                {/* Spatial Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-2xl">
                        <img
                            src="/assets/spatial-diagram.png"
                            alt="4-Zone Booth Layout Diagram"
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center"
                >
                    <p className="text-white/60 text-sm italic max-w-2xl mx-auto">
                        Each zone is meticulously engineered based on visitor flow bio-mechanics,
                        brand psychology, and conversion optimization principles.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
