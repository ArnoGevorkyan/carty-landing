'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SignInAlertDialog } from './signin-alert-dialog';

function MobileNavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="relative z-50 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className={cn('h-6 w-6', isOpen && 'hidden')} />
        <X className={cn('h-6 w-6', !isOpen && 'hidden')} />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-100/50 backdrop-blur-sm" />
      )}
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-40 origin-top rounded-b-2xl bg-white px-6 pb-8 pt-24 shadow-2xl shadow-gray-900/20',
          !isOpen && 'hidden'
        )}
      >
        <div className="space-y-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="features">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 space-y-2">
                  <SignInAlertDialog>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Create Store
                    </button>
                  </SignInAlertDialog>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SignInAlertDialog>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              Get Started
            </button>
          </SignInAlertDialog>
          <MobileNavItem href="/docs" onClick={() => setIsOpen(false)}>
            Documentation
          </MobileNavItem>
          <MobileNavItem
            href="https://t.me/ArnoGevorkyan"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </MobileNavItem>
        </div>
      </div>
    </div>
  );
}
