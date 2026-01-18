"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What are exhibition stall design and fabrication costs in India?",
        answer: (
            <>
                <p className="mb-4">
                    <strong>Exhibition stall design and fabrication costs in India</strong> are typically calculated on a per-square-meter basis. Final pricing depends on booth size, design complexity, material selection, custom branding, AV integration, and venue logistics.
                </p>
                <p className="mb-2 font-semibold">Industry-standard pricing for exhibition booth design in India:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Standard modular exhibition stalls / shell scheme customization:</strong> ₹7,000 – ₹9,000 per sqm</li>
                    <li><strong>Semi-custom hybrid exhibition stands (modular + wood + graphics):</strong> ₹9,000 – ₹11,000 per sqm</li>
                    <li><strong>Premium custom wooden exhibition booths:</strong> ₹11,000 – ₹14,000 per sqm</li>
                </ul>
                <p className="mb-2 font-semibold">Sample exhibition stall budgets:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>12 sqm trade show booth → ₹84,000 – ₹1,68,000</li>
                    <li>36 sqm exhibition stand → ₹2.5L – ₹5L</li>
                    <li>100 sqm exhibition pavilion → ₹7L – ₹14L</li>
                </ul>
                <p className="mb-2 font-semibold">Factors affecting exhibition stall costs:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Design complexity and customization level</li>
                    <li>Material selection (wood, metal, acrylic, LED displays, fabric graphics)</li>
                    <li>Custom graphics, branding, and signage depth</li>
                    <li>Lighting design and audiovisual integration</li>
                    <li>Venue regulations and city-specific logistics</li>
                </ul>
                <p>
                    Contact our exhibition design experts for a customized quote aligned with your trade show objectives and marketing ROI.
                </p>
            </>
        )
    },
    {
        question: "What’s included in your turnkey exhibition stall services?",
        answer: (
            <>
                <p className="mb-4">
                    Our <strong>complete exhibition stall design and build services</strong> cover every aspect required to deliver a high-performance trade show booth—eliminating coordination gaps and execution risks.
                </p>
                <p className="mb-2 font-semibold">Comprehensive exhibition services included:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Strategic brand consultation and exhibition planning</li>
                    <li>Photorealistic 3D exhibition stall design and visualization</li>
                    <li>Premium material procurement and production management</li>
                    <li>In-house exhibition stall fabrication with quality control</li>
                    <li>Professional on-site installation and project supervision</li>
                    <li>Custom exhibition graphics and brand integration</li>
                    <li>Professional exhibition lighting design</li>
                    <li>Trade show furniture and product display systems</li>
                    <li>Integrated storage and operational solutions</li>
                    <li>Complete electrical setup and power distribution</li>
                    <li>Post-event dismantling and site handover</li>
                    <li>Complimentary behind-the-scenes photography and videography</li>
                </ul>
                <p>
                    <strong>Single-point accountability:</strong> One team manages your entire exhibition lifecycle—from concept development to teardown—so your sales team focuses on lead generation, not vendor management.
                </p>
            </>
        )
    },
    {
        question: "How far in advance should I book exhibition stall design services?",
        answer: (
            <>
                <p className="mb-4">
                    For optimal exhibition results, book your <strong>exhibition stall designer 8–12 weeks before your trade show date</strong>.
                </p>
                <p className="mb-2 font-semibold">Why this timeline matters for exhibition success:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Strategic exhibition planning aligned with marketing objectives</li>
                    <li>Multiple exhibition design iterations and refinements</li>
                    <li>Quality fabrication without rushed execution</li>
                    <li>Exhibition organizer approvals and venue compliance</li>
                    <li>Stress-free logistics coordination and installation</li>
                </ul>
                <p className="mb-2 font-semibold">Rush exhibition projects (4–6 weeks) are possible but involve:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Limited exhibition design flexibility</li>
                    <li>Compressed production schedules</li>
                    <li>Increased coordination intensity</li>
                    <li>Potential expedited service fees</li>
                </ul>
                <p>
                    Strategic brands plan exhibition participation early. Last-minute bookings increase costs and compromise quality.
                </p>
            </>
        )
    },
    {
        question: "Do you provide exhibition registration and logistics management services?",
        answer: (
            <>
                <p className="mb-4">
                    Yes. UpGreat Expo offers <strong>complete exhibition management services</strong>—handling all operational aspects so your team concentrates on business development and lead generation.
                </p>
                <p className="mb-2 font-semibold">Our exhibition logistics services include:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Exhibitor registration and documentation submission</li>
                    <li>Direct liaison with exhibition organizers and venue management</li>
                    <li>All regulatory approvals, permits, and compliance requirements</li>
                    <li>Material transportation, handling, and on-site coordination</li>
                    <li>Installation scheduling and exhibition floor management</li>
                    <li>On-ground supervision throughout build-up phase</li>
                    <li>Post-exhibition dismantling and clearance</li>
                </ul>
                <p className="mb-4">
                    <strong>Unified project management:</strong> One exhibition partner instead of juggling multiple vendors, organizers, and contractors.
                </p>
                <p>
                    Exhibition failures often result from fragmented responsibility. Our integrated approach eliminates coordination gaps and ensures flawless execution.
                </p>
            </>
        )
    },
    {
        question: "Can you execute exhibitions in tier-2 and tier-3 cities across India?",
        answer: (
            <>
                <p className="mb-4">
                    Absolutely. UpGreat Expo has successfully executed <strong>500+ exhibition projects across 50+ Indian cities</strong>, including extensive experience in tier-2 and tier-3 markets.
                </p>
                <p className="mb-4">
                    Our <strong>pan-India exhibition execution network</strong> ensures consistent design quality, fabrication standards, and operational excellence—whether your trade show is in Delhi, Mumbai, Bangalore, or emerging markets like Indore, Coimbatore, Lucknow, or Visakhapatnam.
                </p>
                <p className="mb-2 font-semibold">Benefits of our nationwide exhibition coverage:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>No compromise on materials or finishing quality</li>
                    <li>Zero dependency on unreliable local contractors</li>
                    <li>Consistent execution standards across all locations</li>
                    <li>Same accountability and project timelines nationwide</li>
                </ul>
                <p>
                    <strong>Global standards, local execution:</strong> We bring international exhibition design and fabrication quality to every Indian market.
                </p>
            </>
        )
    },
    {
        question: "Do you offer modular and reusable exhibition stand systems?",
        answer: (
            <>
                <p className="mb-4">
                    Yes. UpGreat Expo specializes in <strong>Octanorm modular exhibition systems</strong> and reusable trade show booth solutions for brands participating in multiple exhibitions annually.
                </p>
                <p className="mb-4 font-semibold">
                    Modular exhibition stands aren’t budget alternatives—they’re strategic business assets.
                </p>
                <p className="mb-2 font-semibold">Advantages of modular exhibition systems:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Reusability:</strong> Use across multiple trade shows and exhibitions</li>
                    <li><strong>Reconfigurability:</strong> Adapt to different booth sizes and layouts</li>
                    <li><strong>Faster deployment:</strong> Quick installation and dismantling</li>
                    <li><strong>Cost-efficiency:</strong> Significant savings for frequent exhibitors</li>
                    <li><strong>Sustainability:</strong> Eco-friendly exhibition solutions</li>
                    <li><strong>Brand consistency:</strong> Maintain uniform brand presentation</li>
                </ul>
                <p>
                    <strong>ROI-focused approach:</strong> If you exhibit more than twice yearly and rebuild custom stalls each time, you’re investing inefficiently. Modular systems deliver smarter returns.
                </p>
            </>
        )
    },
    {
        question: "What makes UpGreat Expo different from other exhibition stall fabricators in India?",
        answer: (
            <>
                <p className="mb-4">
                    Most exhibition companies build structures. <strong>UpGreat Expo engineers business growth tools.</strong>
                </p>
                <p className="mb-4 font-semibold">Four key differentiators:</p>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-[#191970]">1. Business-outcome focused exhibition design</p>
                        <p>We design for measurable results—lead generation, visitor engagement, brand recall—not just visual appeal. Beautiful stalls that don’t convert leads represent execution failure. We deliver business impact.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[#191970]">2. Complimentary exhibition documentation services</p>
                        <p>Every project includes professional behind-the-scenes photography and videography. You receive marketing content assets, not just a dismantled booth.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[#191970]">3. Centralized pan-India execution capability</p>
                        <p>We maintain consistent processes, quality standards, and unified project management across all Indian markets. No quality variations. No “local contractor” compromises.</p>
                    </div>
                    <div>
                        <p className="font-bold text-[#191970]">4. Sustainable exhibition practices as standard</p>
                        <p>Modular systems, reusable components, and eco-conscious materials form our baseline approach—because sustainability represents sound business strategy, not marketing positioning.</p>
                    </div>
                </div>
                <p className="mt-4">
                    <strong>Strategic partnership vs. transactional service:</strong> Most exhibition fabricators think like contractors. UpGreat Expo functions as your growth partner. That strategic difference drives superior exhibition ROI.
                </p>
            </>
        )
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-gray-200 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-[#E6007E]' : 'text-[#191970] group-hover:text-[#E6007E]'}`}>
                    {question}
                </span>
                <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#E6007E] border-[#E6007E] text-white' : 'border-gray-300 text-gray-500 group-hover:border-[#E6007E] group-hover:text-[#E6007E]'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Header */}
                    <div className="lg:w-1/3">
                        <div className="inline-block px-4 py-1 bg-[#191970]/5 text-[#191970] font-semibold rounded-full mb-6 text-sm uppercase tracking-wider">
                            Common Questions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6 font-outfit">
                            Frequently Asked <span className="text-[#E6007E]">Questions.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Everything you need to know about working with UpGreat Expo—India’s leading exhibition stall design and fabrication company. Can’t find the answer you’re looking for?
                        </p>
                        <a
                            href="/contact-us"
                            className="inline-flex items-center text-[#E6007E] font-bold hover:text-[#be0068] transition-colors border-b-2 border-[#E6007E] pb-1"
                        >
                            Contact our team directly
                        </a>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:w-2/3">
                        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
