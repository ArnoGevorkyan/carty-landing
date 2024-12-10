'use client';

import { motion } from 'framer-motion';
import GridIllustration from './ui/grid-illustration';
import IntegrationBox from './ui/integrationBox';
import ExpandableCards from './ui/expandable-cards';
import AnimatedShinyText from './ui/animated-shiny-text';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import TelegramLogo from './ui/TelegramLogo';
import { MaintenanceAlert } from './ui/maintenance-alert';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="relative">
        {/* Background Dots */}
        <div className="absolute inset-0 mx-auto max-w-7xl bg-dot-light-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-dot-dark-black"></div>

        <div className="relative mx-auto max-w-6xl px-6 pt-8">
          {/* Top Grid Illustration */}
          <div className="absolute inset-0 w-full">
            <GridIllustration />
          </div>

          <div className="relative my-12 flex max-w-6xl flex-col items-center px-6">
            <motion.div
              className="mb-3 flex scale-95 items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
            >
              <div className="rounded-lg border border-gray-200 bg-white-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white-50 shadow-[0_0_12px_1px] shadow-primary-700/50">
                    <TelegramLogo className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-gray-500">5 Minute Setup</span>
                    <span className="font-medium text-black/60">
                      For Digital Products
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              className="relative mb-6 text-center"
            >
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                <div className="bg-gradient-to-b from-black via-black/80 to-black/40 bg-clip-text text-transparent">
                  Sell where users chat daily
                  <br />— on Telegram
                </div>
              </h1>
            </motion.div>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="mb-8 max-w-2xl text-center text-lg text-neutral-700"
            >
              Bring the power of Shopify to Telegram with Carty. Set up in
              minutes and start selling where your customers are most active —
              chatting daily.
            </motion.p>

            {/* Button */}
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
                className="rounded-md bg-[#007aff] hover:opacity-90 text-[#fff] h-12 px-10"
              >
                Create Free Store
              </MaintenanceAlert>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              className="mt-12 w-full max-w-[95%] sm:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.0,
              }}
            >
              <p className="mb-6 text-center text-lg font-medium text-neutral-800">
                Convert chats into sales: make your Telegram Mini App a Digital
                Shop
              </p>
              <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/cover-mini-app.jpg"
                  alt="Telegram Mini App Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm text-neutral-600">
                Same seamless web experience, right in Telegram Mini App
              </p>
            </motion.div>
          </div>

          {/* Bottom Grid Illustration */}
          <div className="absolute bottom-0 left-0 right-0 w-full scale-y-[-1] transform">
            <GridIllustration />
          </div>

          {/* Hero Integrations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <IntegrationBox />
          </motion.div>
        </div>
      </section>
      <ExpandableCards />
    </>
  );
}
