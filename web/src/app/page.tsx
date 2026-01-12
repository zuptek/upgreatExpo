"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Hero from "@/components/Home/Hero";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP implementation for the smooth text reveal on scroll
    const textElements = gsap.utils.toArray(".reveal-up");
    textElements.forEach((el: any) => {
      gsap.fromTo(el,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="text-foreground font-sans selection:bg-primary selection:text-primary-foreground">

      {/* HERO SECTION */}
      <Hero />

      {/* 3. THE "MASKED" IMAGE REVEAL (Parallax) */}
      <section className="relative py-40 px-8 md:px-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm group">
          <motion.div
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 2 }}
            className="h-full w-full"
          >
            <img
              src="/api/placeholder/1920/1080"
              alt="Event"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="reveal-up text-6xl md:text-[8vw] font-bold uppercase mix-blend-difference pointer-events-none">
              The Showcase
            </h2>
          </div>
        </div>
      </section>

      {/* 4. BRUTALIST LIST (Alternative to Cards) */}
      <section className="py-40 container">
        <div className="border-t border-white/10">
          {[
            { id: "01", name: "Corporate Galas", category: "Strategy & Execution" },
            { id: "02", name: "Tech Summits", category: "Immersive Production" },
            { id: "03", name: "Luxury Launches", category: "Bespoke Design" },
            { id: "04", name: "Global Expos", category: "Logistics" },
          ].map((item, i) => (
            <div key={i} className="group flex items-center justify-between py-12 border-b border-white/10 hover:px-8 transition-all duration-500 cursor-pointer hover:bg-white/5">
              <div className="flex items-center gap-20">
                <span className="text-sm font-mono opacity-30">{item.id}</span>
                <h3 className="text-4xl md:text-7xl font-bold uppercase italic tracking-tighter group-hover:text-purple-500 transition-colors">
                  {item.name}
                </h3>
              </div>
              <span className="hidden md:block text-xs uppercase tracking-widest opacity-40">{item.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OVERSIZED TEXT MARQUEE (GSAP Animation) */}
      <section className="py-20 overflow-hidden bg-white text-black">
        <div className="flex whitespace-nowrap text-[10vw] font-black uppercase italic leading-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-20"
          >
            <span>The UpGreat Expo • Elevate your Vision • The UpGreat Expo • Elevate your Vision •</span>
            <span>The UpGreat Expo • Elevate your Vision • The UpGreat Expo • Elevate your Vision •</span>
          </motion.div>
        </div>
      </section>

      {/* 6. CONTACT (SIMPLE & POWERFUL) */}
      <section className="h-screen flex flex-col items-center justify-center p-8">
        <h2 className="reveal-up text-center text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-20 max-w-4xl leading-tight">
          Ready to make your next event <span className="italic underline underline-offset-8 decoration-1 decoration-white/20">unforgettable?</span>
        </h2>
        <a href="mailto:hello@upgreatexpo.com" className="text-[10vw] font-black uppercase italic hover:text-blue-500 transition-colors">
          Hello@Us
        </a>
      </section>

    </div>
  );
}