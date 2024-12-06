import { Metadata } from 'next';
import Home from '@/app/(default)/page';

export const metadata: Metadata = {
  title: 'Carty - Create Your Telegram Shop',
  description: 'Launch your Telegram shop in minutes. No coding required.',
  metadataBase: new URL('https://carty.cc'),
  openGraph: {
    title: 'Carty - Create Your Telegram Shop',
    description: 'Launch your Telegram shop in minutes. No coding required.',
    url: 'https://carty.cc/home',
    siteName: 'Carty',
    images: [
      {
        url: 'https://carty.cc/og-image.jpg?v=3',
        width: 1200,
        height: 630,
        alt: 'Carty - Telegram Shop Creator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carty - Create Your Telegram Shop',
    description: 'Launch your Telegram shop in minutes. No coding required.',
    images: ['https://carty.cc/og-image.jpg?v=3'],
    creator: '@cartyapp',
  },
};

export default Home;
