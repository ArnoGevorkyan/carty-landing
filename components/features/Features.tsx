'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MobileFeatures = dynamic(() => import('./MobileFeatures'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">Loading...</div>
  ),
});

const DesktopFeatures = dynamic(() => import('./DesktopFeatures'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">Loading...</div>
  ),
});

export default function Features() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1049);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!isMounted) {
    return (
      <div className="mx-6">
        <div className="mx-auto w-full max-w-3xl py-6 lg:max-w-[1049px]">
          <div className="features-container rounded-xl bg-white p-5">
            <div className="flex items-center justify-center p-8">
              Loading...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-6">
      <div className="mx-auto w-full max-w-3xl lg:max-w-[1049px]">
        <div className="features-container rounded-xl bg-white">
          {isMobile ? <MobileFeatures /> : <DesktopFeatures />}
        </div>
      </div>
    </div>
  );
}
