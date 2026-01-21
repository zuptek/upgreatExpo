"use client";

import React from 'react';
import { Target, PenTool, Hammer, CheckSquare, BarChart } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "STRATEGIC PLANNING",
        description: "Comprehensive business objective analysis, competitive landscape assessment, target audience profiling, and exhibition ROI goal setting",
        icon: <Target className="w-6 h-6 text-white" />
    },
    {
        id: "02",
        title: "CONVERSION-FOCUSED DESIGN",
        description: "3D exhibition booth visualization, visitor flow architecture, brand psychology integration, and engagement zone mapping",
        icon: <PenTool className="w-6 h-6 text-white" />
    },
    {
        id: "03",
        title: "PRECISION FABRICATION",
        description: "Premium materials sourcing, expert craftsmanship, rigorous quality control, and advanced manufacturing technology",
        icon: <Hammer className="w-6 h-6 text-white" />
    },
    {
        id: "04",
        title: "FLAWLESS EXECUTION",
        description: "Professional on-site installation, real-time project management, seamless coordination, and immediate problem resolution",
        icon: <CheckSquare className="w-6 h-6 text-white" />
    },
    {
        id: "05",
        title: "MEASURABLE RESULTS",
        description: "ROI analytics, professional documentation delivery, performance benchmarking, and continuous optimization strategies",
        icon: <BarChart className="w-6 h-6 text-white" />
    }
];

const BestExhibitionCompany = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1 bg-[#191970]/5 text-[#191970] font-semibold rounded-full mb-6 text-sm uppercase tracking-wider">
                        Industry Leader
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6 font-outfit leading-tight">
                        What Makes The <span className="text-[#E6007E]">UpGreat</span> Expo <br />
                        <span className="text-[#E6007E]">The Best Exhibition Company in India</span>
                    </h2>
                    <h3 className="text-xl font-semibold text-[#191970] mb-6">
                        Strategic Exhibition Design Partners, Not Just Stall Vendors
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        While competitors build booths, we engineer business growth platforms. Our exhibition stall design methodology combines conversion psychology, architectural excellence, and data-driven visitor engagement systems to deliver measurable ROI.
                    </p>
                </div>

                {/* Difference Box */}
                <div className="bg-[#191970] text-white p-8 md:p-12 rounded-3xl mb-20 relative overflow-hidden text-center max-w-5xl mx-auto shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10 font-outfit">The <span className="text-[#E6007E]">UpGreat</span> Expo Difference</h3>
                    <p className="text-lg text-white/90 leading-relaxed relative z-10">
                        Every custom exhibition booth is strategically designed for maximum footfall, qualified lead generation, and competitive brand dominance. We don't create displays—we create revenue engines.
                    </p>
                </div>

                {/* 5-Step Framework */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-[#191970] mb-12 font-outfit">
                        Our Proven 5-Step Exhibition Success Framework
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-6xl text-[#191970]">
                                    {step.id}
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-[#E6007E] flex items-center justify-center mb-6 shadow-lg shadow-[#E6007E]/20 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#191970] mb-3 font-outfit">
                                    {step.title}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center">
                    <p className="text-xl font-medium text-[#191970] italic">
                        "Every decision is data-driven. Every element is strategically engineered. Every exhibition becomes a competitive advantage."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BestExhibitionCompany;
