import PortfolioPageClient from '@/components/PortfolioPageClient';
import type { Metadata } from 'next';

// Specific metadata for the homepage, can override layout metadata
export const metadata: Metadata = {
  title: 'Ryan Adams | App Developer Portfolio | Home',
  description: 'Welcome to the portfolio of Ryan Adams, an innovative App Developer specializing in React, Next.js, and mobile solutions. Discover my projects and skills.',
};

export default function HomePage() {
  return <PortfolioPageClient />;
}
