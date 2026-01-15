"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#F8F9FA] border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Icon */}
                        <div className="hidden md:flex shrink-0 bg-[#E9ECEF] p-3 rounded-lg">
                            <Cookie className="w-6 h-6 text-[#191970]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2 font-outfit">We Value Your Privacy</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                UpgreatExpo uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. You can customize your preferences at any time.
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-4">
                                <Link href="/privacy-policy" className="text-[#E6007E] hover:text-[#d50070] text-sm font-medium transition-colors">
                                    Learn more in our Privacy Policy
                                </Link>
                                <span className="text-slate-400 hidden sm:inline">•</span>
                                <button onClick={handleDecline} className="text-[#003063] hover:text-[#00244a] text-sm font-medium transition-colors">
                                    Manage Data Preferences
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                                Customize
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-[#003366] text-white font-medium hover:bg-[#002244] transition-colors whitespace-nowrap shadow-sm"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
