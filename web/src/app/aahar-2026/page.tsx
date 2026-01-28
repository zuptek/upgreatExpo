"use client";

import React from 'react';
import AaharHero from '@/components/Aahar/AaharHero';
import ConsultancyShift from '@/components/Aahar/ConsultancyShift';
import SpatialEngineering from '@/components/Aahar/SpatialEngineering';
import IndustryVerticals from '@/components/Aahar/IndustryVerticals';
import InvestmentMirage from '@/components/Aahar/InvestmentMirage';
import PerformanceGuarantee from '@/components/Aahar/PerformanceGuarantee';
import UrgencySection from '@/components/Aahar/UrgencySection';
import AaharCTA from '@/components/Aahar/AaharCTA';

export default function Aahar2026Page() {
    return (
        <div className="text-foreground font-sans selection:bg-[#E6007E] selection:text-white">
            {/* 1. HERO SECTION - Authority Quadrant */}
            <AaharHero />

            {/* 2. THE CONSULTANCY SHIFT */}
            <ConsultancyShift />

            {/* 3. STRATEGIC SPATIAL ENGINEERING */}
            <SpatialEngineering />

            {/* 4. INDUSTRY VERTICAL MATRIX */}
            <IndustryVerticals />

            {/* 5. THE INVESTMENT MIRAGE */}
            <InvestmentMirage />

            {/* 6. PERFORMANCE GUARANTEE */}
            <PerformanceGuarantee />

            {/* 7. URGENCY SECTION */}
            <UrgencySection />

            {/* 8. FINAL CTA & CONTACT */}
            <AaharCTA />
        </div>
    );
}
