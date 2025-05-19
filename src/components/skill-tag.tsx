'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/hooks/audio-provider';
import { skillNoteSounds } from '@/data/sounds';

type SkillTagProps = {
  text: string;
  soundIndex?: number;
};

export default function SkillTag({ text, soundIndex = 0 }: SkillTagProps) {
  const { enabled: audioEnabled } = useAudio();

  const playSound = () => {
    if (audioEnabled) {
      const sound = skillNoteSounds[soundIndex % skillNoteSounds.length];
      if (!sound.playing()) sound.play();
    }
  };

  return (
    <motion.span
      onMouseEnter={playSound}
      whileHover={{ scale: 1.1, rotate: [-2, 2, -1, 0], transition: { duration: 0.3 } }}
      className="bg-base-300 px-3 py-1 rounded text-sm shadow-sm text-base-content/70 font-mono cursor-default"
    >
      {text}
    </motion.span>
  );
}

