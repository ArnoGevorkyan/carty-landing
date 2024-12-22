'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { videoData } from './data';
import VideoEmbed from './VideoEmbed';

export default function DesktopFeatures() {
  const [activeCard] = useState(1);
  const currentVideo = videoData.find(v => v.id === activeCard);

  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <div className="text-center">
        <h2 className="mb-2 text-center text-2xl font-semibold">
          {currentVideo?.title}
        </h2>
        <p className="mb-8 text-center text-lg text-gray-600">
          {currentVideo?.description}
        </p>
      </div>
      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            <VideoEmbed videoUrl={currentVideo?.videoUrl || ''} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
