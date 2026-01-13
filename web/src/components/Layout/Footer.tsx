import Link from 'next/link';
import { Phone, MessageCircle, Mail } from 'lucide-react';



export default function Footer() {
    return (
        <footer className="bg-[#003063] text-white pt-16 pb-8 border-t border-white/10 font-sans">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <img src="/assets/expoLogo.webp" alt="UpGreat Expo" className="h-12 w-auto" />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            UpGreat Expo — India's platform for trade shows, business networking and brand growth. We bring together startups, MSMEs and corporates to create real business outcomes.
                        </p>
                        <p className="text-white/40 text-xs mt-4">
                            © {new Date().getFullYear()} UpGreat World Pvt Ltd. All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Products</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">The UpGreat Expo</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">UpGreat Republic</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">UpGreat Rozgar</Link></li>
                            <li><Link href="#" className="hover:text-cyan-400 transition-colors">UpGreat 360</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About us</Link></li>
                            <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Information</h3>
                        <p className="text-white/60 text-sm mb-6">
                            For booth enquiries, partnerships or general questions — reach out to us directly using the details below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="text-white/60 mt-1" size={18} />
                                <div>
                                    <p className="font-bold text-white">+91 90886 55513</p>
                                    <p className="text-xs text-white/50">Call or SMS</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MessageCircle className="text-white/60 mt-1" size={18} />
                                <div>
                                    <p className="font-bold text-white">WhatsApp Us</p>
                                    <p className="text-xs text-white/50">Quick chat & Instant replies</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="text-white/60 mt-1" size={18} />
                                <div>
                                    <p className="font-bold text-white">Info@UpGreatExpo.com</p>
                                    <p className="text-xs text-white/50">For proposals & official inquiries</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <a href="https://wa.me/919088655513" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-green-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2.002c-5.523 0-9.999 4.476-9.999 10.001 0 1.768.465 3.472 1.351 4.983L2 22l5.145-1.335a9.95 9.95 0 004.856 1.236h.001c5.523 0 9.998-4.476 9.998-10.001 0-5.525-4.475-10-9.999-10zm0 17.484a7.46 7.46 0 01-3.803-1.038l-.272-.161-3.053.792.815-2.981-.178-.289a7.461 7.461 0 01-1.164-3.99c0-4.136 3.363-7.499 7.499-7.499 2.004 0 3.886.781 5.304 2.198a7.465 7.465 0 012.197 5.302c0 4.136-3.363 7.5-7.499 7.5zm4.21-5.604c-.23-.115-1.356-.67-1.565-.746-.21-.077-.362-.115-.514.116-.151.23-.593.746-.727.9-.134.153-.268.173-.497.058-.23-.115-.973-.358-1.852-1.139-.684-.61-1.146-1.363-1.28-1.593-.134-.23-.014-.354.101-.469.104-.103.23-.268.345-.402.115-.134.153-.23.23-.384.076-.153.038-.288-.019-.403-.057-.115-.514-1.239-.704-1.697-.185-.445-.373-.385-.514-.393-.134-.007-.288-.009-.442-.009s-.403.058-.615.288c-.211.23-.805.785-.805 1.913s.825 2.219.941 2.373c.115.153 1.625 2.481 3.943 3.475.552.238.981.381 1.316.488.553.176 1.056.151 1.454.092.443-.066 1.356-.555 1.547-1.091.191-.537.191-.996.134-1.091-.058-.096-.21-.153-.44-.268z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/upgreatexpo?igsh=cTNycGZueDR5YWtt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/upgreatexpo?igsh=cTNycGZueDR5YWtt" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/company/theupgreatexpo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM7.12 20H4V9h3.12v11zM5.56 7.69c-1.002 0-1.81-.81-1.81-1.81s.808-1.81 1.81-1.81 1.81.81 1.81 1.81-.808 1.81-1.81 1.81zM20 20h-3.12v-5.604c0-1.337-.026-3.06-1.865-3.06-1.866 0-2.152 1.459-2.152 2.967V20H9.74V9h2.997v1.507h.043c.417-.79 1.435-1.62 2.95-1.62 3.156 0 3.737 2.078 3.737 4.783V20z"></path></svg>
                            </a>
                            <a href="https://x.com/upgreatexpo?s=11" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2h3.46l-7.55 8.63L22 22h-6.73l-5.26-7.45L4.22 22H.75l8.05-9.2L2 2h6.91l4.77 6.84L18.244 2zm-2.38 18h1.92L8.67 4h-1.9l9.09 16z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>
                        Registered Office: Unit No. 213-214, 2nd Floor, Welldone Tech Park, Gurgaon – 122018, Haryana, India
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
