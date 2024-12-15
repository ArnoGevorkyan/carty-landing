'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MobileFeatures = dynamic(() => import('./MobileFeatures'), {
  ssr: false,
});
const DesktopFeatures = dynamic(() => import('./DesktopFeatures'), {
  ssr: false,
});

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1049);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="mx-6">
      <div className="mx-auto w-full max-w-3xl py-6 lg:max-w-[1049px]">
        <div className="features-container rounded-xl bg-white p-5">
          {isMobile ? <MobileFeatures /> : <DesktopFeatures />}
        </div>
      </div>
    </div>
  );
}
