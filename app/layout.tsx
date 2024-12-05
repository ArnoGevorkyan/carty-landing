import './css/style.css';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { PHProvider } from './providers';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';

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
};

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
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
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
