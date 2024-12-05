import Features from '@/components/features/Features';
import Hero from '@/components/hero';
import Showcase from '@/components/showcase';
import TweetSection from '@/components/TweetSection';
import { constructMetadata } from '@/lib/utils';
import { Metadata } from 'next/types';

export const metadata: Metadata = constructMetadata({
  canonical: '/',
});

export default function Home() {
  return (
    <>
      <Hero />
      <TweetSection />
      <Features />
      <Showcase />
    </>
  );
}
