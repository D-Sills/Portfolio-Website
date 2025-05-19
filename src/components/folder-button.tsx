'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/audio-provider';
import sounds, { playSound } from '@/data/sounds';

type FolderButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  hoverSound?: keyof typeof sounds;
  clickSound?: keyof typeof sounds;
};

export default function FolderButton({
  icon,
  label,
  onClick,
  hoverSound = 'hover',
  clickSound = 'click',
}: FolderButtonProps) {
  const { enabled: audioEnabled } = useAudio();

  return (
    <div className="flex flex-col items-center space-y-2">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onMouseEnter={() => playSound(hoverSound, audioEnabled)}
    onClick={() => {
      playSound(clickSound, audioEnabled);
      onClick?.();
    }}
    aria-label={label}
    className="relative group p-0 m-0 bg-transparent cursor-pointer"
  >
    {/* SVG folder as the true background */}
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-24 h-20 sm:w-28 sm:h-24 drop-shadow-md group-hover:drop-shadow-xl transition-all text-neutral"
    >
      <path d="M3 4a1 1 0 011-1h5.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 6H20a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
    </svg>

    {/* Icon layered on top */}
    <div className="absolute inset-0 flex items-center justify-center text-2xl z-10 pointer-events-none text-neutral-content">
      {icon}
    </div>
  </motion.button>

  <span className="text-sm font-semibold text-center">{label}</span>
</div>

  );
}