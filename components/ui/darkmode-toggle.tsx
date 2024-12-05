"use client";

import React, { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('light');
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className="flex h-9 w-9 items-center justify-center duration-200 opacity-50">
      <label className="flex h-full w-full cursor-not-allowed items-center justify-center rounded-full border border-gray-600/50 duration-200">
        <input
          className="hidden"
          type="checkbox"
          disabled
          checked={false}
        />
        <Sun strokeWidth={1} className="h-5 w-5" />
      </label>
    </div>
  );
}
