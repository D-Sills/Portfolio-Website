// components/AudioToggleButton.tsx
'use client';

import React from 'react';
import { IoVolumeHigh , IoVolumeMute } from 'react-icons/io5';
import IconButton from '@/components/icon-button';
import { useAudio } from '@/hooks/audio-provider';

export default function AudioToggleButton() {
  const { enabled, toggle } = useAudio();
  return (
    <IconButton
      icon={enabled ? <IoVolumeHigh size={20} /> : <IoVolumeMute size={20} />}
      ariaLabel={enabled ? 'Mute audio' : 'Unmute audio'}
      onClick={toggle}
    />
  );
}
