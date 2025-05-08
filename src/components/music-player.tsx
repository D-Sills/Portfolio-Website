// components/MusicPlayer.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useAudio } from '@/components/audio-provider';

type MusicPlayerProps = {
    /** Path to your music file in /public, e.g. "/music/ambient.mp3" */
    src: string;
    /** Loop the track indefinitely? */
    loop?: boolean;
    /** Initial volume (0.0–1.0) */
    volume?: number;
};
  
export default function MusicPlayer({
    src,
    loop = true,
    volume = 0.5,
  }: MusicPlayerProps) {
    const { enabled: audioEnabled } = useAudio();
    const audioRef = useRef<HTMLAudioElement>(null);
  
    // On mount, create the audio element
    useEffect(() => {
      const audio = new Audio(src);
      audio.loop = loop;
      audio.volume = volume;
      audioRef.current = audio;
  
      return () => {
        audio.pause();
        audioRef.current = null; // Clean up the reference
      };
    }, [src, loop, volume]);
  
    // Whenever `audioEnabled` flips, play or pause
    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
  
      if (audioEnabled) {
        audio
          .play()
          .catch(() => {
            // Browsers often block autoplay unless there's been a user gesture
            // We’re swallowing the error; music will start once the user clicks mute/unmute
          });
      } else {
        audio.pause();
      }
    }, [audioEnabled]);
  
    return null; // no visible UI; it just runs in the background
  }
  