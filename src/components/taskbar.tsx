'use client';
import { FaGithub, FaLinkedin, FaUser, FaCode, FaEnvelope, FaCat } from 'react-icons/fa';
import IconButton from '@/components/icon-button';
import type { WindowId } from '@/hooks/window-manager';

interface WindowState {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  position: { x: number; y: number } | null;
  size: { width: number; height: number } | null;
  zIndex: number;
}

interface TaskbarProps {
  windows: Record<WindowId, WindowState>;
  onSelect: (id: WindowId) => void;
  className?: string;
}

const PANEL_META: Record<WindowId, { label: string; icon: React.ReactNode }> = {
  about: { label: 'about', icon: <FaUser size={12} /> },
  work: { label: 'work', icon: <FaCode size={12} /> },
  contact: { label: 'contact', icon: <FaEnvelope size={12} /> },
};

export default function Taskbar({ windows, onSelect, className = '' }: TaskbarProps) {
  const openIds = (Object.keys(windows) as WindowId[])
    .filter((id) => windows[id].open)
    .sort((a, b) => windows[a].zIndex - windows[b].zIndex);

  const topId = openIds.length
    ? openIds.reduce((top, id) =>
        !windows[id].minimized && windows[id].zIndex > windows[top].zIndex ? id : top
      )
    : null;

  return (
    <div
      className={`${className} h-11 flex items-center px-3 gap-2 bg-base-300/80 backdrop-blur border-t border-base-content/10`}
    >
      {openIds.length === 0 && (
        <span className="text-xs text-base-content/40 font-mono"></span>
      )}

      {openIds.map((id) => {
        const win = windows[id];
        const isActive = id === topId && !win.minimized;

        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition
              ${isActive
                ? 'bg-base-content/15 text-base-content'
                : win.minimized
                ? 'bg-base-content/5 text-base-content/40 hover:bg-base-content/10'
                : 'bg-base-content/8 text-base-content/60 hover:bg-base-content/12'}`}
          >
            {PANEL_META[id].icon}
            {PANEL_META[id].label}
            {win.minimized && <span className="w-1 h-1 rounded-full bg-base-content/30 ml-0.5" />}
          </button>
        );
      })}

      <div className="flex-1" />

      <div className="flex items-center gap-1">
        {/* Social icons */}
                  <div className="flex gap-4 text-base-content/70">
                    <a
                      href="https://www.linkedin.com/in/darren-sills/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    
                    <a
                      href="https://github.com/D-Sills"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
      </div>
    </div>
  );
}