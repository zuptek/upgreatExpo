import Link from 'next/link';
import { Phone, Mail, MapPin, Calendar, ArrowRight, Instagram, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="font-sans">
            {/* Main Footer */}
            <div className="bg-black text-white pt-16 pb-6 relative overflow-hidden">

                {/* Pink Bottom Shade */}
                <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-[#E6007E] to-transparent opacity-20 pointer-events-none z-0" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">

                    {/* Top Section: Brand & Social */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/10 pb-12">
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
                            <a href="https://www.linkedin.com/company/theupgreatexpo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.instagram.com/upgreatexpo?igsh=cTNycGZueDR5YWtt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/people/Upgreat-Expo/61567059624467/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="https://x.com/upgreatexpo?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
                        {/* Column 1: Company Links */}
                        <div>
                            <h4 className="font-bold text-base mb-6 text-[#E6007E] tracking-wider">COMPANY</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                                <li><Link href="/insights/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Exhibition */}
                        <div>
                            <h4 className="font-bold text-base mb-6 text-[#E6007E] tracking-wider">EXHIBITION</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/services/exhibition-stall-design" className="hover:text-white transition-colors">Exhibition Stall Design</Link></li>
                                <li><Link href="/services/trade-show-organization" className="hover:text-white transition-colors">Trade Show Organization</Link></li>
                                <li><Link href="/services/brand-activations" className="hover:text-white transition-colors">Brand Activations</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Events */}
                        <div>
                            <h4 className="font-bold text-base mb-6 text-[#E6007E] tracking-wider">EVENTS</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/services/corporate-events" className="hover:text-white transition-colors">Corporate Events</Link></li>
                                <li><Link href="/services/product-launches" className="hover:text-white transition-colors">Product Launches</Link></li>
                                <li><Link href="/services/mice-services" className="hover:text-white transition-colors">MICE Services</Link></li>
                                <li><Link href="/services/dealer-meets" className="hover:text-white transition-colors">Dealer Meets</Link></li>
                                <li><Link href="/services/stage-design" className="hover:text-white transition-colors">Stage Design</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Resources */}
                        <div>
                            <h4 className="font-bold text-base mb-6 text-[#E6007E] tracking-wider">RESOURCES</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/insights/blog" className="hover:text-white transition-colors">Planning Guide</Link></li>
                                <li><Link href="/insights/blog" className="hover:text-white transition-colors">Design Trends</Link></li>
                                <li><Link href="/portfolio/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                                <li><Link href="/contact-us" className="hover:text-white transition-colors">FAQs</Link></li>
                                <li><Link href="/contact-us" className="hover:text-white transition-colors">Brochure</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E6007E]/20">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2 text-white">Head Office</h5>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Welldone Tech Park, Sector 48<br />
                                    Gurugram – 122018
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E6007E]/20">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2 text-white">Email & Website</h5>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    info@upgreatexpo.com<br />
                                    www.upgreatexpo.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E6007E]/20">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm mb-2 text-white">Contact</h5>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    +91 90886 55513
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Copyright */}
                    <div className="border-t border-white/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                            <p>© 2026 UpGreat World Pvt Ltd. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                                <Link href="/website-map" className="hover:text-white transition-colors">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
