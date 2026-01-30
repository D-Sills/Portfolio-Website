'use client';

import { useEffect } from 'react';
import { useAudio } from '@/hooks/audio-provider';
import { bgm } from '@/data/sounds';

export default function MusicPlayer() {
  const { enabled: audioEnabled } = useAudio();

  useEffect(() => {
    // Play/pause on audio toggle
    if (audioEnabled) {
      bgm.play();
    } else {
      bgm.pause();
    }

    return () => {
      bgm.pause();
    };
  }, [audioEnabled]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        bgm.pause();
      } else if (audioEnabled) {
        bgm.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audioEnabled]);

  return null;
}
