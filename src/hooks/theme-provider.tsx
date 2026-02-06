'use client';

import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') ?? 'pastel';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'pastel' ? 'dracula' : 'pastel';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
  };

  return { theme, toggleTheme };
}
