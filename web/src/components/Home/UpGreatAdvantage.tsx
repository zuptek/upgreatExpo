"use client";

import React from 'react';
import { BarChart3, User, Layers, Shield } from 'lucide-react';

export default function UpGreatAdvantage() {
    const features = [
        {
            icon: <BarChart3 className="text-emerald-500" size={24} />,
            title: "Data-Driven Strategies",
            description: "We leverage data analytics to optimize event performance."
        },
        {
            icon: <User className="text-emerald-500" size={24} />,
            title: "Audience-Centric Approach",
            description: "Events designed for memorable experiences."
        },
        {
            icon: <Layers className="text-emerald-500" size={24} />,
            title: "Efficient Execution",
            description: "Streamlined logistics for seamless delivery."
        },
        {
            icon: <Shield className="text-emerald-500" size={24} />,
            title: "Guaranteed Success",
            description: "Committed to exceeding your expectations."
        }
    ];

    return (
        <section className="bg-[#020B1C] py-20 text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4">The UpGreat Advantage</h2>
                        <h3 className="text-3xl font-bold text-emerald-500 mb-6">
                            Maximum Footfall.<br />
                            Maximum Impact.
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed max-w-md">
                            Our unique approach combines creativity, precision, and a relentless focus on achieving your event objectives.
                        </p>
                    </div>

                    {/* Right Column: Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#0A1629] border border-white/5 p-6 rounded-lg hover:border-emerald-500/30 transition-all duration-300 group">
                                <div className="mb-4">
                                    <div className="w-10 h-10 bg-emerald-500/10 rounded flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
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
