// app/providers.tsx
'use client';

import { useEffect } from 'react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initPostHog = async () => {
      if (typeof window !== 'undefined') {
        try {
          const posthog = (await import('posthog-js')).default;
          const { PostHogProvider } = await import('posthog-js/react');

          if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
              api_host: 'https://app.posthog.com',
              loaded: posthog => {
                if (process.env.NODE_ENV === 'development') posthog.debug();
              },
              capture_pageview: false,
            });
          }
        } catch (error) {
          console.warn('PostHog not initialized', error);
        }
      }
    };

    initPostHog();
  }, []);

  return <>{children}</>;
}
