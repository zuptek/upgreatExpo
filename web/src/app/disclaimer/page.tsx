import { AlertTriangle, ExternalLink, BookOpen, Shield, XCircle, EyeOff, AlertCircle, Info, Mail } from 'lucide-react';

export const metadata = {
    title: "Disclaimer - UpgreatExpo",
    description: "Disclaimer for UpgreatExpo.",
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#003063] to-[#002145] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <AlertTriangle size={32} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Important information regarding the use of our website and services.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <Shield size={18} className="text-[#E6007E]" />
                            <span className="text-sm">Legal Protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen size={18} className="text-[#E6007E]" />
                            <span className="text-sm">Information Use</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <EyeOff size={18} className="text-[#E6007E]" />
                            <span className="text-sm">Limitations</span>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-white/60">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="container mx-auto max-w-4xl">
                    {/* Critical Warning */}
                    <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-8 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-3 rounded-full">
                                <XCircle className="text-red-600" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-red-800 mb-3">Important Legal Notice</h3>
                                <p className="text-red-700 mb-4">
                                    This disclaimer outlines important limitations and conditions regarding your use of UpgreatExpo. By accessing our website, you acknowledge and agree to these terms.
                                </p>
                                <div className="bg-white/50 p-4 rounded-lg">
                                    <p className="text-sm text-red-600 font-medium">
                                        The information on this site is for general purposes only. We make no warranties about completeness, accuracy, or reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="text-[#003063]" size={24} />
                                <h2 className="text-2xl font-bold text-[#003063]">General Information Disclaimer</h2>
                            </div>
                            <p className="text-lg text-slate-600 mb-6">
                                All content and information provided on the UpgreatExpo website is offered in good faith for general informational purposes. We do our best to ensure accuracy, but we cannot guarantee the completeness or timeliness of the information presented.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h4 className="font-bold text-slate-800 mb-2">General Purposes Only</h4>
                                    <p className="text-sm text-slate-600">Information is not specific advice</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h4 className="font-bold text-slate-800 mb-2">Accuracy Not Guaranteed</h4>
                                    <p className="text-sm text-slate-600">We strive for but don't guarantee accuracy</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h4 className="font-bold text-slate-800 mb-2">Subject to Change</h4>
                                    <p className="text-sm text-slate-600">Information may be updated or changed</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Disclaimer Sections */}
                        <div className="space-y-12">
                            {/* External Links */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <ExternalLink size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">External Links Disclaimer</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="bg-yellow-50 p-5 rounded-lg">
                                                <p className="text-slate-700 mb-3"><strong>Third-Party Content:</strong> Our website may contain links to external websites operated by third parties.</p>
                                                <div className="bg-white p-4 rounded mt-3">
                                                    <p className="text-sm text-slate-600 font-medium mb-2">We do not:</p>
                                                    <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                                                        <li>Monitor or investigate external links</li>
                                                        <li>Guarantee their accuracy or completeness</li>
                                                        <li>Endorse their content or views</li>
                                                        <li>Control their privacy policies</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="text-sm text-red-700 font-medium">
                                                    <AlertCircle size={16} className="inline mr-2" />
                                                    You access third-party links at your own risk. We recommend reviewing their terms and policies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Advice */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <BookOpen size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Not Professional Advice</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="bg-purple-50 p-5 rounded-lg">
                                                <p className="text-slate-700 mb-4">
                                                    <strong>Important:</strong> The information on our site is for general informational purposes only and should not be considered professional advice.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                    <div className="bg-white p-4 rounded">
                                                        <p className="text-sm text-slate-600 font-medium mb-2">This is NOT:</p>
                                                        <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                                                            <li>Legal advice</li>
                                                            <li>Financial advice</li>
                                                            <li>Business consulting</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-4 rounded">
                                                        <p className="text-sm text-slate-600 font-medium mb-2">You Should:</p>
                                                        <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                                                            <li>Consult professionals</li>
                                                            <li>Conduct your own research</li>
                                                            <li>Make informed decisions</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-600">
                                                    We encourage you to seek appropriate professional guidance before making business decisions based on information from our site.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Errors and Omissions */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <EyeOff size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Errors & Omissions</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-5 rounded-lg">
                                                <p className="text-slate-700 mb-4">
                                                    Despite our efforts to provide accurate and current information, errors may occur. We provide all information "as is" without any warranties.
                                                </p>
                                                <div className="bg-white p-4 rounded mt-4">
                                                    <p className="text-sm text-slate-600 font-medium mb-3">We are not responsible for:</p>
                                                    <ul className="list-disc pl-6 text-sm text-slate-600 space-y-2">
                                                        <li>Any errors or omissions in the content</li>
                                                        <li>Results obtained from using our information</li>
                                                        <li>Timeliness or completeness of information</li>
                                                        <li>Technical issues affecting access</li>
                                                        <li>Decisions made based on site content</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Disclaimers */}
                            <div className="border-b border-slate-200 pb-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Shield size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Additional Limitations</h3>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-slate-800 mb-3">No Warranties</h4>
                                                    <p className="text-sm text-slate-600">
                                                        We disclaim all warranties, express or implied, regarding the website's operation and content.
                                                    </p>
                                                </div>
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-slate-800 mb-3">Limitation of Liability</h4>
                                                    <p className="text-sm text-slate-600">
                                                        We are not liable for any damages arising from your use of our website.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="text-sm text-red-700 font-medium">
                                                    <AlertTriangle size={16} className="inline mr-2" />
                                                    Your use of this website is at your sole risk. You assume full responsibility for any outcomes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0">
                                        5
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Mail size={20} className="text-[#003063]" />
                                            <h3 className="text-xl font-bold text-[#003063]">Contact & Questions</h3>
                                        </div>
                                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200">
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
                                                    For questions about this disclaimer or to report inaccurate information, please contact us with "Disclaimer Inquiry" in the subject line.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Acknowledgement */}
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <AlertTriangle className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-700 font-medium mb-2">
                                        By using UpgreatExpo, you acknowledge that you have read, understood, and agree to this Disclaimer.
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        This disclaimer may be updated periodically. Continued use of our website constitutes acceptance of any changes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}