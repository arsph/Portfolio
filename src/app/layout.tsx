import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieConsent from '@/components/CookieConsent';
import { GlobalLoading } from '@/components/GlobalLoading';

export const metadata: Metadata = {
  title: 'Arsalan Parham - Portfolio',
  description: 'Arsalan Parham - Software Developer. Explore my projects, skills, and experience. Contact me for collaboration.',
  keywords: ['Frontend Developer', 'ReactJS', 'NextJS', 'TailwindCSS', 'Software Developer', 'Portfolio', 'Arsalan Parham', 'Data science', 'Web Developer'],
  authors: [{ name: 'Arsalan Parham' }],
  creator: 'Arsalan Parham',
  openGraph: {
    title: 'Arsalan Parham - Portfolio',
    description: 'Arsalan Parham - Professional Developer. Explore my projects, skills, and experience.',
    type: 'website',
    locale: 'en_US',
    // TODO: Add a URL for the deployed site
    // url: 'https://your-domain.com', 
    // TODO: Add an image for social sharing
    // images: [
    //   {
    //     url: 'https://your-domain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Arsalan Parham Portfolio',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsalan Parham - Portfolio',
    description: 'Arsalan Parham - Professional Developer. Explore my projects, skills, and experience.',
    // TODO: Add Twitter handle
    // creator: '@yourTwitterHandle', 
    // TODO: Add an image for Twitter card
    // images: ['https://your-domain.com/twitter-image.png'],
  },
  // TODO: Add a canonical URL
  //alternates: {
  //  canonical: 'https://your-domain.com',
  //  languages: {
  //    'en-US': 'https://your-domain.com/en',
  //    'de-DE': 'https://your-domain.com/de',
  //  },
  //},
  // TODO: Add manifest if it's a PWA
  // manifest: '/manifest.json', 
  icons: {
    // TODO: Add favicon
    // icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <GlobalLoading>
          {children}
        </GlobalLoading>
        <Toaster />
        <CookieConsent />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
