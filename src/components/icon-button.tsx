// components/IconButton.tsx
'use client';

import React from 'react';
import { useAudio } from '@/hooks/audio-provider';

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
  hoverSoundSrc?: string;
  clickSoundSrc?: string;
};

export default function IconButton({
  icon,
  onClick,
  sizeClass = 'w-10 h-10',
  ariaLabel = 'Icon Button',
  hoverSoundSrc = '/sounds/Button2.mp3',
  clickSoundSrc = '/sounds/Button3.mp3',
}: IconButtonProps) {
    const { enabled: audioEnabled } = useAudio();
    
    const play = (src?: string) => {
        if (audioEnabled && src) {
          const audio = new Audio(src);
          audio.play();
        }
      };
    
    const handleClick = () => {
        play(clickSoundSrc);
        onClick?.();
    };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => play(hoverSoundSrc)}
      aria-label={ariaLabel}
      className={
        `btn btn-circle btn-accent` +    // ghost = no bg, circle = round shape
        `${sizeClass} ` +                // e.g. "w-10 h-10"
        `p-0 inline-flex items-center justify-center ` +
        `transform transition duration-200 ease-out ` +
        `hover:scale-110 active:scale-95` +
        ` btn-neutral `
      }
    >
      {icon}
    </button>
  );
}

