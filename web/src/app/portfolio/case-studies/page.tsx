import React from 'react';

export const metadata = {
    title: 'Case Studies - UpgreatExpo',
    description: 'Detailed case studies of our exhibition design and event management projects.',
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-12">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[#003063] mb-6">
                    Case <span className="text-[#E6007E]">Studies</span>
                </h1>
                <p className="text-xl text-slate-600 mb-12">
                    Explore how we've helped brands achieve their exhibition goals through strategic design and flawless execution.
                </p>
                <div className="p-12 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-500 italic">Detailed case studies coming soon...</p>
                </div>
            </div>
        </div>
    );
}
