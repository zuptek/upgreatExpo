"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Music, Mic, Camera, Utensils, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: Calendar,
        title: "Event Planning",
        description: "Full-service planning from concept to execution. We handle venues, vendors, and logistics so you can relax."
    },
    {
        icon: Music,
        title: "Entertainment",
        description: "Curating the perfect lineup of live bands, DJs, and performers to keep your guests entertained."
    },
    {
        icon: Mic,
        title: "Production",
        description: "State-of-the-art sound, lighting, and stage design to create an immersive atmosphere."
    },
    {
        icon: Camera,
        title: "Photography & Video",
        description: "Capturing every moment with professional photography and videography services."
    },
    {
        icon: Utensils,
        title: "Catering",
        description: "Exquisite culinary experiences tailored to your taste and dietary requirements."
    },
    {
        icon: Award,
        title: "Corporate Events",
        description: "Professional conferences, product launches, and team building events that impress."
    }
];

export default function ServicesList() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.service-card');

            cards.forEach((card: any, index) => {
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        },
                        delay: index % 3 * 0.1 // Stagger effect for grid rows
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="service-card p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-shadow duration-300"
                >
                    <service.icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
