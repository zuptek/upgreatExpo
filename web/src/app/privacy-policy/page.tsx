import { Shield, Lock, Eye } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy - UpgreatExpo",
    description: "Privacy Policy for UpgreatExpo.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#003063] to-[#002145] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                        <Shield size={32} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        We value your trust and are committed to protecting your personal information.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E]/20 flex items-center justify-center">
                                <Lock size={20} className="text-[#E6007E]" />
                            </div>
                            <span className="text-sm">Data Protection</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E]/20 flex items-center justify-center">
                                <Eye size={20} className="text-[#E6007E]" />
                            </div>
                            <span className="text-sm">Transparency</span>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-white/60">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="mb-8 pb-8 border-b border-slate-200">
                        <p className="text-xl text-slate-600 mb-4">
                            At UpgreatExpo ("us", "we", or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#003063]">
                            <p className="text-sm text-slate-700">
                                <strong>Note:</strong> This policy applies to all visitors, users, and others who access our Service ("Users").
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                1
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Information Collection and Use</h2>
                                <p className="text-slate-600 mb-4">
                                    We collect several different types of information for various purposes to provide and improve our Service to you.
                                </p>
                            </div>
                        </div>

                        <div className="ml-14 mb-12">
                            <h3 className="text-xl font-bold text-[#003063] mt-8 mb-4">Types of Data Collected</h3>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-[#E6007E]/10 flex items-center justify-center">
                                        <Lock size={12} className="text-[#E6007E]" />
                                    </div>
                                    <h4 className="font-bold text-slate-700">Personal Data</h4>
                                </div>
                                <p className="text-slate-600 mb-3">
                                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Phone number</li>
                                    <li>Address, State, Province, ZIP/Postal code, City</li>
                                    <li>Cookies and Usage Data</li>
                                    <li>Company name and job title (for business inquiries)</li>
                                    <li>Payment information (processed securely through our payment partners)</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-[#003063]/10 flex items-center justify-center">
                                        <Eye size={12} className="text-[#003063]" />
                                    </div>
                                    <h4 className="font-bold text-slate-700">Usage Data</h4>
                                </div>
                                <p className="text-slate-600">
                                    We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-slate-700 mb-2">Tracking & Cookies Data</h4>
                                <p className="text-slate-600 mb-3">
                                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                                </p>
                                <p className="text-slate-600">
                                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                                </p>
                            </div>
                        </div>

                        {/* Use of Data */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                2
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Use of Data</h2>
                                <p className="text-slate-600 mb-4">
                                    UpgreatExpo uses the collected data for various purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>To provide and maintain the Service</li>
                                    <li>To notify you about changes to our Service</li>
                                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                                    <li>To provide customer care and support</li>
                                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                                    <li>To monitor the usage of the Service</li>
                                    <li>To detect, prevent and address technical issues</li>
                                    <li>To fulfill your requests for products, services, or information</li>
                                    <li>To send you marketing communications (where you have opted in)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Transfer of Data */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                3
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Transfer of Data</h2>
                                <p className="text-slate-600 mb-4">
                                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                                </p>
                                <p className="text-slate-600 mb-4">
                                    If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.
                                </p>
                                <p className="text-slate-600">
                                    UpgreatExpo will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                                </p>
                            </div>
                        </div>

                        {/* Disclosure of Data */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                4
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Disclosure of Data</h2>
                                <p className="text-slate-600 mb-4">
                                    UpgreatExpo may disclose your Personal Data in the good faith belief that such action is necessary to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                    <li>To comply with a legal obligation</li>
                                    <li>To protect and defend the rights or property of UpgreatExpo</li>
                                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                                    <li>To protect the personal safety of users of the Service or the public</li>
                                    <li>To protect against legal liability</li>
                                    <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                                </ul>
                            </div>
                        </div>

                        {/* Security of Data */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                5
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Security of Data</h2>
                                <p className="text-slate-600 mb-4">
                                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                                </p>
                                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                                    <h4 className="font-bold text-slate-700 mb-2">Our Security Measures Include:</h4>
                                    <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                                        <li>SSL/TLS encryption for data transmission</li>
                                        <li>Regular security assessments and vulnerability testing</li>
                                        <li>Access controls and authentication procedures</li>
                                        <li>Secure data storage with encryption at rest</li>
                                        <li>Regular staff training on data protection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Providers */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                6
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Service Providers</h2>
                                <p className="text-slate-600 mb-4">
                                    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                                </p>
                                <p className="text-slate-600 mb-4">
                                    These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                </p>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-slate-700 mb-2">Examples of Service Providers we use:</h4>
                                    <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
                                        <li>Payment processors for secure transaction handling</li>
                                        <li>Analytics providers to understand user behavior</li>
                                        <li>Email service providers for communication</li>
                                        <li>Cloud hosting providers for data storage</li>
                                        <li>Customer support platforms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Links to Other Sites */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                7
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Links to Other Sites</h2>
                                <p className="text-slate-600 mb-4">
                                    Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                                </p>
                                <p className="text-slate-600">
                                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                                </p>
                            </div>
                        </div>

                        {/* Children's Privacy */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                8
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Children's Privacy</h2>
                                <p className="text-slate-600 mb-4">
                                    Our Service does not address anyone under the age of 18 ("Children").
                                </p>
                                <p className="text-slate-600 mb-4">
                                    We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                                </p>
                            </div>
                        </div>

                        {/* Changes to This Privacy Policy */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                9
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Changes to This Privacy Policy</h2>
                                <p className="text-slate-600 mb-4">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                                </p>
                                <p className="text-slate-600 mb-4">
                                    We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                                </p>
                                <p className="text-slate-600">
                                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                                </p>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center text-[#003063] font-bold flex-shrink-0 mt-1">
                                10
                            </div>
                            <div className="w-full">
                                <h2 className="text-2xl font-bold text-[#003063] mb-4">Contact Us</h2>
                                <p className="text-slate-600 mb-4">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200 mt-4">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Shield className="text-[#003063] mt-1" size={20} />
                                        <div>
                                            <p className="font-bold text-[#003063]">UpgreatExpo</p>
                                            <p className="text-slate-600">Unit No. 213-214, 2nd Floor, Welldone Tech Park, Gurgaon – 122018</p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-slate-500 mb-1">Phone</p>
                                            <p className="text-slate-700">+91 90886 55513</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 mb-1">Email</p>
                                            <p className="text-slate-700">Info@UpGreatExpo.com</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-slate-200">
                                        <p className="text-sm text-slate-500">
                                            For data protection inquiries or to exercise your data rights, please email us with the subject line "Privacy Request".
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 text-sm text-slate-500">
                                    <p>We typically respond to privacy-related inquiries within 3-5 business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}