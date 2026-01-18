import BestExhibitionCompany from "@/components/Home/BestExhibitionCompany";

export const metadata = {
    title: "Our Story - UpgreatExpo",
    description: "Learn about our journey, vision, and mission.",
};

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-[#003063] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/assets/event_img1.webp"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        From humble beginnings to industry leaders.
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

            {/* Best Exhibition Company Section */}
            <BestExhibitionCompany />
        </div>
    );
}
