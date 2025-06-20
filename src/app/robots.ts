import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // TODO: Replace 'https://your-domain.com' with the actual domain
  const sitemapUrl = process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml` : 'https://your-domain.com/sitemap.xml';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Example: if you have private pages
    },
    sitemap: sitemapUrl,
  }
}
