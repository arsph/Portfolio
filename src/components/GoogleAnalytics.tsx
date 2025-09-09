'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Only render in production or when explicitly enabled
  if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_GA_ENABLED !== 'true') {
    return null;
  }

  return <GA gaId={measurementId} />;
}
