"use client";

import React from 'react';
import { Camera, Video, Users, Share2, Database, Plane } from 'lucide-react';

const features = [
    {
        icon: <Video className="w-6 h-6 text-[#E6007E]" />,
        title: "High-definition time-lapse",
        description: "Construction and installation videos"
    },
    {
        icon: <Camera className="w-6 h-6 text-[#E6007E]" />,
        title: "Professional photography",
        description: "Exhibition booth photography from strategic angles"
    },
    {
        icon: <Users className="w-6 h-6 text-[#E6007E]" />,
        title: "Team engagement",
        description: "Visitor interaction documentary footage"
    },
    {
        icon: <Plane className="w-6 h-6 text-[#E6007E]" />,
        title: "Aerial drone cinematography",
        description: "Premium coverage for large pavilions"
    },
    {
        icon: <Share2 className="w-6 h-6 text-[#E6007E]" />,
        title: "Social media content",
        description: "Edited packages ready for immediate publishing"
    },
    {
        icon: <Database className="w-6 h-6 text-[#E6007E]" />,
        title: "Raw file libraries",
        description: "Complete assets for corporate presentations"
    }
];

const useCases = [
    "LinkedIn marketing campaigns",
    "Sales presentations",
    "Investor pitch decks",
    "Website portfolio content",
    "Annual corporate reports",
    "Future exhibition proposals",
    "Brand authority building"
];

const BTSDocumentation = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-6 text-sm uppercase tracking-wider">
                            Value Added Service
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6 font-outfit leading-tight">
                            Complimentary Professional <br />
                            <span className="text-[#E6007E]">BTS Documentation.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Receive extensive behind-the-scenes photography and videography coverage of your exhibition stall—included complimentary with every project, not as an expensive add-on.
                        </p>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-[#191970] mb-6 border-b border-slate-100 pb-4">
                                Strategic Use Cases
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {useCases.map((useCase, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">
                                        {useCase}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 rounded-lg bg-[#E6007E]/5 flex items-center justify-center mb-4 group-hover:bg-[#E6007E]/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-[#191970] mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BTSDocumentation;
