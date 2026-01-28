"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/UI/Button';

export default function UrgencySection() {
    return (
        <section className="relative w-full bg-white py-24 md:py-32 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto max-w-5xl">
                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200 overflow-hidden"
                >
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl -ml-32 -mb-32" />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Icon & Badge */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                                <Clock className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-[#191970] text-center mb-6 leading-tight"
                        >
                            47 Strategic Partnership Slots<br />
                            <span className="text-amber-600">Remaining for AAHAR 2026</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto"
                        >
                            To maintain ISO-certified quality and execution focus, we limit our client intake.
                            In 2025, <span className="font-bold text-amber-700">28% of exhibitors</span> faced fabrication
                            failures due to late-stage reactive planning.
                        </motion.p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-xl p-6 text-center shadow-md"
                            >
                                <div className="text-3xl font-bold text-[#E6007E] mb-2">47</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wider">Slots Available</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-xl p-6 text-center shadow-md"
                            >
                                <div className="text-3xl font-bold text-amber-600 mb-2">28%</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wider">Failure Rate (2025)</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="bg-white rounded-xl p-6 text-center shadow-md"
                            >
                                <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wider">Our Failure Rate</div>
                            </motion.div>
                        </div>

                        {/* Alert Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-white border-l-4 border-[#E6007E] rounded-xl p-6 mb-8 flex items-start gap-4"
                        >
                            <AlertCircle className="w-6 h-6 text-[#E6007E] flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-[#191970] mb-2">Market Leaders Plan Strategically</h4>
                                <p className="text-gray-700">
                                    Strategic partnerships are secured 6-9 months in advance. Reactive planning leads to
                                    compromised quality, rushed execution, and missed opportunities.
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="text-center"
                        >
                            <Button
                                className="bg-gradient-to-r from-[#191970] to-[#E6007E] hover:from-[#E6007E] hover:to-[#191970] text-white font-bold uppercase tracking-widest text-sm h-14 px-10 rounded-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                href="/contact-us"
                            >
                                <TrendingUp className="w-5 h-5 mr-2" />
                                Secure Your Partnership Slot
                            </Button>
                            <p className="text-sm text-gray-500 mt-4 italic">
                                Limited capacity • First-come, first-served basis
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
