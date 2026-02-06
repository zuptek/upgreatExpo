"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Counter from '@/components/UI/Counter';

const clients = [
    { name: "Client 1", src: "/assets/client/image.png" },
    { name: "Client 2", src: "/assets/client/image copy.png" },
    { name: "Client 3", src: "/assets/client/image copy 2.png" },
    { name: "Client 4", src: "/assets/client/image copy 3.png" },
    { name: "Client 5", src: "/assets/client/image copy 4.png" },
    { name: "Client 6", src: "/assets/client/image copy 5.png" },
    { name: "Client 7", src: "/assets/client/image copy 6.png" },
];

export default function ClientCarousel() {
    // Duplicate the clients array for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#E6007E] font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Trusted By Industry Leaders
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[#003063] mb-4"
                    >
                        Our Clients
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Partnering with global brands to create exceptional experiences
                    </motion.p>
                </div>
            </div>

            {/* Infinite Scrolling Carousel */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-12 items-center"
                    animate={{
                        x: [0, -100 * clients.length / 3],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center group"
                        >
                            <img
                                src={client.src}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="container mx-auto px-6 mt-16"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                            <Counter value={200} suffix="+" />
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                            <Counter value={98} suffix="%" />
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">Client Retention</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                            <Counter value={50} suffix="+" />
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">Pan India Execution</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                            <Counter value={7} suffix="+" />
                        </div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide">Years Experience</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
