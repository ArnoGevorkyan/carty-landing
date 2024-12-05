// app/providers.tsx
'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.host.includes('localhost')) {
      posthog.init('phc_sZdbmKIdH2qCqiGFHy079fD7766qcgFCLD9bkKeZLDA', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: true,
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
        autocapture: true,
        session_recording: {
          maskAllInputs: true,
          maskNetworkRequests: false,
        },
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug();
        },
      });
    }
  }, []);

  if (typeof window === 'undefined') return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
