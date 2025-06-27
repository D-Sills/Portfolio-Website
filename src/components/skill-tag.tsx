'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/audio-provider';
import sounds, { playSound, skillNoteSounds } from '@/data/sounds';

type SkillTagProps = {
  text: string;
  soundIndex?: number;
  onClick?: () => void;
  clickSound?: keyof typeof sounds;
  selected?: boolean;
};

export default function SkillTag({ text, soundIndex = 0, onClick, clickSound = 'smallclick', selected = false }: SkillTagProps) {
  const { enabled: audioEnabled } = useAudio();

  const playNoteSound = () => {
    if (audioEnabled) {
      const sound = skillNoteSounds[soundIndex % skillNoteSounds.length];
      sound.play();
    }
  };

  return (
    <motion.span
      onMouseEnter={playNoteSound}
      onClick={() => {
        playSound(clickSound, audioEnabled);
        onClick?.();
      }}
      whileHover={{ scale: 1.1, rotate: [-2, 2, -1, 0], transition: { duration: 0.3 } }}
      className={`px-3 py-1 rounded text-sm font-mono shadow-sm transition-colors duration-200
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${selected
          ? 'bg-accent text-accent-content hover:bg-accent-focus'
          : 'bg-base-300 text-base-content/70 hover:bg-base-200'
        }`}
    >
      {text}
    </motion.span>
  );
}

