import Link from 'next/link';
import { Phone, Mail, MapPin, Calendar, ArrowRight, Instagram, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="font-sans">
            {/* Main Footer */}
            <div className="bg-gradient-to-br from-[#0a0a2e] via-[#191970] to-[#2e001f] text-white pt-8 pb-6">
                <div className="container mx-auto px-6 lg:px-12">

                    {/* Top Section: Brand & Social */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 border-b border-white/10 pb-8">
                        {/* Brand Column */}
                        <div className="space-y-4 max-w-lg">
                            <Link href="/" className="block">
                                <img src="/assets/expoLogo.webp" alt="UpGreat Expo" width="150" height="auto" className="brightness-0 invert" />
                            </Link>
                            <div>
                                <h3 className="text-lg font-bold text-[#E6007E] mb-1">THE UPGREAT EXPO</h3>
                                <p className="text-white/90 text-sm font-medium">Taking Brands From Good to Great</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/theupgreatexpo/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Linkedin size={16} />
                            </a>
                            <a href="https://www.instagram.com/upgreatexpo?igsh=cTNycGZueDR5YWtt" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.facebook.com/people/Upgreat-Expo/61567059624467/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Youtube size={16} />
                            </a>
                            <a href="https://x.com/upgreatexpo?s=11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
                        {/* Column 1: Company Links */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-[#E6007E]">COMPANY</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">What We Do</Link></li>
                                <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Get In Touch</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Exhibition Design */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-[#E6007E]">EXHIBITION</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">Custom Stalls</Link></li>
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">Modular Systems</Link></li>
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">Double-Decker</Link></li>
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">Pavilions</Link></li>
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">3D Visualization</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Event Management */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-[#E6007E]">EVENTS</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/services/corporate-events" className="hover:text-white transition-colors">Corporate Events</Link></li>
                                <li><Link href="/services/corporate-events" className="hover:text-white transition-colors">Conferences</Link></li>
                                <li><Link href="/services/product-launches" className="hover:text-white transition-colors">Product Launches</Link></li>
                                <li><Link href="/services/trade-show-organization" className="hover:text-white transition-colors">Trade Shows</Link></li>
                                <li><Link href="/services/mice-services" className="hover:text-white transition-colors">MICE</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Resources */}
                        <div>
                            <h4 className="font-bold text-base mb-4 text-[#E6007E]">RESOURCES</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/blog" className="hover:text-white transition-colors">Planning Guide</Link></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Design Trends</Link></li>
                                <li><Link href="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">FAQs</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Brochure</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-1">Head Office</h5>
                                <p className="text-xs text-gray-400">
                                    Welldone Tech Park, Sector 48<br />
                                    Gurugram – 122018
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <Mail size={18} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-1">Email & Website</h5>
                                <p className="text-xs text-gray-400">
                                    info@upgreatexpo.com<br />
                                    www.upgreatexpo.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <Phone size={18} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-1">Contact</h5>
                                <p className="text-xs text-gray-400">
                                    +91 90886 55513
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Copyright */}
                    <div className="border-t border-white/10 pt-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                            <p>© 2026 UpGreat World Pvt Ltd. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                                <Link href="/site-map" className="hover:text-white transition-colors">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
