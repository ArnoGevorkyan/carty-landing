import { footerSections } from '@/utils/constants';
import Link from 'next/link';
import CartyLogo from './ui/CartyLogo.svg';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="mx-auto mt-32 w-full max-w-screen-xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        {/* Logo and tagline */}
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link className="-ml-1 inline-block dark:invert" href="/">
            <CartyLogo />
          </Link>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Launch your Telegram shop in minutes and start selling where your
            customers are most active.
          </p>
        </div>

        {/* Sections with links */}
        {footerSections.map(({ title, links }, idx) => {
          // Filter out GitHub, Discord, and LinkedIn links
          const filteredLinks = links.filter(
            link => !['GitHub', 'Discord', 'LinkedIn'].includes(link.text)
          );
          if (filteredLinks.length === 0) return null;

          return (
            <div key={idx}>
              <h5 className="font-semibold">{title}</h5>
              <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
                {filteredLinks.map(({ text, href, target = '_self' }, idx) => (
                  <li key={idx}>
                    <Link
                      href={href}
                      target={target}
                      className="text-sm hover:text-primary-600"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-between gap-2.5 border-t py-3.5 text-neutral-500 dark:text-neutral-400 sm:flex-row-reverse">
        {/* Copyright */}
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Carty - All rights reserved.
        </span>
      </div>
    </footer>
  );
}
