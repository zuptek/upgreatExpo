"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI/Button';
import { CheckCircle, Clock, Shield, Star, Phone, Mail, User, Map, Calendar, Target, ChevronRight, Sparkles, Building, Package, Users } from 'lucide-react';
import { submitToGoogleSheets } from '@/app/actions/submitToGoogleSheets';

export default function AaharHero() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        stallSize: '',
        requirements: 'basic'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const formRef = useRef<HTMLFormElement>(null);

    // Target date: March 10, 2026
    const targetDate = new Date('2026-03-10T09:00:00').getTime();

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Use server action instead of client-side fetch
            const result = await submitToGoogleSheets(formData);

            setIsSubmitting(false);

            if (result.success) {
                setSubmitSuccess(true);
                console.log('✅ Form submitted successfully to Google Sheets');

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    stallSize: '',
                    requirements: 'basic'
                });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                setSubmitError(result.message || 'Failed to submit. Please try again.');
                console.error('❌ Form submission failed:', result.message);

                // Clear error after 5 seconds
                setTimeout(() => setSubmitError(null), 5000);
            }

        } catch (error) {
            console.error('❌ Error submitting form:', error);
            setIsSubmitting(false);
            setSubmitError('Network error. Please try again.');

            setTimeout(() => setSubmitError(null), 5000);
        }
    };

    const handleCallClick = () => {
        // This will work on mobile devices to trigger phone call
        window.location.href = 'tel:+919088655513';
    };

    return (
        <section className="relative w-full bg-gradient-to-br from-[#191970] via-[#1a1a5e] to-[#0a0a2e] pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-8 lg:px-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-[#E6007E] rounded-full blur-[180px] -mr-[35%] -mt-[35%] opacity-30" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-white rounded-full blur-[140px] -ml-[30%] -mb-[25%] opacity-15" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>


            <div className="container mx-auto max-w-7xl relative z-10">
                {/* AAHAR 2026 Banner Image with Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        {/* AAHAR 2026 Banner Image */}
                        <img
                            src="/assets/aahar-2026-banner.png"
                            alt="AAHAR 2026 - The International Food & Hospitality Fair, 10-14 March 2026, Bharat Mandapam, New Delhi"
                            className="w-full h-auto"
                        />

                        {/* Gradient Overlay for better countdown visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        {/* Countdown Timer Overlay - Bottom Right */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-gradient-to-br from-black/90 via-black/85 to-black/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 border border-white/20 shadow-2xl shadow-black/50"
                            >
                                <div className="flex items-center gap-2 md:gap-3 mb-3">
                                    <Target className="w-4 h-4 md:w-5 md:h-5 text-[#E6007E]" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm md:text-base">Event Starts In</h4>
                                        <p className="text-white/60 text-xs hidden md:block">March 10-14, 2026</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-2 md:gap-3">
                                    <div className="text-center">
                                        <div className="bg-gradient-to-b from-[#E6007E] to-[#be0068] text-white font-bold text-lg md:text-2xl p-1.5 md:p-2 rounded-lg shadow-lg">
                                            {timeLeft.days}
                                        </div>
                                        <div className="text-white/70 text-[10px] md:text-xs mt-1">DAYS</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gradient-to-b from-[#E6007E] to-[#be0068] text-white font-bold text-lg md:text-2xl p-1.5 md:p-2 rounded-lg shadow-lg">
                                            {timeLeft.hours.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-white/70 text-[10px] md:text-xs mt-1">HRS</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gradient-to-b from-[#E6007E] to-[#be0068] text-white font-bold text-lg md:text-2xl p-1.5 md:p-2 rounded-lg shadow-lg">
                                            {timeLeft.minutes.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-white/70 text-[10px] md:text-xs mt-1">MIN</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gradient-to-b from-[#E6007E] to-[#be0068] text-white font-bold text-lg md:text-2xl p-1.5 md:p-2 rounded-lg shadow-lg">
                                            {timeLeft.seconds.toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-white/70 text-[10px] md:text-xs mt-1">SEC</div>
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-white/10 hidden md:block">
                                    <p className="text-white/80 text-xs text-center">
                                        Book before March 1st for early bird discount!
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>


                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Content Column */}
                    <div className="lg:w-3/5">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8 group hover:border-[#E6007E]/50 transition-all"
                        >
                            <Sparkles className="w-5 h-5 text-[#E6007E] group-hover:rotate-12 transition-transform" />
                            <span className="text-[#E6007E] font-bold uppercase tracking-[0.2em] text-sm">
                                Premium Aahar Stall Designers Since 2019
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
                        >
                            <span className="block">Transform Your</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6007E] via-[#FF4081] to-[#FF6B9D]">
                                Aahar 2026 Presence
                            </span>
                        </motion.h1>

                        {/* Sub-Headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/85 mb-10 leading-relaxed max-w-3xl"
                        >
                            Delhi's most trusted exhibition stall designer for food & hospitality exhibitors.
                            5 years of Pragati Maidan expertise. Premium fabrication.
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                        >
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:border-[#E6007E]/30 transition-all group">
                                <div className="p-2 bg-green-500/10 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">200+</div>
                                    <div className="text-white/70 text-sm">Stalls Delivered</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:border-[#E6007E]/30 transition-all group">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Shield className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">ISO 9001</div>
                                    <div className="text-white/70 text-sm">Certified</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:border-[#E6007E]/30 transition-all group">
                                <div className="p-2 bg-yellow-500/10 rounded-lg">
                                    <Star className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">4.8★</div>
                                    <div className="text-white/70 text-sm">Rated</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <Button
                                className="bg-gradient-to-r from-[#E6007E] to-[#be0068] hover:from-[#ff0090] hover:to-[#e6007e] text-white font-bold uppercase tracking-widest text-sm h-14 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#E6007E]/50 w-full sm:w-auto group"
                                href="/get-design"
                            >
                                <span className="flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                                    Get Free 3D Design in 24 Hours
                                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                            <Button
                                onClick={handleCallClick}
                                className="bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm h-14 px-8 rounded-lg transition-all border border-white/20 backdrop-blur-sm w-full sm:w-auto group hover:border-[#E6007E]/50"
                            >
                                <span className="flex items-center justify-center">
                                    <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse transition-all" />
                                    Call Now: +91 9088655513
                                </span>
                            </Button>
                        </motion.div>

                        {/* Bottom Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 text-white/60 text-sm uppercase tracking-wider flex items-center gap-2"
                        >
                            <Calendar className="w-4 h-4" />
                            Build Your Lead-Generating Powerhouse at Pragati Maidan
                        </motion.p>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:w-2/5 lg:sticky lg:top-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl shadow-black/50 overflow-hidden"
                        >
                            {/* Form Header */}
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#E6007E] to-[#be0068] rounded-full mb-4">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {submitSuccess ? 'Thank You!' : 'Get Your Free 3D Design'}
                                </h3>
                                <p className="text-white/70">
                                    {submitSuccess
                                        ? 'Our design team will contact you within 24 hours!'
                                        : 'Fill the form below to receive your custom stall design'
                                    }
                                </p>
                            </div>

                            {/* Error Message */}
                            {submitError && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6"
                                >
                                    <p className="text-red-400 text-sm text-center">{submitError}</p>
                                </motion.div>
                            )}

                            {/* Success Message */}
                            {submitSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-2">Design Request Submitted!</h4>
                                    <p className="text-white/80 mb-4">Our team will create your 3D design and contact you within 24 hours.</p>
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                        <p className="text-white/70 text-sm">Need immediate assistance?</p>
                                        <button
                                            onClick={handleCallClick}
                                            className="text-[#E6007E] font-bold mt-2 hover:text-white transition-colors"
                                        >
                                            Call +91 9088655513
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Field */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-white/60" />
                                            <label className="block text-sm font-medium text-white/80">
                                                Your Full Name *
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30"
                                            required
                                        />
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-white/60" />
                                                <label className="block text-sm font-medium text-white/80">
                                                    Email *
                                                </label>
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-white/60" />
                                                <label className="block text-sm font-medium text-white/80">
                                                    Phone *
                                                </label>
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9876543210"
                                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Company & Stall Size */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Building className="w-4 h-4 text-white/60" />
                                            <label className="block text-sm font-medium text-white/80">
                                                Company Name *
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Package className="w-4 h-4 text-white/60" />
                                                <label className="block text-sm font-medium text-white/80">
                                                    Stall Size
                                                </label>
                                            </div>
                                            <select
                                                name="stallSize"
                                                value={formData.stallSize}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30 appearance-none"
                                            >
                                                <option value="">Select stall size</option>
                                                <option value="9-18">9-18 SQM (Small)</option>
                                                <option value="18-36">18-36 SQM (Medium)</option>
                                                <option value="36-72">36-72 SQM (Large)</option>
                                                <option value="72+">72+ SQM (X-Large)</option>
                                                <option value="custom">Custom Size</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-white/60" />
                                                <label className="block text-sm font-medium text-white/80">
                                                    Requirements
                                                </label>
                                            </div>
                                            <select
                                                name="requirements"
                                                value={formData.requirements}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E6007E] transition-all hover:border-white/30 appearance-none"
                                            >
                                                <option value="basic">Basic Stall Design</option>
                                                <option value="premium">Premium Custom Design</option>
                                                <option value="complete">Complete Turnkey Solution</option>
                                                <option value="consultation">Design Consultation</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Exhibition Name */}
                                    <div className="bg-gradient-to-r from-[#E6007E]/10 to-transparent border border-[#E6007E]/20 rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#E6007E]/20 rounded-lg">
                                                <Calendar className="w-5 h-5 text-[#E6007E]" />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">Exhibition: Aahar 2026</p>
                                                <p className="text-white/60 text-sm">Pragati Maidan, New Delhi</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#E6007E] to-[#be0068] hover:from-[#ff0090] hover:to-[#e6007e] text-white font-bold uppercase tracking-widest text-sm h-14 rounded-xl transition-all shadow-lg hover:shadow-[#E6007E]/50 group mt-2 relative overflow-hidden"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center relative z-10">
                                                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Creating Your Design...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform">
                                                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                                                GET FREE 3D DESIGN NOW
                                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        )}
                                    </Button>

                                    {/* Privacy Notice */}
                                    <p className="text-white/50 text-xs text-center mt-4">
                                        We respect your privacy. Your information is secure with us.
                                    </p>
                                </form>
                            )}

                            {/* Quick Contact */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-white/70 text-sm text-center">
                                    Need immediate assistance?
                                </p>
                                <button
                                    onClick={handleCallClick}
                                    className="flex items-center justify-center gap-2 text-white font-bold text-lg mt-2 hover:text-[#E6007E] transition-colors w-full"
                                >
                                    <Phone className="w-5 h-5" />
                                    +91 9088655513
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}