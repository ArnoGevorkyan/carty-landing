'use client';

import { motion } from 'framer-motion';
import { MaintenanceAlert } from './ui/maintenance-alert';

export default function Showcase() {
  return (
    <div className="relative mx-auto flex min-h-[40vh] w-full max-w-full items-center justify-center">
      <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          <div className="bg-gradient-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent">
            Open Your Telegram Store in Minutes
          </div>
        </h1>
        <p className="mb-8 mt-8 max-w-2xl text-center text-lg text-neutral-700">
          Turn everyday conversations into instant sales opportunities.
        </p>
        <motion.div
          className="z-10 rounded-md p-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >
          <MaintenanceAlert
            size="lg"
            className="rounded-md bg-[#007aff] hover:opacity-90 text-[#fff] h-12 px-10 "
          >
            Create Free Store
          </MaintenanceAlert>
        </motion.div>
      </div>
    </div>
  );
}
