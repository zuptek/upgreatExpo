import { Button } from "@/components/UI/Button";

export const metadata = {
    title: "About Us - UpgreatExpo",
    description: "Learn more about our team and our mission.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/assets/event_img1.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        We Create Experiences
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Transforming ideas into unforgettable events through creativity, precision, and passion.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-[#E6007E] uppercase tracking-widest mb-4">Who We Are</h2>
                            <h3 className="text-4xl font-bold text-[#003063] mb-6">
                                Architects of Memorable Moments
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Founded in 2020, UpgreatExpo started with a simple mission: to take the stress out of event planning.
                                What began as a small team of two has grown into a full-service agency with experts in every field
                                of event management.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We believe that every event tells a story. Whether it's a corporate gala, a dream wedding, or an
                                intimate gathering, our goal is to help you tell yours in the most memorable way possible.
                            </p>
                            <div className="flex gap-4">
                                <div className="border-l-4 border-[#E6007E] pl-6">
                                    <p className="text-4xl font-bold text-[#003063]">500+</p>
                                    <p className="text-slate-500">Events Managed</p>
                                </div>
                                <div className="border-l-4 border-[#E6007E] pl-6">
                                    <p className="text-4xl font-bold text-[#003063]">50+</p>
                                    <p className="text-slate-500">Team Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src="/assets/event_img5.webp"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-slate-50 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-sm shadow-sm border-t-4 border-[#003063]">
                            <h3 className="text-3xl font-bold text-[#003063] mb-6">Our Vision</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To be the world's leading event management agency, known for our ability to transform ordinary spaces
                                into extraordinary experiences that inspire and connect people.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-sm shadow-sm border-t-4 border-[#E6007E]">
                            <h3 className="text-3xl font-bold text-[#003063] mb-6">Our Mission</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To deliver exceptional event services by combining innovative design, strategic planning, and flawless
                                execution, ensuring every client's vision is brought to life with precision and care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 lg:px-12">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-[#E6007E] uppercase tracking-widest mb-4">Why Choose Us</h2>
                        <h3 className="text-4xl font-bold text-[#003063]">
                            Excellence in Every Detail
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-[#003063]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003063] transition-colors duration-300">
                                <svg className="w-10 h-10 text-[#003063] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#003063] mb-4">Creativity</h4>
                            <p className="text-slate-600">
                                We push boundaries to deliver unique and innovative concepts for every client, ensuring your event stands out.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-[#003063]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003063] transition-colors duration-300">
                                <svg className="w-10 h-10 text-[#003063] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#003063] mb-4">Precision</h4>
                            <p className="text-slate-600">
                                We obsess over the details so you don't have to. Flawless execution is our standard, from start to finish.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="w-20 h-20 mx-auto bg-[#003063]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003063] transition-colors duration-300">
                                <svg className="w-10 h-10 text-[#003063] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-[#003063] mb-4">Passion</h4>
                            <p className="text-slate-600">
                                We love what we do, and that energy is reflected in every event we produce. Your success is our passion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#003063] text-white px-6 lg:px-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Create Something Amazing?</h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Let's work together to bring your vision to life. Contact us today to start planning your next unforgettable event.
                    </p>
                    <Button href="/contact" className="bg-[#E6007E] hover:bg-[#c4006b] text-white px-8 py-4 text-lg h-auto rounded-sm">
                        Get In Touch
                    </Button>
                </div>
            </section>
        </div>
    );
}
