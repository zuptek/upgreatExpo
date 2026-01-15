import { Briefcase, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/UI/Button";
import Link from 'next/link';

export const metadata = {
    title: "Careers - UpgreatExpo",
    description: "Join our team and help us create unforgettable experiences.",
};

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-[#003063] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <Briefcase size={32} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        We are always looking for talented individuals to help us create unforgettable experiences.
                    </p>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <div className="w-12 h-12 bg-[#E6007E]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="text-[#E6007E] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003063] mb-3">Collaborative Team</h3>
                            <p className="text-slate-600">
                                We believe in the power of teamwork. We work together to achieve great things and support each other's growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <div className="w-12 h-12 bg-[#E6007E]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Heart className="text-[#E6007E] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003063] mb-3">Passion for Excellence</h3>
                            <p className="text-slate-600">
                                We are passionate about what we do. We strive for excellence in every project and go the extra mile for our clients.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                            <div className="w-12 h-12 bg-[#E6007E]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Briefcase className="text-[#E6007E] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003063] mb-3">Growth Opportunities</h3>
                            <p className="text-slate-600">
                                We are committed to your professional growth. We provide opportunities for learning and development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section className="py-20 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#003063] mb-12 text-center">Current Openings</h2>

                    <div className="space-y-6">
                        {/* Placeholder Opening */}
                        <div className="border border-slate-200 rounded-xl p-6 hover:border-[#E6007E] transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#003063] group-hover:text-[#E6007E] transition-colors">Event Manager</h3>
                                    <p className="text-slate-500 mt-1">Full-time • Gurgaon</p>
                                </div>
                                <Link href="/contact">
                                    <Button variant="outline" className="group-hover:bg-[#E6007E] group-hover:text-white group-hover:border-[#E6007E]">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6 hover:border-[#E6007E] transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#003063] group-hover:text-[#E6007E] transition-colors">Graphic Designer</h3>
                                    <p className="text-slate-500 mt-1">Full-time • Gurgaon</p>
                                </div>
                                <Link href="/contact">
                                    <Button variant="outline" className="group-hover:bg-[#E6007E] group-hover:text-white group-hover:border-[#E6007E]">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6 hover:border-[#E6007E] transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#003063] group-hover:text-[#E6007E] transition-colors">Sales Executive</h3>
                                    <p className="text-slate-500 mt-1">Full-time • Gurgaon</p>
                                </div>
                                <Link href="/contact">
                                    <Button variant="outline" className="group-hover:bg-[#E6007E] group-hover:text-white group-hover:border-[#E6007E]">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center bg-slate-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-[#003063] mb-2">Don't see a perfect fit?</h3>
                        <p className="text-slate-600 mb-6">
                            We are always on the lookout for great talent. Send us your resume and we'll keep it on file.
                        </p>
                        <Link href="mailto:Info@UpGreatExpo.com">
                            <Button className="bg-[#003063] hover:bg-[#00204a]">
                                Email Us Your Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
