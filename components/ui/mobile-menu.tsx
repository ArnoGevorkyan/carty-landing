'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function MobileNavItem({ href, children, onClick }: MobileNavItemProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {children}
      </Link>
    </li>
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
        <Menu
          className={cn(
            'h-6 w-6',
            isOpen && 'hidden'
          )}
        />
        <X
          className={cn(
            'h-6 w-6',
            !isOpen && 'hidden'
          )}
        />
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
                  <Link
                    href="https://carty.cc/signin"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  >
                    Create Store
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <MobileNavItem href="https://carty.cc/signin" onClick={() => setIsOpen(false)}>
            Get Started
          </MobileNavItem>
          <MobileNavItem href="/docs" onClick={() => setIsOpen(false)}>Documentation</MobileNavItem>
          <MobileNavItem href="https://t.me/ArnoGevorkyan" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavItem>
        </div>
      </div>
    </div>
  );
}
