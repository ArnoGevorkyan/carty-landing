import './css/style.css';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { PHProvider } from './providers';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

export const runtime = 'edge';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarnings
    >
      <head>
        <Script
          defer
          data-website-id="6750bc32b549dc0c44960a61"
          data-domain="carty.cc"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <PHProvider>
        <body className={`bg-background font-sans tracking-tight antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <PostHogPageView />
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />
              {children}
              <Toaster position="bottom-right" richColors />
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </PHProvider>
    </html>
  );
}
