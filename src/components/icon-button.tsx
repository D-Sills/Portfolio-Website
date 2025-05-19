// components/IconButton.tsx
'use client';

import React from 'react';
import { useAudio } from '@/hooks/audio-provider';
import sounds, { playSound } from '@/data/sounds';

type IconButtonProps = {
  /** The icon to render (e.g. `<Mail size={24}/>`). */
  icon: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Tailwind width/height classes to control size */
  sizeClass?: string;
  /** Accessible label */
  ariaLabel?: string;
  /** URLs to your audio files in /public, e.g. '/sounds/click.mp3' */
  hoverSound?: keyof typeof sounds;
  clickSound?: keyof typeof sounds;
  additionalClasses?: string;
};

export default function IconButton({
  icon,
  onClick,
  sizeClass = 'w-10 h-10',
  ariaLabel = 'Icon Button',
  hoverSound = 'hover',
  clickSound = 'click',
  additionalClasses = '',
}: IconButtonProps) {
  const { enabled: audioEnabled } = useAudio();

  return (
    <button
      onClick={() => {
        playSound(clickSound, audioEnabled);
        onClick?.();
      }}
      onMouseEnter={() => playSound(hoverSound, audioEnabled)}
      aria-label={ariaLabel}
      className={
        `btn btn-circle btn-accent` +    // ghost = no bg, circle = round shape
        `${sizeClass} ` +                // e.g. "w-10 h-10"
        `p-0 inline-flex items-center justify-center ` +
        `transform transition duration-200 ease-out ` +
        `hover:scale-110 active:scale-95` +
        ` btn-neutral ` + // neutral = gray
        ` ${additionalClasses}` // additional classes
      }
    >
      {icon}
    </button>
  );
}

