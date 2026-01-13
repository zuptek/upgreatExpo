"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function OurProcess() {
    const steps = [
        {
            number: "1",
            title: "Discovery & Planning",
            description: "Understanding your goals and target audience."
        },
        {
            number: "2",
            title: "Conceptualization & Design",
            description: "Creating innovative and engaging event concepts."
        },
        {
            number: "3",
            title: "Logistics & Coordination",
            description: "Seamlessly managing all logistical aspects."
        },
        {
            number: "4",
            title: "Execution & Management",
            description: "Ensuring flawless execution on the event day."
        },
        {
            number: "5",
            title: "Post-Event Analysis",
            description: "Analyzing event performance and gathering feedback."
        },
        {
            number: "6",
            title: "Continuous Improvement",
            description: "Refining our processes for future events."
        }
    ];

    return (
        <section className="bg-[#00356b] py-20 text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                    <p className="text-white/70">A step-by-step timeline from concept to completion.</p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-px bg-white/10 hidden md:block"
                    ></motion.div>

                    <div className="space-y-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >

                                {/* Card Side */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <div className={`bg-[#00458c] p-6 rounded-lg border border-white/10 w-full max-w-md relative hover:border-cyan-500/30 transition-all duration-300 group shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                                        <p className="text-white/70 text-sm">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Number */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                        className="w-12 h-12 rounded-full bg-[#00458c] border border-white/20 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                                    >
                                        {step.number}
                                    </motion.div>
                                    {/* Horizontal connector lines for desktop */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '2rem' }} // 2rem is w-8
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-white/10 ${index % 2 === 0 ? 'right-full mr-6' : 'left-full ml-6'}`}
                                    ></motion.div>
                                </div>

                                {/* Empty Side (for spacing) */}
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
