"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock } from 'lucide-react';

interface GuaranteeProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge: string;
    delay: number;
}

const GuaranteeCard: React.FC<GuaranteeProps> = ({ icon, title, description, badge, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
        >
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                    {icon}
                </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#191970] mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
                {description}
            </p>

            {/* Badge */}
            <div className="inline-block bg-green-50 text-green-700 font-bold text-sm px-4 py-2 rounded-full border border-green-200">
                {badge}
            </div>

            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </motion.div>
    );
};

export default function PerformanceGuarantee() {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#191970] to-[#0a0a2e] py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
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
                        CONTRACTUAL COMMITMENTS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        The Performance Guarantee
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Because Your Brand Reputation is <span className="text-[#E6007E] font-bold">Non-Negotiable</span>
                    </p>
                </motion.div>

                {/* Guarantees Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <GuaranteeCard
                        icon={<Shield className="w-8 h-8" />}
                        title="Installation Guarantee"
                        description="₹5 Lakh penalty if not 100% complete 24 hours before opening. We put our money where our mouth is."
                        badge="₹5L Bond"
                        delay={0.1}
                    />

                    <GuaranteeCard
                        icon={<CheckCircle className="w-8 h-8" />}
                        title="Design Fidelity"
                        description="95%+ match between approved 3D render and physical build. What you approve is what you get."
                        badge="95% Match"
                        delay={0.2}
                    />

                    <GuaranteeCard
                        icon={<Lock className="w-8 h-8" />}
                        title="Financial Integrity"
                        description="Zero-variation clause. The price we agree on is the price you pay. No hidden fees, no surprises."
                        badge="Locked Price"
                        delay={0.3}
                    />
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl">
                        <p className="text-white/90 text-lg leading-relaxed">
                            <span className="font-bold text-[#E6007E]">23 years.</span> Not a single installation delay.
                            Not a single compliance failure. Not a single broken promise.
                            <span className="block mt-4 text-white font-semibold">That's not luck. That's engineering.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
