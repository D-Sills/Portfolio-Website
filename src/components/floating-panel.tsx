// components/FloatingPanel.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronDown } from 'react-icons/io5';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import IconButton from '@/components/icon-button';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';

export default function FloatingPanel({
  open,
  onClose,
  title = 'Window',
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { enabled: audioEnabled } = useAudio();

  const handleClose = () => {
    playSound('close', audioEnabled);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {isMobile ? (
            <motion.div
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-50 rounded-t-xl shadow-xl bg-neutral text-neutral-content flex flex-col"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral/90 border-b border-base-300 rounded-t-xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono">{title}</span>
                <IconButton
                  icon={<IoChevronDown size={16} className="text-neutral-content" />}
                  onClick={handleClose}
                  ariaLabel="Close panel"
                  clickSound="close"
                />
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto grow px-4 pt-4 pb-4">
                {children}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={clsx(
                "fixed left-1/2 top-1/2 z-50",
                "w-[800px] h-[550px]",
                "-translate-x-1/2 -translate-y-1/2",
                "rounded-xl shadow-2xl bg-neutral text-neutral-content flex flex-col"
              )}
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral/80 border-b border-base-300 rounded-t-xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono">{title}</span>
                <IconButton
                  icon={<IoClose size={16} className="text-neutral-content" />}
                  onClick={handleClose}
                  ariaLabel="Close panel"
                  clickSound="close"
                />
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto p-6">
                {children}
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
