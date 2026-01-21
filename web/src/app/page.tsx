"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Hero";
import { Button } from "@/components/UI/Button";

// Lazy load below-the-fold components
const OurProcess = dynamic(() => import("@/components/Home/OurProcess"));
const PanIndiaExecution = dynamic(() => import("@/components/Home/PanIndiaExecution"));
const WhyPartner = dynamic(() => import("@/components/Home/WhyPartner"));
const GetStarted = dynamic(() => import("@/components/Home/GetStarted"));
const ImageGrid = dynamic(() => import("@/components/Home/ImageGrid"));
const FAQ = dynamic(() => import("@/components/Home/FAQ"));

// Unused components (commented out in original)
// import EndToEndExecution from "@/components/Home/EndToEndExecution";
// import WorkCarousel from "@/components/Home/WorkCarousel";
// import BTSDocumentation from "@/components/Home/BTSDocumentation";

export default function Home() {
  return (
    <div className="text-foreground font-sans selection:bg-[#E6007E] selection:text-white">

      {/* 1. HERO SECTION (Includes Video, Subscription, Text, Feature) */}
      <Hero />

      {/* 3. OUR PROCESS */}
      <OurProcess />

      {/* 3.1 BTS DOCUMENTATION
      <BTSDocumentation /> */}
      {/* 2. END-TO-END EXECUTION */}
      {/* <EndToEndExecution /> */}

      {/* 2.1 PAN-INDIA EXECUTION */}
      <PanIndiaExecution />



      {/* 2.2 WHY PARTNER */}
      <WhyPartner />



      {/* 7. GET STARTED SECTION */}
      <GetStarted />



      {/* 5. WORK CAROUSEL (Horizontal Scroll)
      <WorkCarousel /> */}

      {/* 3. IMAGE GRID (Masonry Gallery) */}
      <ImageGrid />

      {/* 6. FAQ SECTION */}
      <FAQ />


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
            href="/contact-us"
          >
            Get In Touch
          </Button>
        </div>
      </section>

    </div>
  );
}