'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronDown, IoRemove, IoExpand, IoContract } from 'react-icons/io5';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import IconButton from '@/components/icon-button';
import { useAudio } from '@/hooks/audio-provider';
import { playSound } from '@/data/sounds';
import { useRef, useState } from 'react';

const MIN_WIDTH = 340;
const MIN_HEIGHT = 240;

export default function FloatingPanel({
  open,
  minimized = false,
  maximized = false,
  position,
  size,
  zIndex = 50,
  onClose,
  onFocus,
  onMove,
  onRecenter,
  onMinimize,
  onToggleMaximize,
  onResize,
  title = 'Window',
  height = '550px',
  width = '800px',
  children,
}: {
  open: boolean;
  minimized?: boolean;
  maximized?: boolean;
  position: { x: number; y: number } | null;
  size?: { width: number; height: number } | null;
  zIndex?: number;
  onClose: () => void;
  onFocus?: () => void;
  onMove?: (pos: { x: number; y: number }) => void;
  onRecenter?: () => void;
  onMinimize?: () => void;
  onToggleMaximize?: () => void;
  onResize?: (size: { width: number; height: number }) => void;
  title?: string;
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { enabled: audioEnabled } = useAudio();
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    playSound('close', audioEnabled);
    onClose();
  };

  const handleMinimize = () => {
    playSound('click', audioEnabled);
    onMinimize?.();
  };

  const handleMaximize = () => {
    playSound('click', audioEnabled);
    onToggleMaximize?.();
  };

  // Fall back to prop defaults, clamped to viewport so nothing opens larger than the screen
  const baseWidth = size?.width ?? width;
  const baseHeight = size?.height ?? height;

  const resolvedWidth = maximized ? '100%' : typeof baseWidth === 'number' ? `${baseWidth}px` : `min(${baseWidth}, 92vw)`;
  const resolvedHeight = maximized ? '100%' : typeof baseHeight === 'number' ? `${baseHeight}px` : `min(${baseHeight}, 80vh)`;

  const visible = open && !minimized;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {isMobile ? (
            <motion.div
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-50 rounded-t-xl shadow-xl bg-neutral text-neutral-content flex flex-col"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
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
              <div className="overflow-y-auto grow px-4 pt-4 pb-4">{children}</div>
            </motion.div>
          ) : (
            <>
              <div
                ref={constraintsRef}
                className="fixed left-0 right-0 z-40 pointer-events-none"
                style={{ top: 40, bottom: 44 }}
              />

              <motion.div
                className={clsx(
                  maximized
                    ? 'fixed'
                    : 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                  'rounded-xl bg-neutral text-neutral-content flex flex-col overflow-hidden'
                )}
                style={{
                  width: resolvedWidth,
                  height: resolvedHeight,
                  zIndex,
                  ...(maximized ? { top: 40, bottom: 44, left: 0, right: 0 } : {}),
                  boxShadow: dragging || resizing
                    ? '0 32px 64px -12px rgba(0,0,0,0.55)'
                    : `0 ${12 + zIndex % 10}px ${24 + zIndex % 10 * 2}px -8px rgba(0,0,0,${0.25 + Math.min(zIndex / 200, 0.15)})`,
                }}
                drag={!maximized}
                dragMomentum={false}
                dragElastic={0}
                dragConstraints={constraintsRef}
                initial={{ scale: 0.9, opacity: 0, x: position?.x ?? 0, y: position?.y ?? 0 }}
                animate={{ scale: 1, opacity: 1, x: maximized ? 0 : position?.x ?? 0, y: maximized ? 0 : position?.y ?? 0 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                onPointerDown={onFocus}
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  onMove?.({ x: (position?.x ?? 0) + info.offset.x, y: (position?.y ?? 0) + info.offset.y });
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center justify-between px-4 py-2 bg-neutral/80 border-b border-base-300 rounded-t-xl cursor-grab active:cursor-grabbing shrink-0"
                  onPointerDown={(e) => e.stopPropagation()}
                  onDoubleClick={onRecenter}
                >
                  <div className="flex space-x-2 group">
                    <button
                      onClick={handleClose}
                      aria-label="Close"
                      className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center hover:brightness-110"
                    >
                      <IoClose size={8} className="opacity-0 group-hover:opacity-70 text-red-950" />
                    </button>
                    <button
                      onClick={handleMinimize}
                      aria-label="Minimize"
                      className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center hover:brightness-110"
                    >
                      <IoRemove size={8} className="opacity-0 group-hover:opacity-70 text-yellow-950" />
                    </button>
                    <button
                      onClick={handleMaximize}
                      aria-label={maximized ? 'Restore' : 'Maximize'}
                      className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center hover:brightness-110"
                    >
                      {maximized ? (
                        <IoContract size={7} className="opacity-0 group-hover:opacity-70 text-green-950" />
                      ) : (
                        <IoExpand size={7} className="opacity-0 group-hover:opacity-70 text-green-950" />
                      )}
                    </button>
                  </div>
                  <span className="text-sm font-mono">{title}</span>
                  <div className="w-3 h-3" /> {/* spacer, keeps title centered like before */}
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto p-6">{children}</div>

                {/* Resize handle */}
                {!maximized && onResize && (
                  <motion.div
                    className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
                    drag
                    dragMomentum={false}
                    dragElastic={0}
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onDragStart={() => setResizing(true)}
                    onDrag={(_, info) => {
                      const currentWidth = typeof baseWidth === 'number' ? baseWidth : 800;
                      const currentHeight = typeof baseHeight === 'number' ? baseHeight : 550;
                      onResize({
                        width: Math.max(MIN_WIDTH, currentWidth + info.delta.x),
                        height: Math.max(MIN_HEIGHT, currentHeight + info.delta.y),
                      });
                    }}
                    onDragEnd={() => setResizing(false)}
                  >
                    <svg viewBox="0 0 16 16" className="w-full h-full text-base-content/30">
                      <path d="M14 2L2 14M14 8L8 14M14 14H14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
}