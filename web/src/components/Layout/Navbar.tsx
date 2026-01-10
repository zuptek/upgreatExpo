"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

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

    const links = items || navLinks;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                    EventPro
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <div key={link.label} className="relative group">
                            {link.subItems && link.subItems.length > 0 ? (
                                <button
                                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                    onMouseEnter={() => setActiveDropdown(link.label)}
                                >
                                    {link.label}
                                    <ChevronDown size={14} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            )}

                            {/* Desktop Dropdown */}
                            {link.subItems && link.subItems.length > 0 && (
                                <div
                                    className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden p-2 flex flex-col gap-1">
                                        {link.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="text-sm px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button size="sm" href="/contact">Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4 max-h-[80vh] overflow-y-auto">
                            {links.map((link) => (
                                <div key={link.label} className="flex flex-col">
                                    {link.subItems && link.subItems.length > 0 ? (
                                        <>
                                            <div className="text-lg font-medium text-foreground py-2 border-b border-border/50 mb-2">
                                                {link.label}
                                            </div>
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-border ml-2">
                                                {link.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="text-base text-muted-foreground hover:text-primary transition-colors"
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
                                            className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full mt-4" href="/contact" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
