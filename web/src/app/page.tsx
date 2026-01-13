"use client";

import React from "react";
import Hero from "@/components/Home/Hero";
import EndToEndExecution from "@/components/Home/EndToEndExecution";
import OurProcess from "@/components/Home/OurProcess";
import UpGreatAdvantage from "@/components/Home/UpGreatAdvantage";
import WorkCarousel from "@/components/Home/WorkCarousel";
import ImageGrid from "@/components/Home/ImageGrid";
import { Button } from "@/components/UI/Button";

export default function Home() {
  return (
    <div className="text-foreground font-sans selection:bg-[#E6007E] selection:text-white">

      {/* 1. HERO SECTION (Includes Video, Subscription, Text, Feature) */}
      <Hero />

      {/* 2. END-TO-END EXECUTION */}
      <EndToEndExecution />

      {/* 3. OUR PROCESS */}
      <OurProcess />

      {/* 4. THE UPGREAT ADVANTAGE */}
      <UpGreatAdvantage />

      {/* 5. WORK CAROUSEL (Horizontal Scroll) */}
      <WorkCarousel />

      {/* 3. IMAGE GRID (Masonry Gallery) */}
      <ImageGrid />

      {/* 4. CONTACT SECTION (Freeman Style) */}
      <section className="bg-[#003063] py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to make your next event unforgettable?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Let's collaborate to create meaningful experiences that connect your brand with your audience.
          </p>
          <Button
            className="bg-[#E6007E] hover:bg-[#be0068] text-white font-bold uppercase tracking-widest text-sm px-10 h-14 rounded-sm transition-all shadow-lg"
            href="/contact"
          >
            Get In Touch
          </Button>
        </div>
      </section>

    </div>
  );
}