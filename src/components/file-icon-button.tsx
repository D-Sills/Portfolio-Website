'use client';
import { motion } from 'framer-motion';
import sounds, { playSound } from '@/data/sounds';
import { useAudio } from '@/hooks/audio-provider';

type FileIconButtonProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  hoverSound?: keyof typeof sounds;
  clickSound?: keyof typeof sounds;
};

export default function FileIconButton({
  icon,
  label,
  href,
  hoverSound = 'hover',
  clickSound = 'bigclick',
}: FileIconButtonProps) {
  const { enabled: audioEnabled } = useAudio();

  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => playSound(hoverSound, audioEnabled)}
        onClick={() => {
          playSound(clickSound, audioEnabled);
          window.open(href, '_blank');
        }}
        aria-label={label}
        className="relative group p-0 m-0 bg-transparent cursor-pointer"
      >
        {/* Document/file shape, dog-eared corner to read as "file" not "folder" */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-md group-hover:drop-shadow-xl transition-all text-neutral"
        >
          <path d="M6 2a1 1 0 00-1 1v18a1 1 0 001 1h12a1 1 0 001-1V8l-6-6H6z" />
          <path d="M13 2v5a1 1 0 001 1h5" fill="currentColor" className="text-neutral-content opacity-30" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-xl z-10 pointer-events-none text-neutral-content">
          {icon}
        </div>
      </motion.button>

      <span className="text-sm font-semibold text-center">{label}</span>
    </div>
  );
}