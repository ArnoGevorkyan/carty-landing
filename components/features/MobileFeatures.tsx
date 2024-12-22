'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { videoData } from './data';

export default function MobileFeatures() {
  const [activeCard, setActiveCard] = useState(1);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentVideo = videoData.find(v => v.id === activeCard);

  useEffect(() => {
    const duration = currentVideo?.duration || 5000;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(progress);

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setActiveCard(prev => {
          const nextCard = prev + 1;
          return nextCard > videoData.length ? 1 : nextCard;
        });
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [activeCard, currentVideo?.duration]);

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <div className="text-center">
        <h2 className="mb-2 text-center text-2xl font-semibold">
          {currentVideo?.title}
        </h2>
        <p className="mb-8 text-center text-lg text-gray-600">
          {currentVideo?.description}
        </p>
      </div>
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
              autoPlay
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
            >
              <source src={currentVideo?.videoUrl} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
