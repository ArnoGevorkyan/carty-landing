import Link from 'next/link';
import CartyLogo from './ui/CartyLogo.svg';
import { MobileMenu } from './ui/mobile-menu';
import Navigation from './ui/navLink';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="block" aria-label="Home">
          <CartyLogo className="h-8 w-auto" />
        </Link>

        <div className="flex items-center gap-x-8">
          <div className="hidden lg:block">
            <Navigation />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
