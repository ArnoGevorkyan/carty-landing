// app/providers.tsx
'use client';

import { useEffect, Suspense } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';

// Separate component for tracking pageviews
function PostHogPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if PostHog is initialized
    if (pathname && posthog.__loaded) {
      let url = window.origin + pathname;
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      // Ensure we're capturing the pageview
      posthog.capture('$pageview', {
        $current_url: url,
        $pathname: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init('phc_JWrphikJSKKTTJEaVgZHMQbUYiVNZ2BasoZMyKfqTb5', {
        api_host: 'https://us.i.posthog.com',
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            posthog.debug();
          }
          // Capture initial pageview
          posthog.capture('$pageview', {
            $current_url: window.location.href,
            $pathname: window.location.pathname,
          });
        },
        capture_pageview: false,
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
        autocapture: true,
        session_recording: {
          maskAllInputs: true,
          maskNetworkRequestFn: data => data,
        },
      });
    }
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageViewTracker />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}
