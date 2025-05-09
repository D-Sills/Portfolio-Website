// components/ThemeToggleButton.tsx
'use client';

import { useTheme } from '@/hooks/theme-provider';
import IconButton from '@/components/icon-button';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      icon={theme === 'dark' ? <BsSunFill size={20} /> : <BsMoonStarsFill size={20} />}
      ariaLabel={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    />
  );
}
