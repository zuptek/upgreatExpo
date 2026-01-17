"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What are exhibition stall design costs in India?",
        answer: "Exhibition stall costs vary based on booth size, design complexity, materials, and venue location. Standard shell scheme customizations (9-18 sqm) typically range from ₹80,000-₹2,50,000. Premium custom wooden stalls (36-100 sqm) range from ₹3,00,000-₹15,00,000. Large-scale island pavilions (200+ sqm) range from ₹25,00,000-₹1 crore+. Contact our team for precise pricing based on your specific exhibition requirements and business objectives."
    },
    {
        question: "What's included in your complete exhibition stall service?",
        answer: "Every project comprehensively includes: strategic business consultation, photorealistic 3D design concepts, premium material procurement, professional fabrication, expert on-site installation, custom graphics and branding, professional lighting design, quality furniture, integrated storage solutions, complete electrical work, post-event dismantling, and complimentary professional BTS documentation (photography + videography)."
    },
    {
        question: "How far in advance should companies book exhibition services?",
        answer: "For optimal strategic planning and execution quality, we recommend booking 8-12 weeks before your target exhibition date. This timeline allows adequate time for comprehensive strategy development, design refinement iterations, quality fabrication, and organizer approvals. We accommodate rush projects (4-6 weeks) with expedited coordination and may apply additional fees."
    },
    {
        question: "Do you manage exhibition registrations and complete logistics?",
        answer: "Absolutely. We handle exhibitor registration processes, coordinate directly with event organizers and venue management, manage all material transportation logistics, obtain necessary venue approvals and permits, and orchestrate complete logistics from initial planning through final dismantling."
    },
    {
        question: "Can you execute exhibitions in tier-2 and tier-3 Indian cities?",
        answer: "Yes, extensively. We have successfully executed 500+ exhibition projects across 50+ Indian cities including numerous tier-2 and tier-3 markets. Our established pan-India execution network ensures consistent premium quality regardless of geographic location."
    },
    {
        question: "Do you offer modular reusable exhibition stall systems?",
        answer: "Yes, we specialize in Octanorm modular systems perfect for companies participating in multiple annual exhibitions. These systems are highly cost-effective, environmentally sustainable, and can be strategically reconfigured for different booth sizes, layouts, and branding requirements."
    },
    {
        question: "What differentiates The UpGreat Expo from other exhibition companies?",
        answer: "Four critical differentiators establish our market leadership: (1) Strategic business-focused approach emphasizing measurable outcomes over purely aesthetic design, (2) Complimentary professional BTS documentation included for marketing asset development, (3) Proven panIndia execution capability with centralized quality management, (4) Sustainable eco-friendly practices as standard operating procedure, not premium optional upgrades."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
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
                        <p className="pb-6 text-slate-600 leading-relaxed">
                            {answer}
                        </p>
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
                            Everything you need to know about working with UpgreatExpo. Can't find the answer you're looking for?
                        </p>
                        <a
                            href="/contact"
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
