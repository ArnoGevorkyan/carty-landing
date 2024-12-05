// app/providers.tsx
'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip PostHog initialization if environment variables are not set
    if (
      typeof window !== 'undefined' &&
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      try {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug();
          },
          capture_pageview: false,
        });
      } catch (error) {
        // Silently handle initialization errors in production
        if (process.env.NODE_ENV === 'development') {
          console.error('PostHog initialization error:', error);
        }
      }
    }
  }, []);

  // If we're on the server or PostHog isn't initialized, just render children
  if (typeof window === 'undefined' || !posthog.__loaded) {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
