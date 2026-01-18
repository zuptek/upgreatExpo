import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { ArrowRight, Users, MapPin, BookOpen, Briefcase } from "lucide-react";

export const metadata = {
    title: "About Us - UpgreatExpo",
    description: "Learn more about our team, our story, and our mission.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/assets/event_img1.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        About UpgreatExpo
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Transforming ideas into unforgettable events through creativity, precision, and passion.
                    </p>
                </div>
            </section>

            {/* Navigation Cards */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Our Story */}
                        <Link href="/about/our-story" className="group">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#E6007E]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E6007E] transition-colors">
                                    <BookOpen className="w-6 h-6 text-[#E6007E] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#003063] mb-3 group-hover:text-[#E6007E] transition-colors">Our Story</h3>
                                <p className="text-slate-600 mb-6">
                                    Discover our journey from a small startup to a leading event management agency.
                                </p>
                                <div className="flex items-center text-[#E6007E] font-semibold text-sm">
                                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Team */}
                        <Link href="/about/team" className="group">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#003063]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#003063] transition-colors">
                                    <Users className="w-6 h-6 text-[#003063] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#003063] mb-3 group-hover:text-[#E6007E] transition-colors">Our Team</h3>
                                <p className="text-slate-600 mb-6">
                                    Meet the passionate experts dedicated to making your event a success.
                                </p>
                                <div className="flex items-center text-[#003063] font-semibold text-sm group-hover:text-[#E6007E] transition-colors">
                                    Meet The Team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Where to Find Us */}
                        <Link href="/about/where-to-find-us" className="group">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#E6007E]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E6007E] transition-colors">
                                    <MapPin className="w-6 h-6 text-[#E6007E] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#003063] mb-3 group-hover:text-[#E6007E] transition-colors">Where to Find Us</h3>
                                <p className="text-slate-600 mb-6">
                                    Locate our offices and get in touch with our team across India.
                                </p>
                                <div className="flex items-center text-[#E6007E] font-semibold text-sm">
                                    View Locations <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>

                        {/* Careers */}
                        <Link href="/about/careers" className="group">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#003063]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#003063] transition-colors">
                                    <Briefcase className="w-6 h-6 text-[#003063] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-[#003063] mb-3 group-hover:text-[#E6007E] transition-colors">Careers</h3>
                                <p className="text-slate-600 mb-6">
                                    Join our growing team and help us create unforgettable experiences.
                                </p>
                                <div className="flex items-center text-[#003063] font-semibold text-sm group-hover:text-[#E6007E] transition-colors">
                                    View Openings <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#003063] text-white px-6 lg:px-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Create Something Amazing?</h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Let's work together to bring your vision to life. Contact us today to start planning your next unforgettable event.
                    </p>
                    <Button href="/contact-us" className="bg-[#E6007E] hover:bg-[#c4006b] text-white px-8 py-4 text-lg h-auto rounded-sm">
                        Get In Touch
                    </Button>
                </div>
            </section>
        </div>
    );
}
