"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Counter from '@/components/UI/Counter';

interface MetricProps {
    value: string;
    label: string;
    prefix?: string;
    suffix?: string;
    delay?: number;
}

const Metric: React.FC<MetricProps> = ({ value, label, prefix = "", suffix = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
            <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                {prefix}
                {value.includes('Crore') || value.includes('Year') ? (
                    <Counter value={parseInt(value)} />
                ) : (
                    value
                )}
                {suffix}
            </div>
            <div className="text-sm md:text-base text-white/80 font-medium uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
};

export default function AuthorityQuadrant() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Metric
                value="47"
                label="Crore Client Revenue"
                prefix="₹"
                suffix=" Cr"
                delay={0.1}
            />
            <Metric
                value="Official Partner"
                label="Pragati Maidan Empaneled"
                delay={0.2}
            />
            <Metric
                value="5"
                label="Years Zero Delays"
                suffix=" Yrs"
                delay={0.3}
            />
            <Metric
                value="ISO 9001:2015"
                label="Certified Quality"
                delay={0.4}
            />
        </div>
    );
}
