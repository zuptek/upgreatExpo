"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Palette, Hammer, Briefcase, Rocket, BarChart3 } from 'lucide-react';

export default function EndToEndExecution() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    const steps = [
        {
            icon: <Lightbulb className="text-yellow-500" size={32} />,
            title: "Concept",
            description: "We brainstorm and strategize to create a unique concept that aligns with your brand goals."
        },
        {
            icon: <Palette className="text-[#191970]" size={32} />,
            title: "Design",
            description: "Our creative team brings the concept to life with stunning 3D visuals and immersive layouts."
        },
        {
            icon: <Hammer className="text-orange-500" size={32} />,
            title: "Production",
            description: "Precision manufacturing and fabrication using high-quality materials for a flawless finish."
        },
        {
            icon: <Briefcase className="text-red-500" size={32} />,
            title: "Setup",
            description: "Seamless on-site installation and logistics management to ensure everything is ready on time."
        },
        {
            icon: <Rocket className="text-purple-500" size={32} />,
            title: "Execution",
            description: "Flawless event day management, ensuring smooth operations and a memorable experience."
        },
        {
            icon: <BarChart3 className="text-[#191970]" size={32} />,
            title: "Reporting",
            description: "Comprehensive post-event analysis and reporting to measure success and ROI."
        }
    ];

    return (
        // Removed sticky, top-0, z-30 to fix visibility issue
        <section ref={containerRef} className="relative bg-slate-50 py-24 text-[#191970] overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 font-outfit"
                    >
                        End-to-End Execution
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        From the initial spark of an idea to the final post-event report, we handle every detail with precision and passion.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            style={{ y: index % 2 === 0 ? 0 : yCards }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-[#191970] group-hover:text-[#191970] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
