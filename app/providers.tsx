// app/providers.tsx
'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init('phc_sZdbmKIdH2qCqiGFHy079fD7766qcgFCLD9bkKeZLDA', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
      });
    }
  }, []);

  if (typeof window === 'undefined') return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
