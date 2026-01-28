"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Store, Wrench, Cpu } from 'lucide-react';

interface VerticalData {
    id: string;
    icon: React.ReactNode;
    title: string;
    focus: string;
    architecturalDetail: string;
    features: string[];
}

const verticals: VerticalData[] = [
    {
        id: 'fmcg',
        icon: <Package className="w-6 h-6" />,
        title: 'Food Manufacturing & FMCG',
        focus: 'Distribution network expansion & FSSAI-compliant sampling',
        architecturalDetail: 'Temperature-controlled display integration (2-8°C)',
        features: [
            'Cold chain display systems',
            'FSSAI-compliant sampling zones',
            'Product demonstration theaters',
            'Distributor meeting lounges'
        ]
    },
    {
        id: 'qsr',
        icon: <Store className="w-6 h-6" />,
        title: 'Restaurant Chains & QSR',
        focus: 'Franchise expansion & brand environment replication',
        architecturalDetail: 'Live culinary theaters & Investor ROI documentation centers',
        features: [
            'Live kitchen demonstrations',
            'Franchise opportunity centers',
            'Brand experience replication',
            'Investor presentation suites'
        ]
    },
    {
        id: 'equipment',
        icon: <Wrench className="w-6 h-6" />,
        title: 'Kitchen Equipment & Tech',
        focus: 'Technical credibility & heavy-machinery demonstration',
        architecturalDetail: '500kg/sqm load-bearing floors & industrial electrical compliance',
        features: [
            'Heavy-duty flooring systems',
            'Industrial power infrastructure',
            'Live equipment demonstrations',
            'Technical specification centers'
        ]
    },
    {
        id: 'foodtech',
        icon: <Cpu className="w-6 h-6" />,
        title: 'Food Tech & Innovation',
        focus: 'Technology showcase & investor engagement',
        architecturalDetail: 'Interactive digital displays & demo stations',
        features: [
            'Interactive technology demos',
            'Investor pitch areas',
            'Innovation showcase zones',
            'Partnership development lounges'
        ]
    }
];

export default function IndustryVerticals() {
    const [activeTab, setActiveTab] = useState('fmcg');
    const activeVertical = verticals.find(v => v.id === activeTab) || verticals[0];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#E6007E] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
                        INDUSTRY-SPECIFIC SOLUTIONS
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#191970] mb-6 leading-tight">
                        The Industry Vertical Matrix
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored architectural strategies for every F&B sector
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {verticals.map((vertical) => (
                        <button
                            key={vertical.id}
                            onClick={() => setActiveTab(vertical.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === vertical.id
                                    ? 'bg-gradient-to-r from-[#191970] to-[#E6007E] text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <div className={activeTab === vertical.id ? 'text-white' : 'text-[#E6007E]'}>
                                {vertical.icon}
                            </div>
                            <span className="hidden md:inline">{vertical.title}</span>
                            <span className="md:hidden">{vertical.title.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            {/* Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#191970] to-[#E6007E] rounded-2xl flex items-center justify-center text-white">
                                    {activeVertical.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#191970]">
                                    {activeVertical.title}
                                </h3>
                            </div>

                            {/* Focus */}
                            <div className="mb-6">
                                <span className="text-[#E6007E] font-bold text-sm uppercase tracking-wider">Focus</span>
                                <p className="text-xl text-gray-700 mt-2 font-medium">
                                    {activeVertical.focus}
                                </p>
                            </div>

                            {/* Architectural Detail */}
                            <div className="mb-8 p-6 bg-[#191970]/5 rounded-xl border-l-4 border-[#E6007E]">
                                <span className="text-[#191970] font-bold text-sm uppercase tracking-wider">Architectural Detail</span>
                                <p className="text-lg text-gray-700 mt-2">
                                    {activeVertical.architecturalDetail}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <span className="text-[#191970] font-bold text-sm uppercase tracking-wider mb-4 block">Key Features</span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeVertical.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-2 h-2 bg-[#E6007E] rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">{feature}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
