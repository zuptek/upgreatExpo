"use client";

import React from 'react';
import { TrendingUp, Users, MousePointerClick, Award, PieChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/UI/Button';

const outcomes = [
    {
        icon: <TrendingUp className="w-5 h-5 text-white" />,
        text: "40-60% increase in qualified booth traffic through attention-commanding design"
    },
    {
        icon: <Users className="w-5 h-5 text-white" />,
        text: "Enhanced visitor engagement with strategic flow architecture and interaction zones"
    },
    {
        icon: <MousePointerClick className="w-5 h-5 text-white" />,
        text: "Higher lead conversion rates via integrated capture systems and CRM technology"
    },
    {
        icon: <Award className="w-5 h-5 text-white" />,
        text: "Superior competitive positioning at industry trade shows and exhibitions"
    },
    {
        icon: <PieChart className="w-5 h-5 text-white" />,
        text: "Comprehensive ROI tracking with detailed post-event analytics and insights"
    }
];

const WhyPartner = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="max-w-4xl mb-16">
                    <div className="inline-block px-4 py-1 bg-[#191970]/5 text-[#191970] font-semibold rounded-full mb-6 text-sm uppercase tracking-wider">
                        Market Leadership
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6 font-outfit leading-tight">
                        Why India's Leading Brands <br />
                        <span className="text-[#E6007E]">Partner with The UpGreat Expo.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Strategy Content */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-[#191970] mb-4 font-outfit">
                                Strategic Exhibition Consultation & Planning
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our exhibition strategy consultants analyze your business objectives, target demographics, and competitive positioning before creating a single design element. From booth layout architecture to visitor psychology integration—every component is optimized for lead generation, brand recall, and sales conversion.
                            </p>
                            <div className="mt-8">
                                <Button href="/work" className="bg-[#E6007E] hover:bg-[#be0068] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 group">
                                    View Our Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        {/* Decorative Image or Graphic could go here, for now using a colored block */}
                        <div className="h-2 bg-gradient-to-r from-[#191970] to-[#E6007E] rounded-full w-1/3"></div>
                    </div>

                    {/* Right Column: Outcomes List */}
                    <div className="bg-[#191970] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#E6007E] rounded-full opacity-20 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#4B0082] rounded-full opacity-20 blur-3xl"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10 font-outfit flex items-center gap-3">
                            <CheckCircle2 className="text-[#E6007E]" />
                            Guaranteed Business Outcomes
                        </h3>

                        <div className="space-y-6 relative z-10">
                            {outcomes.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#E6007E] transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <p className="text-white/90 text-lg leading-snug">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default WhyPartner;
