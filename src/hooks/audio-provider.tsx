'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AudioContextType = {
  enabled: boolean;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const toggle = () => setEnabled((prev) => !prev);
  return (
    <AudioContext.Provider value={{ enabled, toggle }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within <AudioProvider>');
  return ctx;
}
