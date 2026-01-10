import { Button } from "@/components/UI/Button";
import Image from "next/image";

export const metadata = {
    title: "About Us - EventPro",
    description: "Learn more about our team and our mission.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container px-4">
                {/* Hero */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About EventPro</h1>
                    <p className="text-xl text-muted-foreground">
                        We are a team of passionate event planners dedicated to creating unforgettable experiences.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted">
                        {/* Placeholder for image - in real app would use next/image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                            Team Image Placeholder
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Founded in 2020, EventPro started with a simple mission: to take the stress out of event planning.
                            What began as a small team of two has grown into a full-service agency with experts in every field
                            of event management.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We believe that every event tells a story. Whether it's a corporate gala, a dream wedding, or an
                            intimate gathering, our goal is to help you tell yours in the most memorable way possible.
                        </p>
                        <Button href="/contact">Work With Us</Button>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-muted rounded-3xl p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Creativity</h3>
                            <p className="text-muted-foreground">
                                We push boundaries to deliver unique and innovative concepts for every client.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Precision</h3>
                            <p className="text-muted-foreground">
                                We obsess over the details so you don't have to. Flawless execution is our standard.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Passion</h3>
                            <p className="text-muted-foreground">
                                We love what we do, and that energy is reflected in every event we produce.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
