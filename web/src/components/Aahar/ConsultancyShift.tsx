"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Camera, Shield, FileCheck } from 'lucide-react';

interface DifferentiatorProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    value?: string;
    delay: number;
}

const Differentiator: React.FC<DifferentiatorProps> = ({ icon, title, description, value, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E6007E]/20"
        >
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#191970] to-[#E6007E] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

            {/* Value Badge */}
            {value && (
                <div className="inline-block bg-[#E6007E]/10 text-[#E6007E] font-bold text-sm px-4 py-2 rounded-full">
                    {value}
                </div>
            )}

            {/* Hover Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6007E]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </motion.div>
    );
};

export default function ConsultancyShift() {
    return (
        <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-24 md:py-32 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#E6007E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
                        THE CONSULTANCY DIFFERENCE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#191970] mb-6 leading-tight">
                        Why Market Leaders Choose<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#191970] to-[#E6007E]">
                            Strategic Partnerships
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Over Transactional Vendors
                    </p>
                </motion.div>

                {/* Differentiators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Differentiator
                        icon={<Lightbulb className="w-8 h-8" />}
                        title="Complimentary Strategic Design & Spatial Mapping"
                        description="We don't provide 'sketches.' We provide photorealistic visualizations based on visitor flow bio-mechanics and brand psychology."
                        delay={0.1}
                    />

                    <Differentiator
                        icon={<Camera className="w-8 h-8" />}
                        title="Integrated Archival Documentation"
                        description="Professional 4K video, time-lapse setup, and 100+ high-res images. Your exhibition becomes a permanent marketing asset for annual reports and investor relations."
                        value="Value: ₹50,000"
                        delay={0.2}
                    />

                    <Differentiator
                        icon={<Shield className="w-8 h-8" />}
                        title="Absolute Regulatory Compliance"
                        description="From FSSAI food-grade surface standards to Pragati Maidan structural safety. We eliminate the risk of mid-event shutdowns or compliance fines."
                        delay={0.3}
                    />

                    <Differentiator
                        icon={<FileCheck className="w-8 h-8" />}
                        title="Performance-Based Accountability"
                        description="We don't make promises; we sign bonds. Our contracts include a ₹5 Lakh penalty clause for installation delays."
                        value="₹5L Guarantee"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
