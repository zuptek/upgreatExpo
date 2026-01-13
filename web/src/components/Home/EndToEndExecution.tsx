"use client";

import React from 'react';
import { Lightbulb, Palette, Hammer, Briefcase, Rocket, BarChart3, Check } from 'lucide-react';

export default function EndToEndExecution() {
    const steps = [
        {
            icon: <Lightbulb className="text-yellow-400" size={24} />,
            title: "Concept",
            description: "We plan and deliver with precision."
        },
        {
            icon: <Palette className="text-cyan-400" size={24} />,
            title: "Design",
            description: "We plan and deliver with precision."
        },
        {
            icon: <Hammer className="text-orange-400" size={24} />,
            title: "Production",
            description: "We plan and deliver with precision."
        },
        {
            icon: <Briefcase className="text-red-400" size={24} />,
            title: "Setup",
            description: "We plan and deliver with precision."
        },
        {
            icon: <Rocket className="text-purple-400" size={24} />,
            title: "Execution",
            description: "We plan and deliver with precision."
        },
        {
            icon: <BarChart3 className="text-blue-400" size={24} />,
            title: "Reporting",
            description: "We plan and deliver with precision."
        }
    ];

    const features = [
        {
            title: "Data-Driven Strategies",
            description: "Audience insights, footfall forecasting and KPI tracking to maximise ROI."
        },
        {
            title: "Audience-Centric Experiences",
            description: "Design-led booths and program flows for higher engagement & conversions."
        },
        {
            title: "Logistics & Production",
            description: "End-to-end logistics, vendor management and on-site supervision."
        },
        {
            title: "Guaranteed Delivery",
            description: "On-time setup, safety-first execution and post-event reporting."
        }
    ];

    return (
        <section className="bg-white py-20 text-[#003063] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10">End-to-End Execution</h2>
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-full bg-slate-100 border border-slate-200 group-hover:border-[#003063]/20 transition-colors">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#003063] group-hover:text-cyan-600 transition-colors">{step.title}</h3>
                                        <p className="text-slate-600 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-[#003063] border border-white/10 p-6 rounded-lg hover:border-cyan-500/30 transition-all duration-300 group shadow-lg">
                                <div className="mb-4">
                                    <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center">
                                        <Check className="text-cyan-400" size={16} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
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
