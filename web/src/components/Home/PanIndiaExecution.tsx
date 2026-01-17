"use client";

import React from 'react';
import { MapPin, Building2, Truck, Network, Award, Clock, Users } from 'lucide-react';

const capabilities = [
    {
        icon: <Building2 className="w-6 h-6 text-white" />,
        title: "15+ Major Metros",
        description: "Direct execution and project management"
    },
    {
        icon: <Network className="w-6 h-6 text-white" />,
        title: "50+ Tier-2 & Tier-3 Markets",
        description: "Established partner networks and local expertise"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Single Point Coordination",
        description: "Centralized management for multi-city campaigns"
    },
    {
        icon: <MapPin className="w-6 h-6 text-white" />,
        title: "Regional Market Intelligence",
        description: "Deep local vendor relationships and cultural understanding"
    },
    {
        icon: <Award className="w-6 h-6 text-white" />,
        title: "Absolute Quality Consistency",
        description: "Identical premium standards in Mumbai and Lucknow alike"
    },
    {
        icon: <Truck className="w-6 h-6 text-white" />,
        title: "Advanced Logistics",
        description: "Seamless material transportation and installation timing"
    }
];

const markets = [
    "Delhi NCR (Gurugram, Noida, Greater Noida)",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh"
];



const PanIndiaExecution = () => {
    return (
        <section className="py-24 bg-[#191970] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-1 bg-white/10 text-white font-semibold rounded-full mb-6 text-sm uppercase tracking-wider border border-white/20">
                        Nationwide Reach
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
                        Pan-India Exhibition <br />
                        <span className="text-[#E6007E]">Execution Excellence.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Consistent world-class quality from Delhi to Chennai, Mumbai to Kolkata, Bangalore to Jaipur. Our centralized project management system ensures international exhibition standards across all Indian markets—from tier-1 metropolitan exhibition centers to tier-2 business hubs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-[#E6007E] flex items-center justify-center mb-6 shadow-lg shadow-[#E6007E]/30 group-hover:scale-110 transition-transform">
                                {cap.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-outfit">
                                {cap.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                    <h3 className="text-lg font-bold mb-6 text-[#E6007E] uppercase tracking-wider">
                        Primary Exhibition Markets
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/90 font-medium">
                        {markets.map((market, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#E6007E]" />
                                <span>{market}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PanIndiaExecution;
