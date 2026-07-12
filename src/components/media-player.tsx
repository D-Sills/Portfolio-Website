'use client';
import { useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { Howler } from 'howler';
import { useAudio } from '@/hooks/audio-provider';

interface MediaPlayerProps {
  trackName?: string;
}

export default function MediaPlayer({
  trackName = 'lofi_beats.mp3',
}: MediaPlayerProps) {
  const { enabled, toggle } = useAudio();
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Tap into Howler's master output once, on mount
  useEffect(() => {
    const ctx = Howler.ctx;
    const masterGain = Howler.masterGain; // Howler's master gain node
    if (!ctx || !masterGain) return;

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 32;
    masterGain.connect(analyser);
    analyserRef.current = analyser;

    return () => {
      masterGain.disconnect(analyser);
    };
  }, []);

  // Animate bars while enabled + actually playing
  useEffect(() => {
    if (!enabled || !analyserRef.current) return;

    const analyser = analyserRef.current;
    const data = new Uint8Array(analyser.frequencyBinCount);

    const tick = () => {
      analyser.getByteFrequencyData(data);
      barRefs.current.forEach((bar, i) => {
        if (!bar) return;
        const value = data[i * 2] ?? 0;
        bar.style.height = `${4 + (value / 255) * 10}px`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  return (
    <div className={`flex items-center gap-2 bg-neutral rounded-lg px-2.5 py-1`}>
      <button
        onClick={toggle}
        aria-label={enabled ? 'Mute music' : 'Play music'}
        className="hover:text-base-content transition"
      >
        {enabled ? <FaPause size={11} /> : <FaPlay size={11} />}
      </button>

      <div className="w-px h-3.5 bg-base-content/10" />

      <div className="flex items-end gap-[2px] h-3">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            ref={(el) => {
              barRefs.current[i] = el;
            }}
            className="w-[2px] bg-base-content/50 rounded-sm"
            style={{ height: '4px' }}
          />
        ))}
      </div>

      <span className="text-sm font-mono">{trackName}</span>
    </div>
  );
}