'use client';

import { sendGAEvent } from '@next/third-parties/google';

// Custom event tracking utilities for Google Analytics 4
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Only track in production or when explicitly enabled
  if (process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_GA_ENABLED !== 'true') {
    console.log('Analytics event (dev mode):', eventName, parameters);
    return;
  }

  try {
    sendGAEvent({
      event: eventName,
      ...parameters,
    });
  } catch (error) {
    console.error('Failed to send GA event:', error);
  }
};

// Predefined event tracking functions for common portfolio interactions
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location || 'unknown',
    });
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
    });
  },

  // Track CV downloads
  trackCvDownload: (format: string = 'pdf') => {
    trackEvent('cv_download', {
      format: format,
    });
  },

  // Track social media clicks
  trackSocialClick: (platform: string) => {
    trackEvent('social_click', {
      platform: platform,
    });
  },

  // Track section views (for scroll tracking)
  trackSectionView: (sectionName: string) => {
    trackEvent('section_view', {
      section_name: sectionName,
    });
  },

  // Track portfolio project clicks
  trackProjectClick: (projectName: string, projectType: string) => {
    trackEvent('project_click', {
      project_name: projectName,
      project_type: projectType,
    });
  },

  // Track language switching
  trackLanguageSwitch: (fromLang: string, toLang: string) => {
    trackEvent('language_switch', {
      from_language: fromLang,
      to_language: toLang,
    });
  },

  // Track contact form interactions
  trackContactInteraction: (action: 'start' | 'complete' | 'error', formType: string) => {
    trackEvent('contact_interaction', {
      action: action,
      form_type: formType,
    });
  },
};

// Hook for easy event tracking in React components
export const useAnalytics = () => {
  return analytics;
};
