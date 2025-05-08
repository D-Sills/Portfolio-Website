'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useAudio } from '@/components/audio-provider';
import IconButton from '@/components/icon-button';

type CVStickerProps = {
  hoverSoundSrc?: string;
  clickSoundSrc?: string;
};

export default function CVSticker({
  hoverSoundSrc = '/sounds/Button2.mp3',
  clickSoundSrc = '/sounds/Button2.mp3',
}: CVStickerProps) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const controls = useAnimation();
  const { enabled: audioEnabled } = useAudio();

  const play = (src?: string) => {
    if (audioEnabled && src) {
      new Audio(src).play();
    }
  };

  const handleHoverStart = () => {
    play(hoverSoundSrc);
    controls.start({ y: -12 });
  };

  const handleHoverEnd = () => {
    controls.start({ y: 0 });
  };

  const handleClick = () => {
    play(clickSoundSrc);

    // Open in new tab
    window.open('/CV.pdf', '_blank');

    // Also download it
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'DarrenSills_CV.pdf';
    link.click();
  };

  return (
    <motion.div
      className={`
        fixed z-40 flex flex-col items-center select-none
        ${isMobile ? 'bottom-20 right-16' : 'bottom-[-3rem] right-6'}
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
        animate={{ y: [0, -2, 0], rotate: [0, 1.5, -1.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-2 text-xs text-center bg-neutral px-3 py-1 rounded-full shadow border border-base-300 font-mono text-neutral-content">
          Grab my CV!
        </motion.div>
      )}
      
      

      {/* Visual */}
      {isMobile ? (
        <IconButton
          icon={<Image src="/images/CV.png" alt="CV preview" width={32} height={32} />}
          onClick={handleClick}
          sizeClass="w-18 h-18"
          ariaLabel="Download CV"
          hoverSoundSrc={hoverSoundSrc}
          clickSoundSrc={clickSoundSrc}
        />
      ) : (
        <div className="w-[148px] aspect-[0.707] overflow-hidden rounded-md shadow-md border border-base-300 bg-base-100 relative">
          <Image
            src="/images/CV.png"
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
