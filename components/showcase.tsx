'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const testimonials = [
  {
    text: "If you've ever copy-pasted code into ChatGPT or Claude, download PearAI right now. Just a week ago I told an engineer on the Meta DevX team to check out Pear and see how far behind Meta was. I worked in mostly Hack (PHP), Python, and Javascript at Meta. My current startup requires almost all Swift iOS. PearAI has brought me from complete noob to at least Senior Engineer productivity in Swift iOS in less than a month. Finally, because I use the various LLMs mostly for coding I've canceled my Copilot, Claude, and ChatGPT subscriptions since switching, saving $30+/month.",
    author: 'Connor Clancy',
    role: 'Founder of Taste, prev 5 years @ Meta',
  },
  {
    text: "PearAI has been a great help with my side projects and learning new programming languages. What sets it apart from standard AI chat tools is its ability to understand my codebase and file context, making the development process more streamlined. It's a useful tool for developers who want contextual AI assistance while coding. I wish my company adopted an AI code editor like this.",
    author: 'Jackson Z',
    role: 'Big Tech Software Engineer, Prev. Tesla AI',
  },
  {
    text: "PearAI has transformed my workflow completely - it's like having a senior developer by my side 24/7. Whether I'm implementing AWS file storage or making architectural decisions, the '@codebase' context feature ensures precise solutions. With an amazing community always there for support, I'm shipping projects faster and with better quality. Couldn't recommend it enough for developers looking to boost their productivity.",
    author: 'Ricardo Freitas',
    role: 'Computer Science Student & Freelancer',
  },
  {
    text: "This tool has been indispensible to me. I'm currently using it in two class projects, one is an app that focuses on mental health with a chatbot that gives advice for social issues. The other is for a class where we are learning about the scrum process and we are building a website for event planning. I'm still learning all the features to become more efficient and develop a workflow, but over one weekend I was able to build 16 screens for the app's UI with working navigation and a few features, like a drawing canvas, and date/time pickers with no prior HTML experience before Friday.",
    author: 'Josh Koelker',
    role: 'Information Systems Masters Student',
  },
];

export default function Showcase() {
  return (
    <>
      {/* CTA */}
      <div className="showcase-gradient-light relative mx-auto flex min-h-[80vh] w-full max-w-full -translate-y-24 items-center justify-center sm:min-h-[120vh]">
        <div className="mt-12 flex max-w-3xl flex-col items-center px-6 text-center">
          <p className="max-w-xl text-4xl font-semibold text-black sm:text-6xl">
            Launch Your Telegram Shop Today
          </p>
          <p className="mt-4 max-w-md text-xl font-semibold text-black sm:text-3xl">
            No Coding • No Setup • Just Sales
          </p>
          <Button className="mt-10 bg-black px-20 py-4 text-sm hover:bg-black dark:hover:bg-black sm:text-base">
            <Link href="/pricing">Create Free Store</Link>
          </Button>
          <a
            href="/docs/contributors"
            className="mt-2 text-xs font-medium text-black underline decoration-dashed underline-offset-1 hover:decoration-black/20 dark:text-black"
          >
            See Demo Shop
          </a>
        </div>
      </div>

      <p className="mt-10 px-4 text-center text-sm text-gray-500">
        * For more information about how integrations are built into Carty, see{' '}
        <Link
          href="/disclaimer"
          className="text-primary-700 underline hover:text-primary-800"
        >
          here
        </Link>
        .
      </p>
    </>
  );
}
