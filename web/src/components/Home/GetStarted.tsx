"use client";

import React from 'react';
import { PhoneCall, FileText, PenTool, Hammer, BarChart2 } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Complimentary Strategy Consultation",
        description: "Schedule a comprehensive 30-minute strategy call where we thoroughly understand your business objectives, exhibition goals, target audience, and success criteria.",
        icon: <PhoneCall className="w-6 h-6 text-white" />
    },
    {
        number: "02",
        title: "Custom Proposal Delivery",
        description: "Receive a detailed proposal including photorealistic 3D booth concepts, itemized transparent pricing, comprehensive project timeline, and strategic recommendations within 48 business hours.",
        icon: <FileText className="w-6 h-6 text-white" />
    },
    {
        number: "03",
        title: "Collaborative Design Refinement",
        description: "Work directly with our senior design team to perfect every visual and functional detail. Unlimited revision rounds until you're completely satisfied with the final design.",
        icon: <PenTool className="w-6 h-6 text-white" />
    },
    {
        number: "04",
        title: "Professional Execution & Installation",
        description: "Relax while our experienced team manages fabrication, logistics coordination, professional installation, and comprehensive on-ground management.",
        icon: <Hammer className="w-6 h-6 text-white" />
    },
    {
        number: "05",
        title: "Results Documentation & Analysis",
        description: "Receive professional photography and videography, comprehensive ROI analysis, performance benchmarking, and strategic recommendations for continuous improvement.",
        icon: <BarChart2 className="w-6 h-6 text-white" />
    }
];

const GetStarted = () => {
    return (
        <section className="py-24 bg-[#191970] text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E6007E]/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#E6007E]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1 bg-white/10 text-white font-semibold rounded-full mb-6 text-sm uppercase tracking-wider border border-white/20">
                        Start Your Project
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
                        Get Started With <br />
                        <span className="text-[#E6007E]">The UpGreat Expo.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Your Journey to Exhibition Excellence Begins Today
                    </p>
                </div>

                {/* Steps Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:border-[#E6007E]/50">
                                        <h3 className="text-xl font-bold mb-3 font-outfit text-white group-hover:text-[#E6007E] transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Marker */}
                                <div className="relative flex items-center justify-center flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-[#191970] border-4 border-[#E6007E] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(230,0,126,0.4)]">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-10 text-sm font-bold text-white/30 tracking-widest">STEP</div>
                                    <div className="absolute -bottom-8 text-xl font-bold text-white/50 font-outfit">{step.number}</div>
                                </div>

                                {/* Empty Side */}
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GetStarted;
