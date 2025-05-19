'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function CVSticker() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const controls = useAnimation();
  const { enabled: audioEnabled } = useAudio();

  const handleHoverStart = () => {
    playSound('hover', audioEnabled);
    controls.start({ y: -12 });
  };

  const handleHoverEnd = () => {
    controls.start({ y: 0 });
  };

  const handleClick = () => {
    playSound('bigclick', audioEnabled);
    
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Path to your CV file in the public folder
    link.download = 'CV.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
  };

  return (
    <motion.div
      className={`
        fixed z-40 flex flex-col items-center select-none
        ${isMobile ? 'bottom-20 right-8' : 'bottom-[-3rem] right-6'}
        cursor-pointer
      `}
      animate={controls}
      initial={{ y: 0 }}
      onHoverStart={!isMobile ? handleHoverStart : undefined}
      onHoverEnd={!isMobile ? handleHoverEnd : undefined}
      onClick={handleClick}
    >
      {/* Desktop label */}
      {!isMobile && (
        <motion.div
        className="mb-2 text-xs text-center bg-neutral px-3 py-1 rounded-full shadow border border-base-300 font-mono text-neutral-content">
          Grab my CV!
        </motion.div>
      )}
      
      

      {/* Visual */}
      {isMobile ? (
      //invisible on mobile
        <div className="w-[148px] aspect-[0.707] overflow-hidden rounded-md shadow-md border border-base-300 bg-base-100 relative invisible">
          <Image
            src="/images/CV.webp"
            alt="CV preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      
      ) : (
        <div className="w-[148px] aspect-[0.707] overflow-hidden rounded-md shadow-md border border-base-300 bg-base-100 relative">
          <Image
            src="/images/CV.webp"
            alt="CV preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </motion.div>
  );
}
