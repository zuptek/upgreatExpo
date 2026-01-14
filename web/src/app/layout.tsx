import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/UI/ScrollToTop";

import { client } from "@/lib/sanity";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "UpgreatExpo - Professional Event Management",
    description: "Creating unforgettable experiences for your most important moments.",
};

async function getNavigation() {
    try {
        const query = `*[_type == "navigation"][0] {
            items[]{
                label,
                type,
                externalUrl,
                "pageSlug": page->slug.current,
                subItems[]{
                    label,
                    type,
                    externalUrl,
                    "pageSlug": page->slug.current
                }
            }
        }`;
        const data = await client.fetch(query);

        if (!data || !data.items) return [];

        return data.items.map((item: any) => ({
            label: item.label,
            href: item.type === 'external' ? item.externalUrl : `/${item.pageSlug || ''}`,
            subItems: item.subItems?.map((subItem: any) => ({
                label: subItem.label,
                href: subItem.type === 'external' ? subItem.externalUrl : `/${subItem.pageSlug || ''}`,
            }))
        }));
    } catch (error) {
        console.error("Error fetching navigation:", error);
        return [];
    }
}

import ScrollProgress from "@/components/UI/ScrollProgress";

// ... existing imports ...

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navItems = await getNavigation();

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen`}>
                <ScrollProgress />
                <Navbar items={navItems.length > 0 ? navItems : undefined} />
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
