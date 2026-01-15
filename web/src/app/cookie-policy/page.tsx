
import React from 'react';
import { Cookie, Shield, Settings, BarChart3, Target, Bell, Eye, Users, RefreshCw, Mail, Globe, Lock, Smartphone, Clock, MapPin, TrendingUp, Repeat, Facebook, Youtube, ExternalLink, Chrome, Compass as Safari } from 'lucide-react';

export const metadata = {
    title: "Cookie Policy - UpgreatExpo",
    description: "Complete Cookie Policy for UpgreatExpo. Learn how we use cookies to enhance your browsing experience, ensure security, and personalize content.",
};

export default function CookiePolicyPage() {
    const lastUpdated = "December 15, 2023";

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#003063] via-[#003063] to-[#001836] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="container mx-auto px-6 lg:px-12 text-center relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 mb-8 transform hover:scale-105 transition-transform duration-300">
                        <Cookie size={36} className="text-[#E6007E]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Cookie Policy
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Your guide to understanding how we use cookies and similar technologies to deliver exceptional digital experiences while protecting your privacy.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <RefreshCw size={16} />
                            <span className="text-sm font-medium">Last Updated: {lastUpdated}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Globe size={16} />
                            <span className="text-sm font-medium">GDPR & CCPA Compliant</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-8 px-6 lg:px-12 bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#what-are-cookies" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <Cookie size={18} />
                            <span className="font-medium">What Are Cookies</span>
                        </a>
                        <a href="#why-we-use" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <Target size={18} />
                            <span className="font-medium">Why We Use</span>
                        </a>
                        <a href="#cookie-types" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <BarChart3 size={18} />
                            <span className="font-medium">Cookie Types</span>
                        </a>
                        <a href="#third-party" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <Globe size={18} />
                            <span className="font-medium">Third-Party</span>
                        </a>
                        <a href="#manage-cookies" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <Settings size={18} />
                            <span className="font-medium">Manage Cookies</span>
                        </a>
                        <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#003063]/5 transition-colors text-slate-700 hover:text-[#003063]">
                            <Mail size={18} />
                            <span className="font-medium">Contact Us</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 px-6 lg:px-12">
                <div className="container mx-auto max-w-6xl">
                    {/* Introduction Card */}
                    <div className="bg-gradient-to-r from-[#003063] to-[#00458a] rounded-2xl p-8 md:p-12 mb-12 text-white shadow-xl">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/20 p-4 rounded-xl">
                                <Shield size={32} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment to Transparency</h2>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    At UpgreatExpo, we believe in complete transparency regarding data collection and usage. This comprehensive Cookie Policy explains every aspect of how we utilize cookies and similar tracking technologies to enhance your experience while visiting our digital platforms. We are committed to protecting your privacy and giving you control over your data.
                                </p>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#E6007E]" />
                                        <span className="font-medium">No Hidden Tracking</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#00C896]" />
                                        <span className="font-medium">Full Control Provided</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#FFB347]" />
                                        <span className="font-medium">Regular Policy Updates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-16">
                                {/* Section 1 */}
                                <div id="what-are-cookies" className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003063]/10 to-[#003063]/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[#003063]">1</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-[#003063]">Understanding Digital Cookies</h2>
                                            <p className="text-slate-600 mt-2">The building blocks of modern web experiences</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            Cookies are small text files (typically consisting of letters and numbers) that are stored on your device (computer, tablet, mobile phone) when you visit websites. Think of them as digital notes that websites leave on your device to remember important information about your visits and preferences.
                                        </p>

                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-[#003063] p-6 rounded-r-lg">
                                            <h3 className="text-xl font-semibold text-[#003063] mb-3">How Cookies Work in Practice</h3>
                                            <p className="text-slate-700">
                                                When you first visit UpgreatExpo, our server sends a cookie to your browser. Your browser stores this cookie with information about your visit. On subsequent visits, your browser sends the cookie back to our server, allowing us to recognize your device and remember your preferences from previous sessions.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center">
                                                        <Clock className="text-[#003063]" size={20} />
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-slate-800">Session vs Persistent</h4>
                                                </div>
                                                <p className="text-slate-600">
                                                    <strong>Session cookies</strong> are temporary and disappear when you close your browser. <strong>Persistent cookies</strong> remain on your device for a predetermined period (from minutes to years) or until manually deleted.
                                                </p>
                                            </div>

                                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center">
                                                        <Users className="text-[#003063]" size={20} />
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-slate-800">First vs Third Party</h4>
                                                </div>
                                                <p className="text-slate-600">
                                                    <strong>First-party cookies</strong> are set by UpgreatExpo directly. <strong>Third-party cookies</strong> are placed by our trusted partners to provide specific services and features.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div id="why-we-use" className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6007E]/10 to-[#E6007E]/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[#E6007E]">2</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-[#003063]">Purpose & Benefits of Cookie Usage</h2>
                                            <p className="text-slate-600 mt-2">Enhancing your digital journey with intelligent tracking</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gradient-to-br from-white to-pink-50 rounded-xl p-6 border border-pink-100">
                                            <h3 className="text-xl font-semibold text-[#003063] mb-4 flex items-center gap-2">
                                                <Target className="text-[#E6007E]" size={24} />
                                                Core Objectives
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-[#E6007E]" />
                                                        Essential Operations
                                                    </h4>
                                                    <p className="text-slate-600 text-sm">
                                                        Enable basic website functionality including secure login, shopping cart retention, form data preservation, and payment processing security.
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-[#00C896]" />
                                                        Performance Optimization
                                                    </h4>
                                                    <p className="text-slate-600 text-sm">
                                                        Monitor site performance, identify bottlenecks, reduce loading times, and ensure optimal resource delivery based on device capabilities.
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-[#FFB347]" />
                                                        Personalization
                                                    </h4>
                                                    <p className="text-slate-600 text-sm">
                                                        Remember language preferences, regional settings, accessibility options, and content recommendations based on browsing history.
                                                    </p>
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-[#003063]" />
                                                        Analytics & Insights
                                                    </h4>
                                                    <p className="text-slate-600 text-sm">
                                                        Collect aggregated usage data to understand user behavior, improve content strategy, and enhance overall user experience.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50 rounded-xl p-6">
                                            <h3 className="text-xl font-semibold text-[#003063] mb-4">Real-World Applications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#003063] flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-slate-800">Shopping Experience</h4>
                                                        <p className="text-slate-600 text-sm">
                                                            Remember items in your cart across multiple browsing sessions, save shipping addresses, and preserve payment preferences for faster checkout.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#003063] flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-slate-800">Content Personalization</h4>
                                                        <p className="text-slate-600 text-sm">
                                                            Show relevant exhibition recommendations, tailor news feeds based on interests, and remember your preferred event categories.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#003063] flex items-center justify-center flex-shrink-0 mt-1">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-slate-800">Security Enhancement</h4>
                                                        <p className="text-slate-600 text-sm">
                                                            Detect suspicious login attempts, implement fraud prevention measures, and ensure secure transmission of sensitive data.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div id="cookie-types" className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C896]/10 to-[#00C896]/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[#00C896]">3</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-[#003063]">Detailed Cookie Categories</h2>
                                            <p className="text-slate-600 mt-2">Understanding the specific types of cookies we employ</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Essential Cookies */}
                                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#003063] to-[#00458a] p-6">
                                                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                                                    <Shield size={24} />
                                                    Essential Cookies (Strictly Necessary)
                                                </h3>
                                            </div>
                                            <div className="p-6 bg-white">
                                                <p className="text-slate-700 mb-4">
                                                    These cookies are fundamental for website operation and cannot be disabled. They ensure basic functionalities and security features.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="bg-slate-50 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Authentication Cookies</h4>
                                                        <p className="text-sm text-slate-600">
                                                            Keep you logged in during your session and prevent unauthorized access to your account.
                                                        </p>
                                                    </div>
                                                    <div className="bg-slate-50 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Security Cookies</h4>
                                                        <p className="text-sm text-slate-600">
                                                            Detect and prevent fraud, cross-site request forgery, and other security threats.
                                                        </p>
                                                    </div>
                                                    <div className="bg-slate-50 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Load Balancing Cookies</h4>
                                                        <p className="text-sm text-slate-600">
                                                            Distribute network traffic across servers to maintain optimal performance.
                                                        </p>
                                                    </div>
                                                    <div className="bg-slate-50 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-slate-800 mb-2">Session State Cookies</h4>
                                                        <p className="text-sm text-slate-600">
                                                            Remember your actions and inputs as you navigate through multi-page forms.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Analytics Cookies */}
                                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#00C896] to-[#00E6A8] p-6">
                                                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                                                    <BarChart3 size={24} />
                                                    Analytics & Performance Cookies
                                                </h3>
                                            </div>
                                            <div className="p-6 bg-white">
                                                <p className="text-slate-700 mb-4">
                                                    These cookies collect anonymous information about how visitors use our site, helping us improve functionality and user experience.
                                                </p>
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium text-slate-700">Page Visit Tracking</span>
                                                        <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">Enabled by default</span>
                                                    </div>
                                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-4">
                                                        <span className="font-medium text-slate-700">User Flow Analysis</span>
                                                        <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">Enabled by default</span>
                                                    </div>
                                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-4">
                                                        <span className="font-medium text-slate-700">Error Monitoring</span>
                                                        <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">Enabled by default</span>
                                                    </div>
                                                    <div className="w-full bg-slate-200 rounded-full h-2">
                                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Functionality Cookies */}
                                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#FFB347] to-[#FFCC33] p-6">
                                                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                                                    <Settings size={24} />
                                                    Functionality & Preference Cookies
                                                </h3>
                                            </div>
                                            <div className="p-6 bg-white">
                                                <p className="text-slate-700 mb-4">
                                                    These cookies remember your choices and preferences to provide enhanced, personalized features.
                                                </p>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    <div className="text-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                                                            <Globe className="text-orange-600" size={24} />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700">Language</span>
                                                    </div>
                                                    <div className="text-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                                                            <MapPin className="text-orange-600" size={24} />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700">Region</span>
                                                    </div>
                                                    <div className="text-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                                                            <Bell className="text-orange-600" size={24} />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700">Notifications</span>
                                                    </div>
                                                    <div className="text-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                                                            <Eye className="text-orange-600" size={24} />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700">Accessibility</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Advertising Cookies */}
                                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#E6007E] to-[#FF3399] p-6">
                                                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                                                    <Target size={24} />
                                                    Advertising & Marketing Cookies
                                                </h3>
                                            </div>
                                            <div className="p-6 bg-white">
                                                <p className="text-slate-700 mb-4">
                                                    These cookies are used to make advertising more relevant to you and measure campaign effectiveness.
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                                                            <Target className="text-pink-600" size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-slate-800">Interest-Based Advertising</h4>
                                                            <p className="text-sm text-slate-600">
                                                                Display ads for exhibitions and events that match your interests based on browsing history.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                                                            <TrendingUp className="text-pink-600" size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-slate-800">Campaign Measurement</h4>
                                                            <p className="text-sm text-slate-600">
                                                                Track effectiveness of marketing campaigns and optimize ad spend.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                                                            <Repeat className="text-pink-600" size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-slate-800">Frequency Capping</h4>
                                                            <p className="text-sm text-slate-600">
                                                                Limit how many times you see the same advertisement to avoid repetition.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div id="third-party" className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-purple-600">4</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-[#003063]">Third-Party Cookies & Partners</h2>
                                            <p className="text-slate-600 mt-2">Trusted services that enhance our platform capabilities</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-700">
                                            We collaborate with industry-leading third-party services to provide additional functionality, analytics, and features. These partners may set cookies through our site to deliver their services.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-xl p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#4285F4] to-[#34A853] flex items-center justify-center">
                                                        <span className="text-white font-bold">G</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-800">Google Analytics</h3>
                                                        <p className="text-sm text-slate-600">Website analytics and insights</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm mb-4">
                                                    Provides detailed traffic analysis, user behavior patterns, and conversion tracking to help us improve site performance.
                                                </p>
                                                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1">
                                                    Opt-out available
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>

                                            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                                        <Facebook className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-800">Facebook Pixel</h3>
                                                        <p className="text-sm text-slate-600">Social media analytics</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm mb-4">
                                                    Enables social media integration, sharing capabilities, and conversion tracking for advertising campaigns.
                                                </p>
                                                <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                                                    Manage preferences
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>

                                            <div className="bg-gradient-to-br from-white to-red-50 border border-red-100 rounded-xl p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-400 to-red-500 flex items-center justify-center">
                                                        <Youtube className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-800">YouTube Embed</h3>
                                                        <p className="text-sm text-slate-600">Video content delivery</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm mb-4">
                                                    Allows embedding of exhibition videos, tutorials, and promotional content from our YouTube channel.
                                                </p>
                                                <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1">
                                                    Privacy policy
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>

                                            <div className="bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-xl p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                                        <Mail className="text-white" size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-800">Mailchimp</h3>
                                                        <p className="text-sm text-slate-600">Email marketing platform</p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm mb-4">
                                                    Manages newsletter subscriptions, event notifications, and promotional email campaigns for registered users.
                                                </p>
                                                <a href="https://mailchimp.com/legal/cookies/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1">
                                                    Cookie information
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div id="manage-cookies" className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-blue-600">5</span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-[#003063]">Cookie Management & Controls</h2>
                                            <p className="text-slate-600 mt-2">Take full control of your cookie preferences</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                                            <h3 className="text-2xl font-bold text-[#003063] mb-6 text-center">Your Control Panel</h3>

                                            <div className="space-y-6">
                                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-slate-800">Essential Cookies</h4>
                                                            <p className="text-sm text-slate-600">Required for basic site functionality</p>
                                                        </div>
                                                        <div className="relative inline-block w-12 h-6">
                                                            <input type="checkbox" className="sr-only" id="essential-toggle" checked disabled />
                                                            <label htmlFor="essential-toggle" className="block w-12 h-6 rounded-full bg-[#003063] cursor-not-allowed"></label>
                                                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600">These cookies cannot be disabled as they are necessary for the website to function properly.</p>
                                                </div>

                                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-slate-800">Analytics Cookies</h4>
                                                            <p className="text-sm text-slate-600">Help us improve website performance</p>
                                                        </div>
                                                        <div className="relative inline-block w-12 h-6">
                                                            <input type="checkbox" className="sr-only" id="analytics-toggle" defaultChecked />
                                                            <label htmlFor="analytics-toggle" className="block w-12 h-6 rounded-full bg-green-500 cursor-pointer"></label>
                                                            <div className="dot absolute left-7 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600">Allow us to collect anonymous usage data to enhance your experience.</p>
                                                </div>

                                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-slate-800">Marketing Cookies</h4>
                                                            <p className="text-sm text-slate-600">Personalize advertisements</p>
                                                        </div>
                                                        <div className="relative inline-block w-12 h-6">
                                                            <input type="checkbox" className="sr-only" id="marketing-toggle" />
                                                            <label htmlFor="marketing-toggle" className="block w-12 h-6 rounded-full bg-slate-300 cursor-pointer"></label>
                                                            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600">Enable personalized advertising based on your browsing interests.</p>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                                <button className="flex-1 bg-[#003063] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#00244a] transition-colors">
                                                    Save Preferences
                                                </button>
                                                <button className="flex-1 border border-[#003063] text-[#003063] py-3 px-6 rounded-lg font-semibold hover:bg-[#003063]/5 transition-colors">
                                                    Accept All
                                                </button>
                                                <button className="flex-1 border border-slate-300 text-slate-700 py-3 px-6 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                                                    Reject All
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                                    <Chrome className="text-blue-600" size={24} />
                                                </div>
                                                <h4 className="font-semibold text-slate-800 mb-2">Google Chrome</h4>
                                                <p className="text-sm text-slate-600 mb-3">Settings → Privacy and Security → Cookies</p>
                                                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Learn more →
                                                </a>
                                            </div>

                                            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                                                    <Safari className="text-orange-600" size={24} />
                                                </div>
                                                <h4 className="font-semibold text-slate-800 mb-2">Safari</h4>
                                                <p className="text-sm text-slate-600 mb-3">Preferences → Privacy → Manage Website Data</p>
                                                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                                                    Learn more →
                                                </a>
                                            </div>

                                            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                                    <Firefox className="text-blue-600" size={24} />
                                                </div>
                                                <h4 className="font-semibold text-slate-800 mb-2">Firefox</h4>
                                                <p className="text-sm text-slate-600 mb-3">Options → Privacy & Security → Cookies</p>
                                                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                                                    Learn more →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                {/* Cookie Duration Card */}
                                <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-6 border border-slate-200">
                                    <h3 className="text-xl font-bold text-[#003063] mb-6 flex items-center gap-2">
                                        <Clock size={20} />
                                        Cookie Duration
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-slate-700">Session Cookies</span>
                                                <span className="text-sm font-medium text-[#003063]">Browser Session</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-slate-700">24 Hours</span>
                                                <span className="text-sm font-medium text-[#003063]">Short-term</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-slate-700">30 Days</span>
                                                <span className="text-sm font-medium text-[#003063]">Medium-term</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-slate-700">1 Year+</span>
                                                <span className="text-sm font-medium text-[#003063]">Long-term</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 mt-6">
                                        Cookie durations are set based on their purpose. Essential cookies typically have shorter lifespans, while preference cookies may last longer.
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="bg-gradient-to-br from-[#003063] to-[#00458a] rounded-2xl shadow-lg p-6 text-white">
                                    <h3 className="text-xl font-bold mb-6">Cookie Statistics</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white/90">Total Cookies Used</span>
                                                <span className="font-bold">28</span>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div className="bg-[#E6007E] h-2 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white/90">First-Party Cookies</span>
                                                <span className="font-bold">18</span>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div className="bg-[#00C896] h-2 rounded-full" style={{ width: '64%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white/90">Third-Party Cookies</span>
                                                <span className="font-bold">10</span>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div className="bg-[#FFB347] h-2 rounded-full" style={{ width: '36%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white/90">Essential Cookies</span>
                                                <span className="font-bold">8</span>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div className="bg-white h-2 rounded-full" style={{ width: '29%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Card */}
                                <div id="contact" className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                                    <h3 className="text-xl font-bold text-[#003063] mb-6 flex items-center gap-2">
                                        <Mail size={20} />
                                        Need Help?
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center flex-shrink-0">
                                                <Mail className="text-[#003063]" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800">General Inquiries</h4>
                                                <a href="mailto:Info@UpGreatExpo.com" className="text-[#E6007E] hover:text-[#d50070] text-sm">
                                                    Info@UpGreatExpo.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center flex-shrink-0">
                                                <Shield className="text-[#003063]" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800">Privacy Team</h4>
                                                <a href="mailto:privacy@UpGreatExpo.com" className="text-[#E6007E] hover:text-[#d50070] text-sm">
                                                    privacy@UpGreatExpo.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#003063]/10 flex items-center justify-center flex-shrink-0">
                                                <Smartphone className="text-[#003063]" size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800">Support Hotline</h4>
                                                <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-slate-200">
                                        <h4 className="font-semibold text-slate-800 mb-3">Response Time</h4>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">General Inquiries:</span>
                                            <span className="font-medium text-green-600">24-48 hours</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm mt-2">
                                            <span className="text-slate-600">Privacy Requests:</span>
                                            <span className="font-medium text-green-600">Within 72 hours</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Update Alert */}
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                                            <Bell className="text-amber-600" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 mb-2">Policy Updates</h4>
                                            <p className="text-sm text-slate-600 mb-3">
                                                This policy was last updated on <strong>{lastUpdated}</strong>. We regularly review and update our cookie practices.
                                            </p>
                                            <button className="text-sm text-amber-700 hover:text-amber-800 font-medium">
                                                View version history →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cookie Consent Banner */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-white to-slate-50 border-t border-slate-300 p-4 shadow-2xl z-50 transform transition-transform duration-300 translate-y-0">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003063]/10 to-[#003063]/20 flex items-center justify-center flex-shrink-0">
                                    <Cookie className="text-[#003063]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">We Value Your Privacy</h3>
                                    <p className="text-slate-600">
                                        UpgreatExpo uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. You can customize your preferences at any time.
                                    </p>
                                    <div className="mt-3 flex items-center gap-4">
                                        <a href="#" className="text-[#E6007E] hover:text-[#d50070] text-sm font-medium">
                                            Learn more in our Privacy Policy
                                        </a>
                                        <span className="text-slate-400">•</span>
                                        <a href="#" className="text-[#003063] hover:text-[#00244a] text-sm font-medium">
                                            Manage Data Preferences
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                                Customize
                            </button>
                            <button className="px-6 py-3 bg-gradient-to-r from-[#003063] to-[#00458a] text-white rounded-lg hover:from-[#00244a] hover:to-[#003063] transition-all font-medium shadow-md hover:shadow-lg">
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Missing Icons Import */}

        </div>
    );
}

// Firefox icon (not available in lucide-react)
function Firefox({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4.028 8.267C3.788 6.214 4.634 4.211 6.357 2.88A9 9 0 0 1 20.142 8.267c0 4.267-2.62 8-6.356 9.733-1.5.8-3.24 1.2-4.928 1.2-1.5 0-3-.4-4.286-1.2" />
            <path d="M5.357 12.267c0 2 1.071 3.733 2.857 4.8 1.286.8 2.786 1.2 4.286 1.2 1.5 0 3-.4 4.286-1.2 1.786-1.067 2.857-2.8 2.857-4.8" />
        </svg>
    );
}