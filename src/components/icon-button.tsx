'use client';

import React from 'react';
import clsx from 'clsx';
import { useAudio } from '@/hooks/audio-provider';
import sounds, { playSound } from '@/data/sounds';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  sizeClass?: string;
  ariaLabel?: string;
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
      className={clsx(
      'btn btn-square btn-neutral rounded-lg',
      sizeClass,
      'p-0 inline-flex items-center justify-center',
      'transform transition duration-200 ease-out hover:scale-110 active:scale-95',
      additionalClasses
    )}
    >
      {icon}
    </button>
  );
}

