"use client";

import React, { useEffect, useRef } from 'react';
import { Users, CheckCircle, PlayCircle, Store, Clock } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { motion, useSpring, useTransform, useInView, useScroll } from 'framer-motion';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { duration: 2000 }); // Using duration for smooth linear-ish ease, or we can use stiffness/damping
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const TechExhibitionNetwork = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yColumn1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const yColumn2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <section ref={containerRef} className="bg-white py-20 text-gray-900 overflow-hidden relative">
            {/* Background Gradient Effect - Subtle Light */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#191970]/10 to-transparent opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-[#191970]/5 border border-[#191970]/10 rounded-full px-4 py-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#191970] animate-pulse"></span>
                            <span className="text-[#191970] text-xs font-semibold tracking-wider uppercase">Elevating Brand Experiences</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold leading-tight font-outfit text-gray-900">
                            Your Trusted Partner for <br />
                            <span className="text-[#191970]">Exhibitions & Events.</span>
                        </h2>

                        <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                            From concept to execution, we deliver world-class exhibition stalls and corporate events. Stand out with UpgreatExpo in Delhi, Mumbai, Bangalore, and beyond.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold px-8 h-12 rounded-sm shadow-[0_4px_14px_rgba(230,0,126,0.4)] transition-all"
                                href="/contact"
                            >
                                Request a Proposal
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-[#191970] border-[#191970] text-white hover:bg-[#191970]/90 hover:text-white h-12 px-6 rounded-sm gap-2"
                                href="/#work"
                            >
                                <PlayCircle size={18} />
                                View Our Work
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
                            <span>Locations:</span>
                            <div className="flex gap-2 flex-wrap">
                                {['MUMBAI', 'DELHI', 'NOIDA', 'GURGAON', 'GHAZIABAD', 'BANGALORE', 'CHENNAI', 'PUNJAB', 'KOLKATA'].map((city) => (
                                    <span key={city} className="bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Card 1: Projects */}
                        <motion.div style={{ y: yColumn1 }} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-10 h-10 rounded-lg bg-[#191970]/5 flex items-center justify-center mb-4 group-hover:bg-[#191970]/10 transition-colors">
                                <CheckCircle className="text-[#191970]" size={20} />
                            </div>
                            <h3 className="text-3xl font-bold mb-1 text-gray-900">
                                <Counter value={200} suffix="+" />
                            </h3>
                            <p className="text-gray-500 text-sm">Projects Delivered</p>
                        </motion.div>

                        {/* Card 2: Happy Clients (Pink) - Kept dark/colored for contrast */}
                        <motion.div style={{ y: yColumn2 }} className="bg-[#E6007E] p-6 rounded-2xl border border-[#E6007E] shadow-lg hover:shadow-xl transition-all text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Users size={64} />
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4 relative z-10">
                                <Users className="text-white" size={20} />
                            </div>
                            <h3 className="text-3xl font-bold mb-1 relative z-10">
                                <Counter value={55} suffix="+" />
                            </h3>
                            <p className="text-white/90 text-sm relative z-10">Happy Clients</p>
                        </motion.div>

                        {/* Card 3: Experience */}
                        <motion.div style={{ y: yColumn1 }} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center mb-4 group-hover:bg-pink-100 transition-colors">
                                <Clock className="text-[#E6007E]" size={20} />
                            </div>
                            <h3 className="text-3xl font-bold mb-1 text-gray-900">
                                <Counter value={5} suffix="+" />
                            </h3>
                            <p className="text-gray-500 text-sm">Years of Experience</p>
                        </motion.div>

                        {/* Card 4: On-Time Delivery */}
                        <motion.div style={{ y: yColumn2 }} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-10 h-10 rounded-lg bg-[#191970]/5 flex items-center justify-center mb-4 group-hover:bg-[#191970]/10 transition-colors">
                                <CheckCircle className="text-[#191970]" size={20} />
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-gray-900">On-Time Delivery</h3>
                            <p className="text-gray-500 text-xs mb-3">Guaranteed Excellence</p>

                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="bg-[#191970] h-full rounded-full"
                                />
                            </div>
                            <p className="text-right text-[#191970] text-[10px] mt-1 font-medium">
                                <Counter value={100} suffix="%" /> Success
                            </p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechExhibitionNetwork;
