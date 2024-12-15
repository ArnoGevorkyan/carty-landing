import { constructMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = constructMetadata({
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  canonical: '/404',
});

export default function Custom404() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          404
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Sorry, we couldn't find the page you're looking for. The page might
          have been moved or deleted.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
