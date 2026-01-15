import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/UI/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the Service Data Interface
interface ServiceData {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: string;
    ctaText: string;
    subServices?: {
        title: string;
        description: string;
        features?: string[];
        image?: string;
    }[];
}

const servicesData: Record<string, ServiceData> = {
    'exhibition-stall-design': {
        title: "Exhibition Stall Design & Fabrication",
        subtitle: "Crafting World-Class Brand Environments",
        description: "From 9 sqm shell schemes to 500+ sqm island pavilions, we design and fabricate exhibition stalls that command attention and drive conversions. Our in-house fabrication facility ensures quality control, on-time delivery, and competitive pricing.",
        features: [
            "3D Design Visualization",
            "Strategic Layout Planning",
            "Premium Materials",
            "Professional Installation",
            "BTS Documentation Included"
        ],
        image: "/portfolio_images/17.webp",
        ctaText: "Explore Exhibition Stall Services",
        subServices: [
            {
                title: "Custom Wooden Exhibition Stalls",
                description: "For brands that refuse to blend in. Our custom wooden stalls are bespoke architectural statements, crafted from scratch to embody your brand's unique identity. Unlike modular systems, wood allows for limitless creativity in shape, texture, and finish.",
                features: [
                    "Unlimited Design Freedom: Curves, arches, and complex geometries.",
                    "Premium Finishes: Duco paint, laminates, glass, and acrylic integration.",
                    "Brand Exclusivity: A one-of-a-kind structure that competitors cannot replicate.",
                    "Durability: Robust structures suitable for heavy product displays."
                ],
                image: "/portfolio_images/12.webp"
            },
            {
                title: "Modular Octanorm Systems",
                description: "Smart, scalable, and sustainable. Modular systems are the perfect balance of professionalism and efficiency. Ideal for brands participating in multiple shows or those with tighter setup windows, offering a sleek, modern aesthetic without the heavy logistics of custom fabrication.",
                features: [
                    "Cost-Effective: Lower fabrication and transport costs.",
                    "Rapid Assembly: Quick setup and dismantling, saving on labor.",
                    "Eco-Friendly: Reusable components reduce waste and carbon footprint.",
                    "Scalable: Easily adjust the size and layout for different stall spaces."
                ],
                image: "/portfolio_images/6.webp"
            },
            {
                title: "Double-Decker Booths",
                description: "Dominate the floor vertically. When floor space is expensive or limited, go up. Double-decker booths not only double your usable area but also act as a massive billboard visible from across the hall, signaling industry leadership and stability.",
                features: [
                    "2x Space Utility: Ground floor for public engagement, upper deck for private meetings.",
                    "VIP Experience: Create an exclusive lounge area for high-value clients.",
                    "Maximum Visibility: Towering structures that stand out above standard stalls.",
                    "Prestige: Immediately establishes your brand as a major market player."
                ],
                image: "/portfolio_images/13.webp"
            },
            {
                title: "Island Pavilions",
                description: "Open, inviting, and immersive. An island stall (open on 4 sides) is the ultimate exhibition real estate. We design these spaces to be permeable and welcoming, ensuring that visitors can engage with your brand from any direction, maximizing footfall and flow.",
                features: [
                    "360-Degree Visibility: Branding visible from every aisle.",
                    "Optimized Traffic Flow: No dead corners; seamless movement for visitors.",
                    "Zoning Flexibility: Distinct areas for demos, reception, and networking.",
                    "High Impact: The centerpiece of any exhibition hall."
                ],
                image: "/portfolio_images/16.webp"
            }
        ]
    },
    'corporate-events': {
        title: "Corporate Event Management",
        subtitle: "Conferences | Summits | Award Ceremonies | AGMs | Executive Offsites",
        description: "Professional end-to-end event management for corporate gatherings of 50 to 5,000+ attendees. We handle venue selection, stage design, AV production, registration, catering coordination, and every detail that makes events memorable and effective.",
        features: [
            "Strategic Event Planning",
            "Comprehensive Vendor Management",
            "Technical Production",
            "Flawless Execution",
            "Post-Event Analytics & Reporting"
        ],
        image: "/portfolio_images/music-events.webp",
        ctaText: "Explore Corporate Event Services",
        subServices: [
            {
                title: "Corporate Conferences & Summits",
                description: "Transform information into inspiration. Our conference management goes beyond logistics to create knowledge-sharing platforms that educate, engage, and energize audiences. From industry thought leadership summits to internal company conferences, we ensure your message resonates.",
                features: [
                    "Content Strategy: Align sessions with business objectives and audience needs.",
                    "Speaker Management: Comprehensive support from selection to presentation delivery.",
                    "Interactive Technology: Live polling, Q&A systems, and networking apps.",
                    "Learning Retention: Post-event resource portals and knowledge reinforcement."
                ],
                image: "/portfolio_images/edited-01.webp"
            },
            {
                title: "Annual General Meetings (AGMs)",
                description: "Professional, compliant, and engaging AGMs that build shareholder confidence. We manage every detail from regulatory compliance documentation to live streaming technology, creating transparent shareholder communication channels.",
                features: [
                    "Regulatory Compliance: Complete documentation and procedural adherence.",
                    "Hybrid AGMs: Seamless integration of physical and virtual participation.",
                    "Voting Systems: Secure, transparent electronic voting solutions.",
                    "Crisis Management: Contingency planning for unexpected disruptions."
                ],
                image: "/portfolio_images/work-11.webp"
            },
            {
                title: "Award Ceremonies & Recognition Events",
                description: "Celebrate excellence in style. Our award ceremonies create unforgettable recognition experiences that motivate teams, reinforce company values, and build lasting emotional connections with your brand.",
                features: [
                    "Theme Development: Unique concepts that reflect your organizational culture.",
                    "Production Value: Broadway-quality staging, lighting, and sound design.",
                    "Nomination Management: End-to-end process from nominations to winner selection.",
                    "Digital Integration: Live streaming, social media walls, and instant winner announcements."
                ],
                image: "/portfolio_images/work-9.webp"
            },
            {
                title: "Executive Retreats & Offsites",
                description: "Strategic environments for leadership alignment. We design executive retreats that foster collaboration, strategic thinking, and team bonding in inspiring locations, free from day-to-day distractions.",
                features: [
                    "Location Scouting: Curated venues that support strategic objectives.",
                    "Agenda Design: Balanced schedules of work sessions and rejuvenation.",
                    "Team Building: Custom activities that strengthen leadership bonds.",
                    "Confidentiality: Secure environments for sensitive discussions."
                ],
                image: "/portfolio_images/work-2.webp"
            }
        ]
    },
    'trade-show-organization': {
        title: "Trade Show Organization",
        subtitle: "B2B Trade Shows | Consumer Expos | Industry Exhibitions | Virtual & Hybrid Events",
        description: "Complete trade show organization including exhibitor management, floor planning, visitor engagement systems, registration technology, and post-event analytics. We transform empty venues into thriving business marketplaces.",
        features: [
            "Exhibitor Acquisition",
            "Floor Layout Design",
            "Visitor Marketing",
            "Lead Generation Systems",
            "Post-Event ROI Analysis"
        ],
        image: "/portfolio_images/7.webp",
        ctaText: "Explore Trade Show Services",
        subServices: [
            {
                title: "B2B Trade Show Management",
                description: "Create high-value business marketplaces where industries converge. Our B2B trade shows are designed to maximize connections between exhibitors and qualified buyers, delivering measurable ROI for all stakeholders.",
                features: [
                    "Buyer Delegation Programs: Targeted invitation of qualified decision-makers.",
                    "Matchmaking Technology: AI-powered business matching algorithms.",
                    "Pre-Scheduled Meetings: Optimized appointment systems for maximum efficiency.",
                    "Industry Insights: Concurrent conference programs with relevant content."
                ],
                image: "/portfolio_images/ifsec.webp"
            },
            {
                title: "Consumer Expos & Public Exhibitions",
                description: "Mass engagement platforms that connect brands with consumers. From home decor expos to automotive shows, we create immersive brand experiences that drive footfall, product trials, and direct sales.",
                features: [
                    "Mass Marketing: Multi-channel campaigns driving public attendance.",
                    "Experience Zones: Interactive installations and product demo areas.",
                    "Ticketing Systems: Scalable solutions for high-volume entry management.",
                    "Retail Integration: On-site sales capabilities and POS systems."
                ],
                image: "/portfolio_images/IMG_6659.webp"
            },
            {
                title: "Industry-Specific Exhibitions",
                description: "Deep sector expertise for specialized markets. Whether it's medical equipment, industrial machinery, or technology solutions, we understand the unique requirements of your industry and design exhibitions accordingly.",
                features: [
                    "Sector Knowledge: Understanding of industry-specific buyer behaviors.",
                    "Special Requirements: Handling of heavy equipment, controlled environments, etc.",
                    "International Participation: Support for overseas exhibitors and visitors.",
                    "Regulatory Compliance: Adherence to industry-specific regulations and standards."
                ],
                image: "/portfolio_images/PACK-PLUS-MUMBAI.webp"
            },
            {
                title: "Virtual & Hybrid Trade Shows",
                description: "Digital marketplaces that transcend physical boundaries. Our virtual exhibition platforms offer year-round engagement, while hybrid models combine the best of physical and digital experiences.",
                features: [
                    "3D Virtual Environments: Immersive digital venues with spatial navigation.",
                    "Live Interaction: Video chat, live product demos, and virtual networking.",
                    "Analytics Dashboard: Real-time data on visitor behavior and engagement.",
                    "Content On-Demand: Extended access to conference sessions and product information."
                ],
                image: "/portfolio_images/edited-02-scaled.webp"
            }
        ]
    },
    'product-launches': {
        title: "Product Launch Experiences",
        subtitle: "Media Launches | Consumer Experiences | B2B Product Unveilings | Virtual Launches",
        description: "Create market-defining moments with product launches that generate buzz, capture media attention, and create lasting brand impressions. We specialize in experiential launches that make products unforgettable.",
        features: [
            "Launch Strategy",
            "Experience Design",
            "Media Coordination",
            "Influencer Management",
            "Post-Launch Momentum"
        ],
        image: "/portfolio_images/20220901_125003_Original-scaled.webp",
        ctaText: "Explore Product Launch Services",
        subServices: [
            {
                title: "Media Launch Events",
                description: "Generate maximum media coverage and editorial buzz. Our media launches are designed for shareability, with compelling visuals and hands-on experiences that journalists can't resist writing about.",
                features: [
                    "Press Kit Production: Professional media materials and product samples.",
                    "Media Training: Preparing spokespeople for interviews and demonstrations.",
                    "Broadcast Opportunities: Creating TV-friendly moments and soundbites.",
                    "Embargo Management: Coordinating exclusive previews and timed releases."
                ],
                image: "/portfolio_images/KIRBY-MUMBAI-scaled.webp"
            },
            {
                title: "Consumer Experience Launches",
                description: "Turn product reveals into viral consumer moments. We create Instagram-worthy launch experiences that encourage user-generated content and organic social sharing, building authentic brand advocacy.",
                features: [
                    "Influencer Collaborations: Strategic partnerships with relevant creators.",
                    "Interactive Installations: Photo opportunities and hands-on experiences.",
                    "User-Generated Content: Hashtag campaigns and share-worthy moments.",
                    "Community Building: Launch events that foster brand communities."
                ],
                image: "/portfolio_images/IMG_1098-1.webp"
            },
            {
                title: "B2B Product Unveilings",
                description: "Strategic introductions to distributors, partners, and enterprise clients. Our B2B launches focus on demonstrating ROI, competitive advantages, and technical specifications to professional audiences.",
                features: [
                    "Technical Demonstrations: Hands-on sessions for in-depth product evaluation.",
                    "Channel Partner Programs: Training and incentive structures for distributors.",
                    "ROI Calculators: Interactive tools demonstrating business value.",
                    "Enterprise Integration: Case studies showing compatibility with existing systems."
                ],
                image: "/portfolio_images/anscer.webp"
            },
            {
                title: "Virtual Launch Campaigns",
                description: "Global simultaneous reveals without geographic limitations. Our virtual launches combine live streaming with interactive elements, reaching global audiences while collecting valuable engagement data.",
                features: [
                    "Global Simulcasts: Coordinated launches across multiple time zones.",
                    "Interactive Demos: Real-time product demonstrations with audience Q&A.",
                    "Digital Press Rooms: 24/7 accessible resources for international media.",
                    "Analytics Integration: Tracking viewer engagement and interest levels."
                ],
                image: "/portfolio_images/apl.webp"
            }
        ]
    },
    'mice-services': {
        title: "MICE Services",
        subtitle: "Meetings | Incentives | Conferences | Exhibitions",
        description: "Sophisticated MICE management for corporate clients requiring multi-day programs, destination events, and seamless attendee experiences. From 50-person board meetings to 2,000-person international conferences.",
        features: [
            "Destination Selection",
            "Accommodation Management",
            "Multi-Day Coordination",
            "Incentive Programs",
            "International Logistics"
        ],
        image: "/portfolio_images/10.webp",
        ctaText: "Explore MICE Services",
        subServices: [
            {
                title: "Destination Management",
                description: "Complete destination services for national and international events. We handle everything from visa assistance and airport transfers to local cultural experiences and venue selection in any location worldwide.",
                features: [
                    "Local Expertise: On-ground teams in major destinations worldwide.",
                    "Visa Coordination: Assistance with documentation and processing.",
                    "Cultural Integration: Local experiences that add value to the event.",
                    "Risk Management: Contingency planning for international travel disruptions."
                ],
                image: "/portfolio_images/PACKEX-MUMBAI.webp"
            },
            {
                title: "Incentive Travel Programs",
                description: "Motivational experiences that drive performance. Our incentive programs reward top performers with unforgettable travel experiences that reinforce loyalty and inspire continued excellence.",
                features: [
                    "Performance Metrics: Integrating rewards with business KPIs.",
                    "Luxury Experiences: Curated high-end travel and accommodation.",
                    "Recognition Integration: Award ceremonies and special acknowledgments.",
                    "Post-Trip Engagement: Maintaining motivation after the experience."
                ],
                image: "/portfolio_images/01.webp"
            },
            {
                title: "International Conference Management",
                description: "Seamless global conferences with multi-national participation. We specialize in managing the complexities of international events, including simultaneous translation, currency management, and cross-cultural considerations.",
                features: [
                    "Multilingual Support: Simultaneous translation and localized materials.",
                    "International Logistics: Shipping, customs, and equipment compatibility.",
                    "Cross-Cultural Programming: Content and activities suitable for diverse audiences.",
                    "Time Zone Management: Scheduling considerations for global participants."
                ],
                image: "/portfolio_images/work-3.webp"
            },
            {
                title: "Exhibition Services within MICE",
                description: "Integrated exhibition components within larger MICE programs. We manage exhibition areas within conferences and meetings, creating opportunities for sponsors and partners to engage with attendees.",
                features: [
                    "Sponsor Integration: Strategic placement and visibility opportunities.",
                    "Traffic Flow Management: Ensuring exhibition areas receive optimal footfall.",
                    "Matchmaking Services: Connecting exhibitors with relevant attendees.",
                    "ROI Measurement: Tracking leads and engagement for exhibitors."
                ],
                image: "/portfolio_images/PACK-PLUS-MUMBAI-1.webp"
            }
        ]
    },
    'dealer-meets': {
        title: "Corporate Roadshows & Dealer Meets",
        subtitle: "Multi-City Brand Campaigns | Dealer Conferences | Distributor Events | Regional Engagement",
        description: "Execute pan-India roadshows with consistent quality across 10, 20, or 50+ cities. Strengthen channel relationships through professionally managed dealer meets, training programs, and recognition events.",
        features: [
            "Pan-India Coordination",
            "Centralized Management",
            "Regional Expertise",
            "Channel Engagement",
            "Performance Tracking"
        ],
        image: "/portfolio_images/9.webp",
        ctaText: "Explore Roadshow Services",
        subServices: [
            {
                title: "Multi-City Product Roadshows",
                description: "Consistent brand experiences across the country. Our roadshow management ensures uniform quality and messaging while adapting to regional nuances and logistical challenges of different locations.",
                features: [
                    "Standardization: Identical quality and experience across all locations.",
                    "Regional Customization: Adapting content to local market conditions.",
                    "Travel Logistics: Managing movement of teams and equipment between cities.",
                    "Local Partnerships: Collaborating with regional vendors and partners."
                ],
                image: "/portfolio_images/PAINT-AND-COATING-EXPO.webp"
            },
            {
                title: "Dealer Conference & Award Events",
                description: "Strengthen channel loyalty through recognition and relationship building. Our dealer events combine business updates with motivation and recognition, creating strong brand advocates in your distribution network.",
                features: [
                    "Performance Recognition: Awards for top-performing dealers and distributors.",
                    "Training Integration: Product knowledge and sales technique workshops.",
                    "Network Building: Opportunities for dealers to connect and share best practices.",
                    "Future Planning: Collaborative sessions for setting regional targets."
                ],
                image: "/portfolio_images/8.webp"
            },
            {
                title: "Distributor Engagement Programs",
                description: "Strategic initiatives for your extended sales network. We design programs that educate, motivate, and align distributors with your brand vision and business objectives.",
                features: [
                    "Channel Strategy: Aligning distributor activities with corporate goals.",
                    "Incentive Structures: Performance-based rewards and recognition systems.",
                    "Communication Platforms: Regular updates and engagement channels.",
                    "Competency Building: Training programs for distributor sales teams."
                ],
                image: "/portfolio_images/PAINT-AND-COATING-EXPO-1.webp"
            },
            {
                title: "Regional Launch Events",
                description: "Localized product introductions tailored to specific markets. We understand that different regions have unique customer behaviors and preferences, and design launch events accordingly.",
                features: [
                    "Market Research: Understanding regional customer preferences.",
                    "Local Media Engagement: Regional press and influencer partnerships.",
                    "Cultural Relevance: Adapting messaging to resonate with local audiences.",
                    "Language Customization: Materials and presentations in regional languages."
                ],
                image: "/portfolio_images/IMG_1098-1.jpeg.1"
            }
        ]
    },
    'brand-activations': {
        title: "Brand Activations & Experiential Marketing",
        subtitle: "POP Installations | Mall Activations | College Campaigns | Sampling Drives | Street Marketing",
        description: "Create memorable brand interactions at the point of purchase and beyond. Our experiential marketing campaigns drive trial, build brand love, and create tangible consumer connections that traditional advertising cannot achieve.",
        features: [
            "Consumer Engagement Design",
            "Location Scouting & Management",
            "Brand Ambassador Training",
            "ROI Measurement",
            "Social Media Amplification"
        ],
        image: "/portfolio_images/20220901_125003_Original-scaled.jpeg.1",
        ctaText: "Explore Brand Activation Services",
        subServices: [
            {
                title: "Mall Activations & In-Store Experiences",
                description: "Capture consumer attention at key retail touchpoints. Our mall activations combine entertainment with product experience, creating engaging interactions that drive immediate sales and long-term brand recall.",
                features: [
                    "Footfall Analysis: Strategic placement based on traffic patterns.",
                    "Interactive Technology: AR/VR experiences, touch screens, and digital games.",
                    "Product Sampling: Creative distribution methods that encourage trial.",
                    "Retail Integration: Point-of-sale systems and inventory management."
                ],
                image: "/portfolio_images/PACK-PLUS-MUMBAI-1.webp"
            },
            {
                title: "College & Youth Marketing Campaigns",
                description: "Connect with the next generation of consumers. We understand youth culture and create authentic brand experiences on campuses and youth hangouts that don't feel like traditional marketing.",
                features: [
                    "Campus Ambassador Programs: Peer-to-peer influence and advocacy.",
                    "Youth-Centric Content: Social media challenges and content creation.",
                    "Educational Integration: Workshops and seminars with brand alignment.",
                    "Festival Presence: Strategic participation in college fests and events."
                ],
                image: "/portfolio_images/anscer.webp"
            },
            {
                title: "Point-of-Purchase (POP) Innovations",
                description: "Transform retail spaces into brand experiences. Our POP installations go beyond standard displays to create interactive, educational, and entertaining brand touchpoints that influence purchase decisions.",
                features: [
                    "Retailer Collaboration: Programs that benefit both brand and retailer.",
                    "Space Optimization: Maximizing impact within limited retail real estate.",
                    "Technology Integration: Digital displays with real-time content updates.",
                    "Modular Design: Flexible systems adaptable to different store layouts."
                ],
                image: "/portfolio_images/ifsec.webp"
            },
            {
                title: "Street Marketing & Guerrilla Campaigns",
                description: "Unexpected brand encounters that create buzz and social sharing. Our unconventional marketing approaches surprise and delight consumers in their daily environments, generating organic conversation and media coverage.",
                features: [
                    "Urban Planning: Navigating permissions and public space regulations.",
                    "Photo-Worthy Moments: Creating Instagrammable brand interactions.",
                    "Local Relevance: Campaigns that connect with neighborhood identities.",
                    "Amplification Strategy: Maximizing reach through social and traditional media."
                ],
                image: "/portfolio_images/KIRBY-MUMBAI-scaled.webp"
            }
        ]
    }
};

const industries = [
    { name: "Technology & IT", sub: "Software, Hardware, SaaS, Telecom, Electronics" },
    { name: "Manufacturing & Industrial", sub: "Machinery, Automation, Engineering, Chemicals" },
    { name: "Healthcare & Pharma", sub: "Medical Devices, Pharmaceuticals, Hospitals, Diagnostics" },
    { name: "Banking & Finance", sub: "Banks, Insurance, Investment, Fintech, NBFC" },
    { name: "Automotive", sub: "OEMs, Component Manufacturers, EV, Aftermarket" },
    { name: "Real Estate & Construction", sub: "Developers, Architecture, Interior, Building Materials" },
    { name: "Consumer Goods", sub: "FMCG, Electronics, Fashion, Home Appliances" },
    { name: "Education & Training", sub: "Universities, Ed-Tech, Skill Development, Publishing" },
    { name: "Hospitality & Tourism", sub: "Hotels, Travel, Restaurants, Event Venues" },
    { name: "Energy & Infrastructure", sub: "Power, Renewable Energy, Oil & Gas, Utilities" },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: 'Service Not Found' };
    return {
        title: `${service.title} - UpgreatExpo`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#003063]/80 mix-blend-multiply" />
                </div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
                        {service.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    {/* Sub-Services Section (Render only if subServices exist) */}
                    {service.subServices && (
                        <div className="space-y-24 mb-24">
                            {service.subServices.map((sub, index) => (
                                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                                        <Image
                                            src={sub.image || service.image}
                                            alt={sub.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Text Side */}
                                    <div className="w-full lg:w-1/2">
                                        <h3 className="text-3xl font-bold text-[#003063] mb-6">{sub.title}</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-8">{sub.description}</p>
                                        {sub.features && (
                                            <ul className="space-y-4">
                                                {sub.features.map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <CheckCircle2 className="w-5 h-5 text-[#E6007E] mt-1 shrink-0" />
                                                        <span className="text-lg">{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] font-semibold rounded-full mb-6">
                                Our Expertise
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-6">
                                Comprehensive Solutions
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-700 text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-[#E6007E] shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact">
                                <Button className="bg-[#E6007E] hover:bg-[#C5006C] text-white px-8 py-4 text-lg rounded-sm shadow-lg">
                                    Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 px-6 lg:px-12 bg-slate-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#003063] mb-4">
                            Industries We Empower
                        </h2>
                        <p className="text-slate-600 text-lg">Trusted by 300+ Leading Brands Across Diverse Sectors</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#003063] mb-2 flex items-center gap-2">
                                    <span className="text-[#E6007E]">🎯</span> {ind.name}
                                </h3>
                                <p className="text-sm text-slate-500">{ind.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-12 bg-[#003063] text-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Ready to UpGreat Your Next Project?
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        Let's build an unforgettable experience together.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-white text-[#003063] hover:bg-gray-100 px-10 py-5 text-lg rounded-full font-bold">
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
