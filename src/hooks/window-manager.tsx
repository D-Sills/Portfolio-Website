'use client';
import { useRef, useState, useCallback } from 'react';

export type WindowId = 'about' | 'work' | 'contact';

interface WindowState {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  position: { x: number; y: number } | null;
  size: { width: number; height: number } | null;
  zIndex: number;
}

const CASCADE_STEP = 48;

export function WindowManager(ids: WindowId[]) {
  const zCounter = useRef(1);
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(
    () =>
      Object.fromEntries(
        ids.map((id) => [
          id,
          { open: false, minimized: false, maximized: false, position: null, size: null, zIndex: 0 },
        ])
      ) as Record<WindowId, WindowState>
  );

  const bringToFront = useCallback((id: WindowId) => {
    zCounter.current += 1;
    setWindows((w) => ({ ...w, [id]: { ...w[id], zIndex: zCounter.current } }));
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setWindows((w) => {
      if (w[id].open && !w[id].minimized) return w; // already open and visible
      if (w[id].minimized) {
        zCounter.current += 1;
        return { ...w, [id]: { ...w[id], minimized: false, zIndex: zCounter.current } };
      }
      const cascadeIndex = Object.values(w).filter(
        (win) => win.open && win.position === null
      ).length;
      zCounter.current += 1;
      return {
        ...w,
        [id]: {
          ...w[id],
          open: true,
          minimized: false,
          position: w[id].position ?? { x: cascadeIndex * CASCADE_STEP, y: cascadeIndex * CASCADE_STEP },
          zIndex: zCounter.current,
        },
      };
    });
  }, []);
  
  const selectWindow = useCallback((id: WindowId) => {
  setWindows((w) => {
    if (w[id].minimized) {
      zCounter.current += 1;
      return { ...w, [id]: { ...w[id], minimized: false, zIndex: zCounter.current } };
    }
    zCounter.current += 1;
    return { ...w, [id]: { ...w[id], zIndex: zCounter.current } };
  });
}, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], open: false, minimized: false, maximized: false } }));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], minimized: true } }));
  }, []);

  const toggleMaximize = useCallback((id: WindowId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], maximized: !w[id].maximized } }));
  }, []);

  const setPosition = useCallback((id: WindowId, position: { x: number; y: number }) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], position } }));
  }, []);

  const setSize = useCallback((id: WindowId, size: { width: number; height: number }) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], size } }));
  }, []);

  const recenter = useCallback((id: WindowId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], position: { x: 0, y: 0 } } }));
  }, []);

  return {
    windows,
    openWindow,
    closeWindow,
    selectWindow,
    minimizeWindow,
    toggleMaximize,
    bringToFront,
    setPosition,
    setSize,
    recenter,
  };
}