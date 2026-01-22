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
                    <div className="max-w-3xl mx-auto">
                        {/* Head Office */}
                        <div className="bg-slate-50 p-10 rounded-xl shadow-lg border-t-4 border-[#E6007E]">
                            <h2 className="text-3xl font-bold text-[#003063] mb-8 text-center">Head Office</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Address */}
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#E6007E]/10 flex items-center justify-center mb-2">
                                        <MapPin className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <h3 className="font-semibold text-[#003063]">Address</h3>
                                    <p className="text-slate-600">
                                        Welldone Tech Park, Sector 48<br />
                                        Gurugram – 122018
                                    </p>
                                </div>

                                {/* Email & Website */}
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#E6007E]/10 flex items-center justify-center mb-2">
                                        <Mail className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <h3 className="font-semibold text-[#003063]">Email & Website</h3>
                                    <div className="text-slate-600 flex flex-col">
                                        <a href="mailto:info@upgreatexpo.com" className="hover:text-[#E6007E] transition-colors">info@upgreatexpo.com</a>
                                        <a href="https://www.upgreatexpo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6007E] transition-colors">www.upgreatexpo.com</a>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#E6007E]/10 flex items-center justify-center mb-2">
                                        <Phone className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <h3 className="font-semibold text-[#003063]">Contact</h3>
                                    <a href="tel:+919088655513" className="text-slate-600 hover:text-[#E6007E] transition-colors">
                                        +91 90886 55513
                                    </a>
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
