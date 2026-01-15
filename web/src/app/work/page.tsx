import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/UI/Button';
import { ArrowRight } from 'lucide-react';
import WorkCarousel from '@/components/Home/WorkCarousel';
import ImageGrid from '@/components/Home/ImageGrid';
import Counter from '@/components/UI/Counter';

const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered" },
    { value: 55, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "On-Time Delivery" },
];

export const metadata = {
    title: 'Portfolio - UpgreatExpo',
    description: 'A global showcase of award-winning exhibition designs and flawless event execution.',
};

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-[#E6007E]">Masterpieces</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        A global showcase of award-winning exhibition designs and flawless event execution for industry giants.
                    </p>
                </div>
            </section>

            {/* Crafting Visual Stories Section */}
            <section className="py-24 px-6 lg:px-12 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-6">
                                Our Philosophy
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#003063] mb-8 leading-tight">
                                Crafting Visual <span className="text-[#E6007E]">Stories</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Every brand has a unique narrative waiting to be told. We don't just build stalls; we translate your brand's essence into immersive physical environments that captivate audiences and leave a lasting impression.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                From the initial concept sketch to the final polished surface, our design process is driven by storytelling. We use light, space, and texture to guide the visitor's journey, ensuring that every interaction reinforces your message.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-[#003063] mb-1">Concept</div>
                                    <div className="text-sm text-slate-500">Strategic Ideation</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#003063] mb-1">Design</div>
                                    <div className="text-sm text-slate-500">Immersive Spaces</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#003063] mb-1">Execution</div>
                                    <div className="text-sm text-slate-500">Flawless Build</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/portfolio_images/edited-01.webp"
                                alt="Crafting Visual Stories"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Carousel */}
            <WorkCarousel />

            {/* Image Grid */}
            <ImageGrid />

            {/* Stats Section */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#E6007E] text-white text-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to make an impact?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let's discuss your vision and build an exhibition experience that sets you apart from the competition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-[#003063] hover:bg-[#00224a] text-white px-8 py-4 text-lg rounded-sm shadow-lg w-full sm:w-auto">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg rounded-sm backdrop-blur-sm w-full sm:w-auto">
                                View Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
