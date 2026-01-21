import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.upgreatexpo.com';

    const routes = [
        '',
        '/about',
        '/about/our-story',
        '/about/team',
        '/about/where-to-find-us',
        '/about/careers',
        '/services',
        '/services/exhibition-stall-design',
        '/services/corporate-events',
        '/services/product-launches',
        '/services/trade-show-organization',
        '/services/mice-services',
        '/services/dealer-meets',
        '/portfolio',
        '/insights/blog',
        '/contact-us',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/disclaimer',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
