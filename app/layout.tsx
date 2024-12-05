import './css/style.css';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { PHProvider } from './providers';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';

// Dynamically import analytics components
const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false }
);

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((mod) => mod.SpeedInsights),
  { ssr: false }
);

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const Script = dynamic(() => import('next/script'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`bg-background font-sans tracking-tight antialiased`}>
        <Script
          defer
          data-website-id="6750bc32b549dc0c44960a61"
          data-domain="carty.cc"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            {process.env.NEXT_PUBLIC_POSTHOG_KEY && <PostHogPageView />}
            <div className="flex min-h-screen flex-col overflow-hidden">
              <Header />
              {children}
              <Toaster position="bottom-right" richColors />
            </div>
          </ThemeProvider>
        </PHProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
