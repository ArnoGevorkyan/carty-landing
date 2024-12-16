import './globals.css';
import './css/style.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { PHProvider } from './providers';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import ThemeScript from './components/ThemeScript';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(mod => mod.Analytics),
  {
    ssr: false,
  }
);

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights),
  {
    ssr: false,
  }
);

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

export const metadata = {
  title: 'Carty - Create Your Telegram Shop',
  description: 'Launch your Telegram shop in minutes. No coding required.',
  metadataBase: new URL('https://carty.cc'),
  openGraph: {
    title: 'Carty - Create Your Telegram Shop',
    description: 'Launch your Telegram shop in minutes. No coding required.',
    url: 'https://carty.cc',
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} light`}
      data-theme="light"
      style={{ colorScheme: 'light' }}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light" />
        <script
          defer
          data-website-id="676012611b96f3224c234592"
          data-domain="carty-landing.vercel.app"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body className="bg-background font-sans tracking-tight antialiased light">
        <ThemeScript />
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="theme"
            themes={['light']}
          >
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />
              {children}
              <Toaster position="bottom-right" richColors />
            </div>
            <PostHogPageView />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
