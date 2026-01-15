import Link from 'next/link';
import { Phone, Mail, MapPin, Calendar, ArrowRight, Instagram, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="font-sans">
            {/* 1. Pre-Footer: Sponsorship / Join Us */}

            {/* 2. Main Footer */}
            <div className="bg-gradient-to-br from-[#0a0a2e] via-[#191970] to-[#2e001f] text-white pt-20 pb-10">
                <div className="container mx-auto px-6 lg:px-12">

                    {/* Top Section: Brand & Links */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">

                        {/* Brand Column (Left) */}
                        <div className="lg:col-span-5 space-y-8">
                            <Link href="/" className="block">
                                <img src="/assets/expoLogo.webp" alt="UpGreat Expo" className="h-10 w-auto brightness-0 invert" />
                            </Link>
                            <div className="max-w-md">
                                <h3 className="text-2xl font-bold text-[#E6007E] mb-2">UPGREAT EXPO 2025</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    India's premier B2B trade platform connecting global buyers and sellers. Join 20,000+ professionals from 120+ countries for exceptional networking and business opportunities.
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/people/Upgreat-Expo/61567059624467/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/upgreatexpo?igsh=cTNycGZueDR5YWtt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://x.com/upgreatexpo?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                    <Twitter size={18} />
                                </a>
                                <a href="https://www.linkedin.com/company/theupgreatexpo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6007E] transition-colors">
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Links Columns (Right) */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-6">Partner Companies</h4>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li><Link href="#" className="hover:text-[#E6007E] transition-colors">The UpGreat Expo</Link></li>
                                    <li><Link href="#" className="hover:text-[#E6007E] transition-colors">UpGreat Republic</Link></li>
                                    <li><Link href="#" className="hover:text-[#E6007E] transition-colors">UpGreat Rozgar</Link></li>
                                    <li><Link href="#" className="hover:text-[#E6007E] transition-colors">UpGreat 360</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-6">Company</h4>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li><Link href="/about" className="hover:text-[#E6007E] transition-colors">About us</Link></li>
                                    <li><Link href="/careers" className="hover:text-[#E6007E] transition-colors">Careers</Link></li>
                                    <li><Link href="/contact" className="hover:text-[#E6007E] transition-colors">Contact</Link></li>
                                    <li><Link href="/privacy-policy" className="hover:text-[#E6007E] transition-colors">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section: Contact Info Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">Venue</h5>
                                <p className="text-sm text-gray-400">
                                    Unit No. 213-214, 2nd Floor, Welldone Tech Park, Gurgaon – 122018
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">Dates</h5>
                                <p className="text-sm text-gray-400">
                                    Upcoming Events 2025<br />
                                    Check schedule
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">Contact</h5>
                                <p className="text-sm text-gray-400">
                                    +91 90886 55513
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h5 className="font-bold mb-1">Email</h5>
                                <p className="text-sm text-gray-400">
                                    Info@UpGreatExpo.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Copyright */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} UpGreat World Pvt Ltd. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
