"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What services does UpgreatExpo offer?",
        answer: "We offer end-to-end exhibition solutions including custom stall design & fabrication, modular systems, corporate event management, product launches, and MICE services across India and international locations."
    },
    {
        question: "Do you provide services outside of Delhi/NCR?",
        answer: "Yes, we have a strong presence across all major Indian cities including Mumbai, Bangalore, Chennai, Hyderabad, and Kolkata. We also manage international projects with our global partner network."
    },
    {
        question: "What is the typical timeline for designing and building a stall?",
        answer: "Ideally, we recommend starting the process 4-6 weeks before the event. This allows ample time for concept development, 3D rendering approvals, fabrication, and quality checks. However, we can also accommodate express timelines for urgent requirements."
    },
    {
        question: "Can you handle last-minute changes during the event?",
        answer: "Absolutely. Our on-site project management team is always present during the event to handle any unforeseen requirements or last-minute adjustments to ensure a flawless experience."
    },
    {
        question: "Do you offer rental furniture and AV equipment?",
        answer: "Yes, we provide a comprehensive range of rental furniture, high-tech AV equipment, LED walls, and lighting solutions to complement your stall design and enhance visitor engagement."
    },
    {
        question: "How do you ensure the quality of fabrication?",
        answer: "We have our own in-house manufacturing units equipped with modern machinery. Our quality control team conducts rigorous checks at every stage of production, from material selection to final assembly, ensuring a premium finish."
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
