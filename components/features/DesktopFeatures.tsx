import { useState, useRef, useEffect } from 'react';
import { videoData } from './data';

export default function DesktopFeatures() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideo = videoData[0];

  return (
    <div className="mx-auto w-full max-w-3xl py-2 lg:max-w-[1049px] px-2">
      <div className="rounded-lg bg-white p-2">
        <div className="mb-2 text-[28px] font-semibold">
          {currentVideo.title}
        </div>
        <p className="mb-2 text-lg text-gray-600">{currentVideo.description}</p>
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          muted
          playsInline
          autoPlay
          loop
          controls
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src={currentVideo.videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
