import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AAHAR 2026 Exhibition Partnership | The UpGreat Expo',
    description: 'Partner with India\'s premier exhibition consultancy for AAHAR 2026 at Pragati Maidan. Engineering high-impact presence for global food & hospitality leaders. ₹47 Crore documented revenue, 23-year zero-delay record.',
    keywords: [
        'AAHAR 2026',
        'Pragati Maidan exhibition',
        'food exhibition consultancy',
        'hospitality exhibition design',
        'exhibition booth design',
        'trade show architecture',
        'F&B exhibition partner',
        'ISO certified exhibition',
        'FSSAI compliant booth',
        'exhibition fabrication India'
    ],
    openGraph: {
        title: 'AAHAR 2026: Architectural Excellence for Food & Hospitality Leaders',
        description: 'Strategic exhibition consultancy with ₹47 Crore documented client revenue and 23-year flawless execution record.',
        type: 'website',
        locale: 'en_IN',
        siteName: 'The UpGreat Expo'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AAHAR 2026 Exhibition Partnership',
        description: 'Engineering brand authority for global food & hospitality leaders at Pragati Maidan.'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export { default } from './page';
