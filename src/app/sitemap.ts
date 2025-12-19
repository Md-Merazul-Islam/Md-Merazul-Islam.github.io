import { MetadataRoute } from 'next';

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
    const categories = [
        '',
        'about',
        'skills',
        'education',
        'achievements',
        'experience',
        'projects',
        'research',
    ];

    return categories.map((cat) => ({
        url: `https://merazul.github.io/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: cat === '' || cat === 'about' ? 1 : 0.8,
    }));

}
