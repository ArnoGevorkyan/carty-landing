'use client';

import React from 'react';

interface VideoEmbedProps {
  videoUrl: string;
}

export default function VideoEmbed({ videoUrl }: VideoEmbedProps) {
  return (
    <div className="relative h-0 overflow-hidden pb-[56.25%]">
      <video
        className="absolute left-0 top-0 h-full w-full rounded-lg"
        controls={true}
        autoPlay={false}
        playsInline
        controlsList="nodownload"
        preload="auto"
        muted={false}
        loop={false}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tagg.
      </video>
    </div>
  );
}
