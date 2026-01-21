import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/UI/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "The UpGreat Expo – India’s Leading Exhibition Stall Design",
    description: "Creating unforgettable experiences for your most important moments.",
};

import ScrollProgress from "@/components/UI/ScrollProgress";
import CookieConsent from "@/components/UI/CookieConsent";
import WhatsAppButton from "@/components/UI/WhatsAppButton";

// ... existing imports ...

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen`}>
                <ScrollProgress />
                <Navbar />
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <Footer />
                <ScrollToTop />
                <WhatsAppButton />
                <CookieConsent />
            </body>
        </html>
    );
}
