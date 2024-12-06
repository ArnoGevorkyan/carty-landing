'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { SignInAlertDialog } from './ui/signin-alert-dialog';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
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
            className="mx-auto mb-8 max-w-2xl text-center text-lg text-neutral-700"
          >
            Bring the power of Shopify to Telegram with Carty. Set up in
            minutes and start selling where your customers are most active —
            chatting daily.
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <SignInAlertDialog>
              <Button
                className="bg-[#007aff] hover:opacity-90 text-[#fff]"
              >
                Create Free Store
              </Button>
            </SignInAlertDialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
