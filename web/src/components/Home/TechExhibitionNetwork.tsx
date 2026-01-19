"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Users, CheckCircle, PlayCircle, Store, Clock, LucideIcon } from 'lucide-react';
import { Button } from '@/components/UI/Button';
import { motion, useTransform, useInView, useScroll, useMotionValue, animate } from 'framer-motion';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2 });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

interface StatCard {
    id: number;
    icon: LucideIcon;
    value?: number;
    suffix?: string;
    label: string;
    subLabel?: string;
    type?: 'counter' | 'progress';
    col: 1 | 2;
}

const statsData: StatCard[] = [
    {
        id: 0,
        icon: CheckCircle,
        value: 200,
        suffix: "+",
        label: "Successful Exhibitions",
        col: 1,
        type: 'counter'
    },
    {
        id: 1,
        icon: Users,
        value: 98,
        suffix: "%",
        label: "Client Retention",
        col: 2,
        type: 'counter'
    },
    {
        id: 2,
        icon: Clock,
        value: 50,
        suffix: "+",
        label: "Pan-India Execution",
        col: 1,
        type: 'counter'
    },
    {
        id: 3,
        icon: CheckCircle,
        label: "On-Time Delivery",
        subLabel: "Guaranteed Excellence",
        col: 2,
        type: 'progress'
    }
];

const TechExhibitionNetwork = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeCard, setActiveCard] = useState<number>(1); // Default to Client Retention (index 1)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                            <span className="text-[#191970] text-xs font-semibold tracking-wider uppercase">Why Global Brands Choose Us</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold leading-tight font-outfit text-gray-900">
                            India's Leading Exhibition Stall Designer <br />
                            <span className="text-[#191970]">& Corporate Event Management Company</span>
                        </h2>

                        <div className="text-lg font-semibold text-[#191970] font-outfit">
                            Award-Winning Exhibition Stall Design | Corporate Event Management Excellence | Pan-India Execution
                        </div>

                        <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                            Transform your trade show presence from ordinary participation into revenue-generating powerhouses. The UpGreat Expo delivers world-class exhibition booth design, strategic event planning, and measurable business outcomes across India's premier exhibition venues.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold px-8 h-12 rounded-sm shadow-[0_4px_14px_rgba(230,0,126,0.4)] transition-all"
                                href="/contact-us"
                            >
                                Request a Proposal
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-[#191970] border-[#191970] text-white hover:bg-[#191970]/90 hover:text-white h-12 px-6 rounded-sm gap-2"
                                href="/portfolio"
                            >
                                <PlayCircle size={18} />
                                View Our Work
                            </Button>
                        </div>


                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {statsData.map((card, index) => {
                            const isActive = activeCard === index;
                            const yValue = card.col === 1 ? yColumn1 : yColumn2;

                            return (
                                <motion.div
                                    key={card.id}
                                    style={{ y: isMobile ? 0 : yValue }}
                                    onMouseEnter={() => setActiveCard(index)}
                                    className={`
                                        p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden cursor-default
                                        ${isActive
                                            ? 'bg-[#E6007E] border-[#E6007E] text-white'
                                            : 'bg-white border-gray-200 text-gray-900'
                                        }
                                    `}
                                >


                                    <div className={`
                                        w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 relative z-10
                                        ${isActive
                                            ? 'bg-white/20'
                                            : 'bg-[#191970]/5 group-hover:bg-[#191970]/10'
                                        }
                                    `}>
                                        <card.icon
                                            size={20}
                                            className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#191970]'}`}
                                        />
                                    </div>

                                    {card.type === 'counter' ? (
                                        <>
                                            <h3 className={`text-3xl font-bold mb-1 relative z-10 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                                <Counter value={card.value || 0} suffix={card.suffix} />
                                            </h3>
                                            <p className={`text-sm relative z-10 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                                                {card.label}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className={`text-lg font-bold mb-1 relative z-10 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                                {card.label}
                                            </h3>
                                            <p className={`text-xs mb-3 relative z-10 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                                                {card.subLabel}
                                            </p>

                                            <div className={`w-full h-1.5 rounded-full overflow-hidden ${isActive ? 'bg-white/30' : 'bg-gray-100'}`}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '100%' }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                    className={`h-full rounded-full ${isActive ? 'bg-white' : 'bg-[#191970]'}`}
                                                />
                                            </div>
                                            <p className={`text-right text-[10px] mt-1 font-medium ${isActive ? 'text-white' : 'text-[#191970]'}`}>
                                                <Counter value={100} suffix="%" /> Success
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechExhibitionNetwork;
