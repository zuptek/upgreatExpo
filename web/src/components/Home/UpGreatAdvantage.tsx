"use client";

import React from 'react';
import { BarChart3, User, Layers, Shield } from 'lucide-react';

export default function UpGreatAdvantage() {
    const features = [
        {
            icon: <BarChart3 className="text-[#E6007E]" size={24} />,
            title: "Data-Driven Strategies",
            description: "We leverage data analytics to optimize event performance."
        },
        {
            icon: <User className="text-[#E6007E]" size={24} />,
            title: "Audience-Centric Approach",
            description: "Events designed for memorable experiences."
        },
        {
            icon: <Layers className="text-[#E6007E]" size={24} />,
            title: "Efficient Execution",
            description: "Streamlined logistics for seamless delivery."
        },
        {
            icon: <Shield className="text-[#E6007E]" size={24} />,
            title: "Guaranteed Success",
            description: "Committed to exceeding your expectations."
        }
    ];

    return (
        <section className="bg-[#191970] py-20 text-white overflow-hidden relative">
            {/* Background Gradient for depth - REMOVED to match theme */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#191970] to-[#0f0f4a] z-0" /> */}

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4 font-outfit">The UpGreat Advantage</h2>
                        <h3 className="text-3xl font-bold text-[#E6007E] mb-6 font-outfit">
                            Maximum Footfall.<br />
                            Maximum Impact.
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed max-w-md">
                            Our unique approach combines creativity, precision, and a relentless focus on achieving your event objectives.
                        </p>
                    </div>

                    {/* Right Column: Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:border-[#E6007E]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#E6007E]/10">
                                <div className="mb-4">
                                    <div className="w-10 h-10 bg-[#E6007E]/10 rounded flex items-center justify-center group-hover:bg-[#E6007E]/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-[#E6007E] transition-colors font-outfit">{feature.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
