import PortfolioPageClient from '@/components/PortfolioPageClient';
import type { Metadata } from 'next';

// Specific metadata for the homepage, can override layout metadata
export const metadata: Metadata = {
  title: 'Arsalan Parham | Software Developer Portfolio',
  description: 'Welcome to the portfolio of Arsalan Parham, an innovative Software Developer specializing in Frontend development, Java Script, React, Next.js, and data science. Discover my projects and skills.',
};

export default function HomePage() {
  return <PortfolioPageClient />;
}
