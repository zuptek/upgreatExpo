"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/UI/Button';

const projects = [
    { title: "CES 2025", category: "Technology", src: "" },
    { title: "Salesforce Dreamforce", category: "Corporate", src: "" },
    { title: "Adobe Summit", category: "Digital", src: "" },
    { title: "Google I/O", category: "Experiential", src: "" },
    { title: "TwitchCon", category: "Gaming", src: "" },
    { title: "SXSW Activation", category: "Creative", src: "" },
];

export default function WorkCarousel() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10">
                    <h2 className="text-5xl font-bold text-[#003063] uppercase tracking-tight">
                        Selected Projects
                    </h2>
                </div>
                <motion.div style={{ x }} className="flex gap-8 px-10">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative h-[60vh] w-[40vw] flex-shrink-0 overflow-hidden rounded-sm bg-gray-200">
                            <img
                                src={project.src}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">{project.category}</p>
                                <h3 className="text-3xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                    {/* Add a "View All" card at the end */}
                    <div className="flex h-[60vh] w-[20vw] flex-shrink-0 items-center justify-center bg-[#003063] text-white">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#003063]">
                            View All Projects
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
