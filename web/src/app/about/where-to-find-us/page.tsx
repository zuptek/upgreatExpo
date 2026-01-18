import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
    title: "Where to Find Us - UpgreatExpo",
    description: "Visit our offices or get in touch.",
};

export default function WhereToFindUsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/assets/event_img2.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Where to Find Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        We are present across India to serve you better.
                    </p>
                </div>
            </section>

            {/* Locations */}
            <section className="py-24 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Head Office */}
                        <div className="bg-slate-50 p-8 rounded-lg shadow-sm border-l-4 border-[#E6007E]">
                            <h2 className="text-2xl font-bold text-[#003063] mb-6">Head Office</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-[#E6007E] flex-shrink-0 mt-1" />
                                    <p className="text-slate-600">
                                        Plot No. 23, Sector 18,<br />
                                        Gurugram, Haryana - 122001
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
                                    <p className="text-slate-600">+91 98765 43210</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
                                    <p className="text-slate-600">info@upgreatexpo.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Branch Office (Placeholder) */}
                        <div className="bg-slate-50 p-8 rounded-lg shadow-sm border-l-4 border-[#003063]">
                            <h2 className="text-2xl font-bold text-[#003063] mb-6">Branch Office (Mumbai)</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-[#003063] flex-shrink-0 mt-1" />
                                    <p className="text-slate-600">
                                        Unit 405, Corporate Park,<br />
                                        Andheri East, Mumbai - 400093
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-[#003063] flex-shrink-0" />
                                    <p className="text-slate-600">+91 22 1234 5678</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-[#003063] flex-shrink-0" />
                                    <p className="text-slate-600">mumbai@upgreatexpo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="h-[400px] bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500 text-lg">Interactive Map Integration Coming Soon</p>
            </section>
        </div>
    );
}
