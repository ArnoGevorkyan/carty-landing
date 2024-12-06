'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  isExternal = false,
  children,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-nowrap align-middle text-gray-800 transition duration-150 ease-in-out hover:text-primary-800 ${
        isActive ? 'text-primary-800' : ''
      }`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {children}
    </Link>
  );
};

const Navigation: React.FC = () => {
  const navLinks = [
    {
      label: 'Features',
      path: '#features',
      isExternal: false,
    },
    {
      label: 'Contact',
      path: 'https://t.me/ArnoGevorkyan',
      isExternal: true,
    },
    {
      label: 'Get Started',
      path: 'https://carty.cc/signin',
      isExternal: true,
    },
  ];

  return (
    <nav className="flex w-full items-center justify-start md:justify-center">
      <ul className="flex w-full items-center justify-start space-x-3.5 sm:space-x-6 md:justify-center">
        {navLinks.map(link => (
          <li key={link.label}>
            <NavLink href={link.path} isExternal={link.isExternal}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
