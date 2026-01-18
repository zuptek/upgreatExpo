import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/UI/Button';
import { ArrowRight, CheckCircle2, Star, Quote, Settings, Cpu, Globe } from 'lucide-react';
import EndToEndExecution from '@/components/Home/EndToEndExecution';
import WorkCarousel from '@/components/Home/WorkCarousel';
import ImageGrid from '@/components/Home/ImageGrid';
import Counter from '@/components/UI/Counter';

const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered" },
    { value: 55, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "On-Time Delivery" },
];

export const metadata = {
    title: 'Portfolio - UpgreatExpo',
    description: 'A global showcase of award-winning exhibition designs and flawless event execution.',
};

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-[#E6007E]">Masterpieces</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        A global showcase of award-winning exhibition designs and flawless event execution for industry giants.
                    </p>
                </div>
            </section>

            {/* Design Philosophy Section */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-6">
                                Our Philosophy
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#003063] mb-8 leading-tight">
                                Conversion-Focused <span className="text-[#E6007E]">Exhibition Architecture</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Every design element serves strategic business purposes: attract maximum attention, guide visitor flow intelligently, facilitate meaningful business conversations, capture qualified leads efficiently, and create memorable brand experiences that drive post-event sales.
                            </p>

                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#E6007E]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Settings className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003063] mb-2">Visitor Psychology Integration</h3>
                                        <p className="text-slate-600">We apply proven principles of spatial psychology, color theory, and visual hierarchy science to influence visitor behavior at subconscious levels—creating powerful brand associations and increasing average booth dwell time by 40-65%.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#E6007E]/10 rounded-full flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003063] mb-2">Functional Design Excellence</h3>
                                        <p className="text-slate-600">Stunning aesthetics meet practical functionality. Our exhibition booths include adequate storage, comfortable private meeting spaces, professional lighting, intuitive navigation, and ergonomic layouts.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#E6007E]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Cpu className="w-6 h-6 text-[#E6007E]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#003063] mb-2">Advanced Technology Integration</h3>
                                        <p className="text-slate-600">Digital lead capture systems, interactive touchscreen catalogs, immersive AR/VR demos, real-time social media walls, and IoT-enabled visitor tracking.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio_images/edited-01.webp"
                                alt="Exhibition Design Philosophy"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* End to End Execution Section */}
            <EndToEndExecution />

            {/* Work Carousel */}
            <WorkCarousel />

            {/* Client Success Stories */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#003063] mb-4">
                            Client Success Stories
                        </h2>
                        <p className="text-xl text-slate-600">Real Business Results. Measurable Growth. Exceptional Returns.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Case Study 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#E6007E]">
                            <h3 className="text-xl font-bold text-[#003063] mb-2">Leading Automotive Manufacturer</h3>
                            <p className="text-sm text-[#E6007E] font-semibold mb-4">Auto Expo Delhi</p>
                            <div className="space-y-4 text-sm text-slate-600">
                                <p><strong className="text-[#003063]">Challenge:</strong> Launch revolutionary EV model at India's largest automotive exhibition amid 50+ competing manufacturers.</p>
                                <p><strong className="text-[#003063]">Solution:</strong> Designed and executed a commanding 300 sqm double-decker island pavilion featuring immersive test drive simulators.</p>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <strong className="block text-[#003063] mb-2">Measurable Results:</strong>
                                    <ul className="space-y-1 list-disc list-inside">
                                        <li>12,000+ qualified visitors</li>
                                        <li>2,400 high-intent leads</li>
                                        <li>85% increase in media coverage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#E6007E]">
                            <h3 className="text-xl font-bold text-[#003063] mb-2">Enterprise Technology Company</h3>
                            <p className="text-sm text-[#E6007E] font-semibold mb-4">Bengaluru Tech Summit</p>
                            <div className="space-y-4 text-sm text-slate-600">
                                <p><strong className="text-[#003063]">Challenge:</strong> Establish thought leadership positioning in highly competitive B2B SaaS marketplace.</p>
                                <p><strong className="text-[#003063]">Solution:</strong> Created innovation-focused experience zone with live product demonstrations and integrated speaking stage.</p>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <strong className="block text-[#003063] mb-2">Measurable Results:</strong>
                                    <ul className="space-y-1 list-disc list-inside">
                                        <li>450 C-suite executive meetings</li>
                                        <li>180 qualified enterprise leads</li>
                                        <li>25% sales pipeline growth</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Case Study 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#E6007E]">
                            <h3 className="text-xl font-bold text-[#003063] mb-2">National FMCG Brand</h3>
                            <p className="text-sm text-[#E6007E] font-semibold mb-4">15-City Product Roadshow</p>
                            <div className="space-y-4 text-sm text-slate-600">
                                <p><strong className="text-[#003063]">Challenge:</strong> Execute consistent product sampling campaign across diverse tier-2 Indian markets.</p>
                                <p><strong className="text-[#003063]">Solution:</strong> Designed standardized pop-up experience zones with strategic local cultural integration.</p>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <strong className="block text-[#003063] mb-2">Measurable Results:</strong>
                                    <ul className="space-y-1 list-disc list-inside">
                                        <li>45,000+ product samples</li>
                                        <li>12,000 new retailer contacts</li>
                                        <li>35% regional sales increase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#003063] mb-6">
                            Trusted By India's Most Prestigious Brands
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-600 font-medium">
                            <span className="bg-slate-100 px-4 py-2 rounded-full">Fortune 500 Corporations</span>
                            <span className="bg-slate-100 px-4 py-2 rounded-full">High-Growth Unicorn Startups</span>
                            <span className="bg-slate-100 px-4 py-2 rounded-full">Government Organizations</span>
                            <span className="bg-slate-100 px-4 py-2 rounded-full">International Brands</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#003063] p-8 rounded-2xl text-white relative overflow-hidden">
                            <Quote className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                            <p className="text-lg italic mb-6 text-white/90">"The UpGreat Expo fundamentally transformed our exhibition strategy and ROI. Their data-driven design approach increased our lead conversion rates by 150% while simultaneously reducing our per-booth costs by 20%. Exceptional strategic partners."</p>
                            <div>
                                <div className="font-bold text-[#E6007E]">Marketing Director</div>
                                <div className="text-sm text-white/70">Leading Automotive Company</div>
                            </div>
                        </div>
                        <div className="bg-[#003063] p-8 rounded-2xl text-white relative overflow-hidden">
                            <Quote className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                            <p className="text-lg italic mb-6 text-white/90">"Absolutely professional, consistently reliable, and unwaveringly results-focused. The complimentary BTS documentation alone justified our partnership decision. The actual exhibition execution exceeded every expectation we had established."</p>
                            <div>
                                <div className="font-bold text-[#E6007E]">VP Marketing</div>
                                <div className="text-sm text-white/70">Fortune 500 Technology Company</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#003063] mb-6">
                                World-Class Design & <span className="text-[#E6007E]">Fabrication Infrastructure</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                International Standards. Indian Efficiency. Global Quality. Our 15,000 sq ft state-of-the-art manufacturing facility in Gurugram is equipped to handle projects of any scale.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[#003063] mb-2">In-House Capabilities</h4>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> Custom Woodworking</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> Metal Fabrication</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> Large-Format Printing</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> Electrical Systems</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-[#003063] mb-2">Quality & Compliance</h4>
                                    <ul className="text-sm text-slate-600 space-y-2">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> ISO 9001:2015</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> NSCI Safety Compliance</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> GRIHA Green Building</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E6007E]" /> IGBC Membership</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio_images/17.webp"
                                alt="Fabrication Infrastructure"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Solutions */}
            <section className="py-24 px-6 lg:px-12 bg-[#003063] text-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Technology-Enabled Exhibition Solutions
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Transcend traditional business card collection. Our integrated technology solutions automatically capture, qualify, score, and nurture exhibition leads.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 bg-[#E6007E] rounded-full flex items-center justify-center mb-6">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Digital Lead Capture</h3>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> QR code and NFC badge scanning</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Custom lead qualification forms</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Real-time CRM integration</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Automated follow-up sequences</li>
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-14 h-14 bg-[#E6007E] rounded-full flex items-center justify-center mb-6">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Virtual & Hybrid Capabilities</h3>
                            <ul className="space-y-3 text-white/80">
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Custom virtual booth design</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Live streaming integration</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Interactive digital networking</li>
                                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#E6007E] rounded-full" /> Detailed analytics tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Grid */}
            <ImageGrid />

            {/* Stats Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#E6007E] text-white text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to make an impact?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let's discuss your vision and build an exhibition experience that sets you apart from the competition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact-us">
                            <Button className="bg-[#003063] hover:bg-[#00224a] text-white px-8 py-4 text-lg rounded-sm shadow-lg w-full sm:w-auto">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg rounded-sm backdrop-blur-sm w-full sm:w-auto">
                                View Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
