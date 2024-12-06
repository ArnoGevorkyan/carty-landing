import {
  DiscordLogo,
  GitHubLogo,
  LinkedInLogo,
  TwitterLogo,
} from '@/components/ui/icons';

export const TEST_MODE_ENABLED = ['true', 'True', 'TRUE'].includes(
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED ?? ''
);

export const BUNNY_CDN_HOST = 'https://pearai.b-cdn.net';

export const CONTACT_EMAIL = 'pear@trypear.ai';

export const footerSections = [
  {
    title: 'Company',
    links: [
      {
        text: 'Privacy Policy',
        href: '/privacy',
      },
      {
        text: 'App Privacy Policy',
        href: '/privacy-app',
      },
      {
        text: 'Terms of Service',
        href: '/terms-of-service',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        text: 'Telegram',
        href: 'https://t.me/ArnoGevorkyan',
        target: '_blank',
      },
      {
        text: 'Email',
        href: 'mailto:hello@carty.cc',
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: GitHubLogo,
    link: 'https://github.com/carty/carty-master',
  },
  {
    icon: DiscordLogo,
    link: 'https://discord.gg/AKy5FmqCkF',
  },
  {
    icon: TwitterLogo,
    link: 'https://x.com/HelloCarty',
  },
  {
    icon: LinkedInLogo,
    link: 'https://www.linkedin.com/company/trycarty',
  },
];

export const defaultMetadata = {
  title: 'Carty - The Open Source AI Code Editor',
  description:
    'Carty is an open-source AI code editor that integrates the best AI tools for each part of the development process.',
};
