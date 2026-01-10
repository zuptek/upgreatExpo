import ServicesList from "@/components/Services/ServicesList";

export const metadata = {
    title: "Our Services - UpgreatExpo",
    description: "Explore our comprehensive event management services.",
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground">
                        We offer a wide range of services to ensure your event is nothing short of spectacular.
                    </p>
                </div>

                <ServicesList />
            </div>
        </div>
    );
}
