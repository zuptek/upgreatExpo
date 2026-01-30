"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, XCircle, Shield, Lock, TrendingUp, Zap, Award, BarChart } from 'lucide-react';

interface CostRow {
    component: string;
    budgetVendor: string;
    upgreat: string;
    isBudgetHidden?: boolean;
    isTotal?: boolean;
}

const costData: CostRow[] = [
    {
        component: 'Initial Quote',
        budgetVendor: '₹4,00,000',
        upgreat: '₹5,50,000'
    },
    {
        component: 'Design Revisions',
        budgetVendor: '+₹80,000',
        upgreat: '₹0 (Included)',
        isBudgetHidden: true
    },
    {
        component: 'Structural Engineering',
        budgetVendor: '+₹45,000',
        upgreat: '₹0 (Included)',
        isBudgetHidden: true
    },
    {
        component: 'Installation Rush Fees',
        budgetVendor: '+₹35,000',
        upgreat: '₹0 (Standard)',
        isBudgetHidden: true
    },
    {
        component: 'Electrical & AV Integration',
        budgetVendor: '+₹75,000',
        upgreat: '₹0 (Basic Package Included)',
        isBudgetHidden: true
    },
    {
        component: 'Documentation Assets',
        budgetVendor: '+₹50,000',
        upgreat: '₹0 (Included)',
        isBudgetHidden: true
    },
    {
        component: 'On-site Support',
        budgetVendor: '+₹25,000/day',
        upgreat: '₹0 (Included)',
        isBudgetHidden: true
    },
    {
        component: 'TOTAL LANDED COST',
        budgetVendor: '₹7,10,000+',
        upgreat: '₹5,50,000 (Locked Price)',
        isTotal: true
    }
];

export default function InvestmentMirage() {
    return (
        <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 md:py-28 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#E6007E]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#191970]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[#E6007E] font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
                        COST ANALYSIS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#191970] mb-6 leading-tight">
                        The Investment Mirage
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Compare <span className="font-bold text-[#E6007E]">real costs</span> between budget vendors and strategic partners
                    </p>
                </motion.div>

                {/* Key Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="text-3xl font-bold text-red-600 mb-2">48%</div>
                            <p className="text-gray-700">Average cost overrun with budget vendors</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="text-3xl font-bold text-amber-600 mb-2">72%</div>
                            <p className="text-gray-700">Experience installation delays</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
                            <p className="text-gray-700">Higher ROI with strategic partners</p>
                        </div>
                    </div>
                </motion.div>

                {/* Warning Alert */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-amber-900 mb-2">Strategic Insight</h4>
                                <p className="text-amber-800">
                                    In 2025, 28% of exhibitors faced fabrication failures due to budget vendors.
                                    Market leaders choose transparent, all-inclusive pricing for predictable results.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Clean Cost Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-gradient-to-r from-[#191970] to-[#0a0a2e]">
                            <div className="p-4 text-white font-bold text-lg border-r border-white/20">
                                Cost Component
                            </div>
                            <div className="p-4 text-center text-white font-bold text-lg border-r border-white/20">
                                Budget Vendor
                            </div>
                            <div className="p-4 text-center text-white font-bold text-lg">
                                UpGreat Proposal
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="bg-white">
                            {costData.map((row, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`
                                        grid grid-cols-3 items-center
                                        ${row.isTotal
                                            ? 'bg-gradient-to-r from-[#191970]/10 to-[#0a0a2e]/10 border-t-2 border-[#191970]'
                                            : index % 2 === 0
                                                ? 'bg-gray-50'
                                                : 'bg-white'
                                        }
                                        hover:bg-gray-100 transition-colors
                                    `}
                                >
                                    {/* Cost Component */}
                                    <div className={`p-4 ${row.isTotal ? 'font-bold text-lg text-black' : 'text-gray-800'}`}>
                                        {row.component}
                                    </div>

                                    {/* Budget Vendor Column */}
                                    <div className="p-4 text-center border-l border-r border-gray-100">
                                        <div className="flex items-center justify-center gap-2">
                                            {row.isBudgetHidden && !row.isTotal && (
                                                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            )}
                                            <span className={`
                                                ${row.isBudgetHidden ? 'text-red-600' : ''}
                                                ${row.isTotal ? 'font-bold text-lg text-red-600' : ''}
                                            `}>
                                                {row.budgetVendor}
                                            </span>
                                        </div>
                                        {row.isBudgetHidden && !row.isTotal && (
                                            <div className="text-xs text-red-500 mt-1">Hidden Cost</div>
                                        )}
                                    </div>

                                    {/* UpGreat Column */}
                                    <div className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {!row.isTotal && row.upgreat.includes('₹0') && (
                                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            )}
                                            {row.isTotal && (
                                                <Lock className="w-5 h-5 text-[#E6007E]" />
                                            )}
                                            <span className={`
                                                ${row.upgreat.includes('₹0') && !row.isTotal ? 'text-green-600' : ''}
                                                ${row.isTotal ? 'font-bold text-lg text-[#191970]' : ''}
                                            `}>
                                                {row.upgreat}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Value Highlights */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                        <div className="text-center mb-8">
                            <Shield className="w-10 h-10 text-[#E6007E] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#191970] mb-4">The UpGreat Advantage</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Transparent Pricing</h4>
                                    <p className="text-gray-600 text-sm">No hidden costs or surprise charges. What you see is what you pay.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Higher ROI</h4>
                                    <p className="text-gray-600 text-sm">Strategic designs deliver 3.2x higher lead generation and engagement.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Risk Protection</h4>
                                    <p className="text-gray-600 text-sm">Comprehensive insurance coverage and quality assurance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-[#191970] text-white px-6 py-3 rounded-lg shadow mb-6">
                        <span className="font-bold">Total Savings: ₹1,60,000+</span>
                    </div>
                    <p className="text-lg font-bold text-[#191970] max-w-2xl mx-auto mb-4">
                        Choose predictable results over hidden costs
                    </p>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        The UpGreat difference is clear: transparent pricing, comprehensive inclusions,
                        and strategic execution that delivers real business results.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}