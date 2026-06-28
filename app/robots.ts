import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.thesocialmanch.com';

    return {
        rules: [
            {
                userAgent: '*', // Applies to all bots
                allow: '/',
                disallow: ['/api/'], // Hide internal API routes if you have any
            },
            {
                userAgent: 'GPTBot', // Specifically control AI training bots
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`, // Points the crawler to your sitemap
    };
}