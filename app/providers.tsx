// app/providers.tsx
'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: 'https://app.posthog.com',
        capture_pageview: false, // We'll handle this manually
        persistence: 'localStorage',
        loaded: posthog => {
          if (process.env.NODE_ENV === 'development') posthog.debug();
        },
      });
    }
  }, []);

  if (typeof window === 'undefined') return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
