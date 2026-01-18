import React from 'react';

export const metadata = {
    title: 'Resources - UpgreatExpo',
    description: 'Downloadable resources, guides, and tools for exhibition planning.',
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-12">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[#003063] mb-6">
                    Exhibition <span className="text-[#E6007E]">Resources</span>
                </h1>
                <p className="text-xl text-slate-600 mb-12">
                    Expert guides, checklists, and tools to help you plan your next successful exhibition.
                </p>
                <div className="p-12 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-500 italic">Resources library coming soon...</p>
                </div>
            </div>
        </div>
    );
}
