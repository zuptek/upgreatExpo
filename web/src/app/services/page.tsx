import Image from 'next/image';
import { Button } from "@/components/UI/Button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Our Services - UpgreatExpo",
    description: "Turnkey Exhibition & Event Solutions. We design business outcomes on the exhibition floor.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/services/Comprehensive Solutions ✅MICE Services ✅.webp"
                        alt="Exhibition Stall"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#003063]/80 mix-blend-multiply" />
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Turnkey Exhibition & <br />
                        <span className="text-[#E6007E]">Event Solutions</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
                        The UpGreat Expo is not a vendor network. We are a single-point strategic partner for brands that want control, impact, and ROI.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="/contact-us">
                            <Button className="bg-[#E6007E] hover:bg-[#C5006C] text-white px-8 py-6 text-lg rounded-full">
                                Partner With Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                        A Complete Exhibition Growth Ecosystem
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        The UpGreat Expo is not a stall vendor. We are a strategic exhibition growth partner.
                        We don’t just execute events. We engineer outcomes on the exhibition floor.
                        Our service structure is built like an ecosystem—so brands don’t buy “deliverables,” they buy results.
                    </p>
                    <div className="h-1 w-20 bg-[#E6007E] mx-auto rounded-full" />
                </div>
            </section>

            {/* Service 1: Exhibition Strategy */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                            <Image
                                src="/assets/services/Comprehensive Solutions.webp"
                                alt="Exhibition Strategy"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-4">
                                ROI Engineering
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Exhibition Strategy & ROI Engineering
                            </h2>
                            <p className="text-xl text-slate-700 italic mb-6 border-l-4 border-[#E6007E] pl-4">
                                "We don’t ask how big your stall should be. We ask what your exhibition must achieve."
                            </p>
                            <p className="text-slate-600 mb-6">
                                This layer turns your exhibition from a cost center into a business engine. We deliver:
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Exhibition goal mapping (Leads, Dealers, Sales)",
                                    "Visitor journey & engagement flow design",
                                    "Stall placement and zoning strategy",
                                    "ROI-focused booth architecture",
                                    "Pre-expo planning frameworks"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#003063] text-white hover:bg-[#00244a] px-6 py-3 rounded-full">
                                    Talk to a Strategist <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Stall Design */}
            <section className="py-20 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-4">
                                Design & Fabrication
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Exhibition Stall Design & Fabrication
                            </h2>
                            <p className="text-xl text-slate-700 italic mb-6 border-l-4 border-[#E6007E] pl-4">
                                "Not structures. Strategic brand experiences."
                            </p>
                            <p className="text-slate-600 mb-6">
                                Your stall is your battlefield. We design and fabricate stalls engineered for maximum visibility, smooth visitor flow, and lead conversion.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Custom wooden stalls",
                                    "Modular & Octanorm systems",
                                    "Mezzanine & double-decker booths",
                                    "Island stalls & brand pavilions",
                                    "High-impact 3D concepts"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#003063] text-white hover:bg-[#00244a] px-6 py-3 rounded-full">
                                    Get Stall Quote <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/services/Custom Wooden Exhibition Stalls.webp"
                                alt="Stall Design"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Brand Experience */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                            <Image
                                src="/assets/services/Island Pavilions.webp"
                                alt="Brand Experience"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-4">
                                Experience Design
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Brand Experience Design
                            </h2>
                            <p className="text-xl text-slate-700 italic mb-6 border-l-4 border-[#E6007E] pl-4">
                                "We don’t build space. We design brand memory."
                            </p>
                            <p className="text-slate-600 mb-6">
                                Your stall becomes an experience—not a structure. We map audience psychology to create immersive zones and product demo journeys.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Brand storytelling in space",
                                    "Immersive booth zones",
                                    "Product demo journeys",
                                    "Experience-driven layouts",
                                    "Audience psychology mapping"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#003063] text-white hover:bg-[#00244a] px-6 py-3 rounded-full">
                                    Design My Experience <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 4: Corporate Events */}
            <section className="py-20 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-4">
                                Event Management
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Corporate Event Management
                            </h2>
                            <p className="text-xl text-slate-700 italic mb-6 border-l-4 border-[#E6007E] pl-4">
                                "From concept to execution. No chaos. No compromise."
                            </p>
                            <p className="text-slate-600 mb-6">
                                Events fail when execution is fragmented. We eliminate that. Your team builds relationships; we handle the battlefield.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Product launches & Dealer meets",
                                    "Roadshows, Conferences & Seminars",
                                    "Venue planning & Stage design",
                                    "Branding & production",
                                    "Technical coordination & On-ground execution"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#003063] text-white hover:bg-[#00244a] px-6 py-3 rounded-full">
                                    Plan Your Event <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/services/Corporate Conferences & Summits.webp"
                                alt="Corporate Events"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 5: Trade Show Organization */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                            <Image
                                src="/assets/services/International Conference Management.webp"
                                alt="Trade Show Organization"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-4">
                                Expo Management
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Trade Show Organization
                            </h2>
                            <p className="text-xl text-slate-700 italic mb-6 border-l-4 border-[#E6007E] pl-4">
                                "Build exhibitions that work like businesses."
                            </p>
                            <p className="text-slate-600 mb-6">
                                We run exhibitions as business platforms, not just events. From concept to closing ceremony, we ensure exhibitors succeed and brands convert.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "B2B & B2C exhibition planning",
                                    "Stall booking systems",
                                    "Floor layout & zoning",
                                    "Exhibitor coordination",
                                    "Signage, wayfinding & On-ground operations"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact-us">
                                <Button className="bg-[#003063] text-white hover:bg-[#00244a] px-6 py-3 rounded-full">
                                    Host Your Expo <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services Grid */}
            <section className="py-20 px-6 lg:px-12 bg-[#003063] text-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold mb-4 text-[#E6007E]">Data-Driven Lead Capture</h3>
                            <p className="text-white/80 mb-6 italic">"Visibility is useless if it doesn’t convert."</p>
                            <ul className="space-y-2 mb-6 text-white/70">
                                <li>• QR-based lead capture</li>
                                <li>• Digital visitor tracking</li>
                                <li>• Engagement analytics</li>
                                <li>• Post-expo data reports</li>
                            </ul>
                            <Link href="/contact-us">
                                <Button variant="ghost" className="text-white hover:text-[#E6007E] hover:bg-transparent p-0">
                                    Upgrade My ROI <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold mb-4 text-[#E6007E]">Post-Expo Marketing</h3>
                            <p className="text-white/80 mb-6 italic">"Your exhibition shouldn’t end when the doors close."</p>
                            <ul className="space-y-2 mb-6 text-white/70">
                                <li>• Professional BTS photos & videos</li>
                                <li>• PR-ready content</li>
                                <li>• Social media assets</li>
                                <li>• Brand credibility kits</li>
                            </ul>
                            <Link href="/contact-us">
                                <Button variant="ghost" className="text-white hover:text-[#E6007E] hover:bg-transparent p-0">
                                    Amplify My Brand <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The UpGreat Difference */}
            <section className="py-24 px-6 lg:px-12 bg-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#003063] mb-6">
                        The UpGreat Difference
                    </h2>
                    <p className="text-2xl text-slate-600 mb-8 font-light">
                        Most agencies execute. <span className="text-[#E6007E] font-semibold">We engineer outcomes.</span>
                    </p>
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                        With the Upgrade to UpGreat model, your exhibition becomes a growth system—not an expense.
                        This structure positions The UpGreat Expo as an industry authority, not a vendor.
                    </p>
                    <Link href="/contact-us">
                        <Button className="bg-[#E6007E] hover:bg-[#C5006C] text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all">
                            Start Your Project
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
