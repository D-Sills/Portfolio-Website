'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function CatSticker() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  const { enabled: audioEnabled } = useAudio();

   if (isMobile) return null;

    const handleHoverStart = () => {
      playSound('meow', audioEnabled);
    };
  
  return (
    <>
      <motion.div
        initial={{ x: -40 }} // mostly hidden
        whileHover={{ x: 15 }} // slide out
        onHoverStart={handleHoverStart}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 28,
        }}
        className="fixed left-[-70px] top-1/2 -translate-y-1/2 z-40 cursor-pointer select-none"
      >
        <Image
          src="/images/bobby.webp"
          alt="Office supervisor"
          width={300}
          height={300}
        />
      </motion.div>
    </>
  );
}
