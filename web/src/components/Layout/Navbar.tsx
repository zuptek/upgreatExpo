"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { motion, AnimatePresence } from 'framer-motion';

// ... (navLinks and interfaces stay the same)
interface NavItem {
    label: string;
    href: string;
    subItems?: NavItem[];
}

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // 1. Add state to track if user has scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // 2. Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Links
    const links: NavItem[] = [
        {
            label: 'Solutions',
            href: '/services',
            subItems: [
                { label: 'Strategy', href: '/services/strategy' },
                { label: 'Creative', href: '/services/creative' },
                { label: 'Digital', href: '/services/digital' },
                { label: 'Event Technology', href: '/services/event-tech' },
                { label: 'Logistics', href: '/services/logistics' },
            ]
        },
        { label: 'Insights', href: '/blog' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white border-b border-gray-100 shadow-sm h-16" // Scrolled State (White)
                : "bg-transparent h-20" // Initial State (Transparent/Blue style)
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
                {/* Logo - Changes color based on scroll */}
                <Link
                    href="/"
                    className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"
                        }`}
                >
                    <img src="/assets/logo.png" alt="" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <div key={link.label} className="relative group h-full flex items-center">
                            {link.subItems && link.subItems.length > 0 ? (
                                <button
                                    className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-slate-600 hover:text-[#00529b]" : "text-white/90 hover:text-white"
                                        }`}
                                    onMouseEnter={() => setActiveDropdown(link.label)}
                                >
                                    {link.label}
                                    <ChevronDown size={14} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-slate-600 hover:text-[#00529b]" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )}

                            {/* Dropdown - Ensure it always has a white background for readability */}
                            {link.subItems && link.subItems.length > 0 && (
                                <div
                                    className={`absolute top-full left-0 pt-0 w-56 transition-all duration-200 ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="bg-white border-t-2 border-[#00529b] shadow-xl p-4 flex flex-col gap-2">
                                        {link.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="text-sm font-medium text-slate-600 hover:text-[#00529b] hover:bg-slate-50 px-3 py-2 rounded-sm transition-colors"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <Button
                        className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-[10px] h-10 px-6 rounded-sm transition-all shadow-md"
                        href="/contact"
                    >
                        Get In Touch
                    </Button>
                </div>

                {/* Mobile Menu Button - Changes color based on scroll */}
                <button
                    className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"
                        }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav - Always keep white/solid for usability */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6 max-h-[80vh] overflow-y-auto">
                            {links.map((link) => (
                                <div key={link.label} className="flex flex-col">
                                    {link.subItems && link.subItems.length > 0 ? (
                                        <>
                                            <div className="text-sm font-bold uppercase tracking-widest text-slate-900 py-2 border-b border-gray-100 mb-2">
                                                {link.label}
                                            </div>
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100 ml-1">
                                                {link.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="text-sm font-medium text-slate-600 hover:text-[#00529b] transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-[#00529b] transition-colors py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full mt-4 bg-[#E6007E] text-white rounded-none uppercase font-bold tracking-widest" href="/contact" onClick={() => setIsOpen(false)}>
                                Find Shows & Place Order
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}