"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { Calendar, Download, MapPin, Building2, Phone, Mail } from 'lucide-react';

export default function AaharCTA() {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#191970] via-[#1a1a5e] to-[#E6007E] py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Start Your Strategic<br />
                        Assessment Today
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Choose your pathway to exhibition excellence
                    </p>
                </motion.div>

                {/* Dual Pathway Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {/* Pathway 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-[#E6007E]/50 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#E6007E] to-[#be0068] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#191970] mb-3">
                            Pathway 1
                        </h3>
                        <p className="text-[#E6007E] font-semibold text-sm uppercase tracking-wider mb-4">
                            For Decision-Stage Leaders
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Schedule a strategic consultation with our exhibition architects.
                            We'll analyze your objectives and engineer a custom solution.
                        </p>
                        <Button
                            className="w-full bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-sm h-14 rounded-sm transition-all shadow-lg"
                            href="/contact-us"
                        >
                            Request Consultation
                        </Button>
                    </motion.div>

                    {/* Pathway 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-[#191970]/50 transition-all duration-300 group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#191970] to-[#0a0a2e] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Download className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#191970] mb-3">
                            Pathway 2
                        </h3>
                        <p className="text-[#191970] font-semibold text-sm uppercase tracking-wider mb-4">
                            For Research-Stage Planning
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Download our comprehensive 28-page success framework.
                            Learn our methodology, see case studies, and understand the UpGreat advantage.
                        </p>
                        <Button
                            className="w-full bg-[#191970] hover:bg-[#0a0a2e] text-white font-bold uppercase tracking-widest text-sm h-14 rounded-sm transition-all shadow-lg"
                            href="#portfolio"
                        >
                            Download Framework
                        </Button>
                    </motion.div>
                </div>

                {/* Corporate Office Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="max-w-5xl mx-auto mb-12"
                >
                    <div className="bg-white rounded-2xl p-4 shadow-2xl">
                        <img
                            src="/assets/corporate-office.png"
                            alt="Welldone Tech Park - Corporate Office"
                            className="w-full h-auto rounded-xl"
                        />
                        <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                            Welldone Tech Park, Sector 48, Gurugram - Our Corporate Office
                        </p>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                        Visit Our Facilities
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Corporate Office */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Corporate Office</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    Welldone Tech Park<br />
                                    Sector 48, Gurugram<br />
                                    Haryana, India
                                </p>
                            </div>
                        </div>

                        {/* Fabrication Facility */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Fabrication Facility</h4>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    Plot 23, Industrial Area<br />
                                    Sector 37, Gurugram<br />
                                    <span className="text-[#E6007E] font-semibold">(Inspection Welcome)</span>
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Phone</h4>
                                <a href="tel:+918586965553" className="text-white/80 text-sm hover:text-[#E6007E] transition-colors">
                                    +91 85869 65553
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Email</h4>
                                <a href="mailto:info@upgreatexpo.com" className="text-white/80 text-sm hover:text-[#E6007E] transition-colors">
                                    info@upgreatexpo.com
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
