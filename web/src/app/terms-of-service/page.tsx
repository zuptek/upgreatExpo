import { FileText, Shield, AlertCircle, Scale, UserCheck, Globe, Ban, AlertTriangle, Gavel, Mail } from 'lucide-react';

export const metadata = {
    title: "Terms of Service - UpgreatExpo",
    description: "Terms of Service for UpgreatExpo.",
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#003063] to-[#002145] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <FileText size={32} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <UserCheck size={18} className="text-[#E6007E]" />
                            <span className="text-sm">User Agreement</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Scale size={18} className="text-[#E6007E]" />
                            <span className="text-sm">Legal Terms</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={18} className="text-[#E6007E]" />
                            <span className="text-sm">Your Rights</span>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-white/60">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="container mx-auto max-w-4xl">
                    {/* Important Notice */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-[#E6007E] p-6 rounded-lg mb-12">
                        <div className="flex items-start gap-4">
                            <AlertCircle className="text-[#E6007E] flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-slate-800 mb-2">Important Notice</h3>
                                <p className="text-slate-600">
                                    By accessing or using UpgreatExpo services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="text-[#003063]" size={24} />
                                <h2 className="text-2xl font-bold text-[#003063]">Agreement Overview</h2>
                            </div>
                            <p className="text-lg text-slate-600 mb-6">
                                These Terms of Service ("Terms") govern your relationship with the UpgreatExpo website and services (the "Service") operated by UpgreatExpo. They outline the rules and guidelines for using our platform.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-slate-700 mb-2">For All Users</h4>
                                    <p className="text-sm text-slate-600">These terms apply to all visitors, users, and anyone accessing our Service.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-slate-700 mb-2">Acceptance Required</h4>
                                    <p className="text-sm text-slate-600">Using our Service constitutes acceptance of these terms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Terms */}
                        <div className="space-y-12">
                            {/* Accounts */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <UserCheck size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Account Terms</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Accurate Information:</strong> You must provide accurate and complete information when creating an account.</p>
                                                <p className="text-slate-600 text-sm">Keep your account information updated at all times.</p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Password Security:</strong> You are responsible for maintaining the security of your password.</p>
                                                <p className="text-slate-600 text-sm">Do not share your password with third parties.</p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Account Activity:</strong> You are responsible for all activities under your account.</p>
                                                <p className="text-slate-600 text-sm">Notify us immediately of any unauthorized access.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Shield size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Intellectual Property</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-slate-600">
                                                All content, features, and functionality on UpgreatExpo are owned by us or our licensors and are protected by intellectual property laws.
                                            </p>
                                            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                                <p className="text-slate-700"><strong>Restrictions:</strong> You may not copy, modify, distribute, or use our trademarks without written permission.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Links */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Globe size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">External Links</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-slate-600">
                                                Our Service may contain links to third-party websites or services.
                                            </p>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="text-slate-700"><strong>Important:</strong> We are not responsible for:</p>
                                                <ul className="list-disc pl-6 mt-2 text-slate-600 text-sm">
                                                    <li>Content on third-party sites</li>
                                                    <li>Their privacy policies or practices</li>
                                                    <li>Any damages from using third-party services</li>
                                                </ul>
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                Always review the terms and privacy policies of third-party sites you visit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Termination */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Ban size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Termination</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-slate-50 p-4 rounded-lg">
                                                    <p className="font-bold text-slate-700 mb-2">By Us</p>
                                                    <p className="text-sm text-slate-600">We may suspend or terminate your account for violations of these terms.</p>
                                                </div>
                                                <div className="bg-slate-50 p-4 rounded-lg">
                                                    <p className="font-bold text-slate-700 mb-2">By You</p>
                                                    <p className="text-sm text-slate-600">You may stop using our Service at any time.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Liability & Disclaimer */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <AlertTriangle size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Liability & Disclaimer</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Service "AS IS":</strong> We provide the Service without warranties of any kind.</p>
                                                <p className="text-slate-600 text-sm">We don't guarantee uninterrupted, error-free, or virus-free service.</p>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Limitation of Liability:</strong> We are not liable for indirect or consequential damages.</p>
                                                <p className="text-slate-600 text-sm">This includes loss of profits, data, or business opportunities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Governing Law */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        6
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <Gavel size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Governing Law</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <p className="text-slate-700"><strong>Jurisdiction:</strong> These Terms are governed by Indian law.</p>
                                                <p className="text-slate-600 text-sm mt-2">Any disputes will be subject to the exclusive jurisdiction of courts in Gurgaon, India.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Changes */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        7
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <AlertCircle size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Changes to Terms</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>We May Update Terms:</strong> We reserve the right to modify these terms.</p>
                                                <p className="text-slate-600 text-sm">Significant changes will be notified in advance.</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="text-slate-700 mb-2"><strong>Continued Use:</strong> Using our Service after changes means you accept the new terms.</p>
                                                <p className="text-slate-600 text-sm">Review terms periodically for updates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        8
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Mail size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Contact Information</h3>
                                        </div>
                                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border border-slate-200">
                                            <div className="mb-6">
                                                <h4 className="font-bold text-[#003063] mb-3">UpgreatExpo</h4>
                                                <p className="text-slate-600">Unit No. 213-214, 2nd Floor</p>
                                                <p className="text-slate-600">Welldone Tech Park, Gurgaon – 122018</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-sm text-slate-500 mb-2">Phone</p>
                                                    <p className="text-slate-700 font-medium">+91 90886 55513</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500 mb-2">Email</p>
                                                    <p className="text-slate-700 font-medium">Info@UpGreatExpo.com</p>
                                                </div>
                                            </div>
                                            <div className="mt-8 pt-6 border-t border-slate-200">
                                                <p className="text-sm text-slate-500">
                                                    For questions about these Terms or any legal inquiries, please email us with the subject "Terms Inquiry".
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Note */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-3 mb-4">
                                <Scale size={20} className="text-[#E6007E]" />
                                <p className="text-slate-700 font-medium">These Terms constitute the entire agreement between you and UpgreatExpo regarding our Service.</p>
                            </div>
                            <p className="text-sm text-slate-500">
                                By using UpgreatExpo, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}