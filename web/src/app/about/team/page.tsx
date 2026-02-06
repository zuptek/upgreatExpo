"use client";

import Counter from '@/components/UI/Counter';

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/assets/event_img5.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Meet Our Team
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        The passionate individuals dedicated to your success.
                    </p>
                </div>
            </section>

            {/* Team Stats */}
            <section className="py-24 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 justify-center items-center text-center">
                        <div className="p-8 bg-slate-50 rounded-lg shadow-sm w-full md:w-1/4">
                            <p className="text-6xl font-bold text-[#E6007E] mb-2">
                                <Counter value={200} suffix="+" />
                            </p>
                            <p className="text-xl text-[#003063] font-semibold">Projects</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-lg shadow-sm w-full md:w-1/4">
                            <p className="text-6xl font-bold text-[#E6007E] mb-2">
                                <Counter value={98} suffix="%" />
                            </p>
                            <p className="text-xl text-[#003063] font-semibold">Client Retention</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-lg shadow-sm w-full md:w-1/4">
                            <p className="text-6xl font-bold text-[#E6007E] mb-2">
                                <Counter value={50} suffix="+" />
                            </p>
                            <p className="text-xl text-[#003063] font-semibold">Pan India Execution</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-lg shadow-sm w-full md:w-1/4">
                            <p className="text-6xl font-bold text-[#E6007E] mb-2">
                                <Counter value={7} suffix="+" />
                            </p>
                            <p className="text-xl text-[#003063] font-semibold">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid (Placeholder for now as specific team members weren't provided) */}
            <section className="py-24 bg-slate-50 px-6 lg:px-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#003063] mb-12">Leadership Team</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Our team is composed of industry veterans and creative minds who bring a wealth of experience to every project.
                        (Detailed team profiles coming soon)
                    </p>
                </div>
            </section>
        </div>
    );
}
