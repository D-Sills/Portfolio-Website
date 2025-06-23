'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function CVSticker() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const controls = useAnimation();
  const { enabled: audioEnabled } = useAudio();

  // Prevent SSR/hydration flicker by mounting before rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Start null, and also hide on mobile
  if (!mounted || isMobile) return null;

  const handleHoverStart = () => {
    playSound('hover', audioEnabled);
    controls.start({ y: -12 });
  };

  const handleHoverEnd = () => {
    controls.start({ y: 0 });
  };

  const handleClick = () => {
    playSound('bigclick', audioEnabled);
    window.open('/CV.pdf', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-[-3rem] right-6 z-40 flex flex-col items-center select-none cursor-pointer"
      animate={controls}
      initial={{ y: 0 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      {/* Label */}
      <motion.div
        className="mb-2 text-xs text-center bg-neutral px-3 py-1 rounded-full shadow border border-base-300 font-mono text-neutral-content"
      >
        Grab my CV!
      </motion.div>

      {/* Visual */}
      <div className="w-[148px] aspect-[0.707] overflow-hidden rounded-md shadow-md border border-base-300 bg-base-100 relative">
        <Image
          src="/images/CV.webp"
          alt="CV preview"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}
