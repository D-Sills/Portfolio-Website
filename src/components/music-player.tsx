// components/music-player.tsx
'use client';

import { useEffect } from 'react';
import { useAudio } from '@/hooks/audio-provider';
import { bgm } from '@/data/sounds';

export default function MusicPlayer() {
  const { enabled: audioEnabled } = useAudio();

  useEffect(() => {
    if (audioEnabled) {
      if (!bgm.playing()) {
        bgm.play();
      }
    } else {
      bgm.pause();
    }

  }, [audioEnabled]);

  return null;
}