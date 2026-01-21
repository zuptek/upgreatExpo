import React from 'react';
import Link from 'next/link';
import { ArrowRight, Map, FileText, Briefcase, Shield, Users } from 'lucide-react';

export const metadata = {
    title: 'Sitemap | The UpGreat Expo',
    description: 'Navigate through The UpGreat Expo website with our comprehensive sitemap.',
};

export default function SitemapPage() {
    const sections = [
        {
            title: "Main",
            icon: <Map className="w-6 h-6 text-[#E6007E]" />,
            links: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/insights/blog" },
                { label: "Contact Us", href: "/contact-us" },
            ]
        },
        {
            title: "About",
            icon: <Users className="w-6 h-6 text-[#E6007E]" />,
            links: [
                { label: "Our Story", href: "/about/our-story" },
                { label: "Team", href: "/about/team" },
                { label: "Where to Find Us", href: "/about/where-to-find-us" },
                { label: "Careers", href: "/about/careers" },
            ]
        },
        {
            title: "Services",
            icon: <Briefcase className="w-6 h-6 text-[#E6007E]" />,
            links: [
                { label: "Exhibition Stall Design", href: "/services/exhibition-stall-design" },
                { label: "Corporate Events", href: "/services/corporate-events" },
                { label: "Product Launches", href: "/services/product-launches" },
                { label: "Trade Show Organization", href: "/services/trade-show-organization" },
                { label: "MICE Services", href: "/services/mice-services" },
                { label: "Dealer Meets", href: "/services/dealer-meets" },
            ]
        },
        {
            title: "Legal & Support",
            icon: <Shield className="w-6 h-6 text-[#E6007E]" />,
            links: [
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
            ]
        }
    ];

    return (
        <main className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6 font-outfit">
                            Sitemap
                        </h1>
                        <p className="text-slate-600 text-lg">
                            An overview of the available content on our website.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                                    <div className="w-12 h-12 rounded-full bg-[#191970]/5 flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#191970] font-outfit">
                                        {section.title}
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-2 text-slate-600 hover:text-[#E6007E] transition-colors group"
                                            >
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                                                <span className="font-medium">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
