'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    try {
      if (localStorage.getItem('theme') !== 'light') {
        localStorage.setItem('theme', 'light');
      }
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } catch (e) {}
  }, []);

  return null;
}
