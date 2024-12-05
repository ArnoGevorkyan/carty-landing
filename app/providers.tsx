// app/providers.tsx
'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PHProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize PostHog
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !window.location.host.includes('localhost')
    ) {
      posthog.init('phc_sZdbmKIdH2qCqiGFHy079fD7766qcgFCLD9bkKeZLDA', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle pageviews manually
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
        autocapture: true,
        session_recording: {
          maskAllInputs: true,
          maskNetworkRequestFn: data => data,
        },
        loaded: posthog => {
          if (process.env.NODE_ENV === 'development') posthog.debug();
        },
      });
    }
  }, []);

  // Track pageviews
  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      let url = window.origin + pathname;
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture('$pageview', {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  if (typeof window === 'undefined') return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
