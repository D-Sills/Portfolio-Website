'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function CVSticker() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { enabled: audioEnabled } = useAudio();

  // Prevent SSR/hydration flicker by mounting before rendering, idk claude said so
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Start null, and also hide on mobile
  if (!mounted || isMobile) return null;

  const handleHoverStart = () => {
    playSound('hover', audioEnabled);
  };

  const handleClick = () => {
    playSound('bigclick', audioEnabled);
    window.open('/CV.pdf', '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-[-3rem] right-6 z-40 flex flex-col items-center select-none cursor-pointer"
      initial={{ y: 0 }}
      whileHover={{ y: -12 }}
      onHoverStart={handleHoverStart}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 24,
      }}
      onClick={handleClick}
    >
      {/* Label */}
      <motion.div
        className="relative mb-2 text-xs text-center bg-neutral px-3 py-1 rounded-full shadow border border-base-300 font-mono text-neutral-content
          after:content-['']
          after:absolute
          after:left-1/2
          after:-translate-x-1/2
          after:top-full
      
          after:border-l-[6px]
          after:border-l-transparent
          after:border-r-[6px]
          after:border-r-transparent
          after:border-t-[6px]
          after:border-t-neutral
        "
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
