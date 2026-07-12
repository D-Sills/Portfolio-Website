'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { playSound } from '@/data/sounds';
import { useAudio } from '@/hooks/audio-provider';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  images: { src: string; caption?: string }[];
  repoLink?: string;
};

export default function ProjectCard({
  title,
  description,
  images,
  repoLink,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { enabled: audioEnabled } = useAudio();

  const slides = images.map(({ src, caption }) => ({
    src,
    description: caption,
  }));

  const toggleOpen = (state: boolean) => () => {
    playSound(state ? 'bigclick' : 'close', audioEnabled);
    setOpen(state);
  };

  const updateIndex =
    (when: boolean) =>
    ({ index: current }: { index: number }) => {
      if (when === open && current !== index) {
        playSound('click', audioEnabled);
        setIndex(current);
      }
    };

  return (
    <div className="
      bg-base-200 border border-base-300 rounded-lg overflow-hidden 
      shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform
    ">
      {/* Inline carousel preview (top only rounded) */}
      <div className="rounded-t-lg overflow-hidden">
        <Lightbox
          index={index}
          slides={slides}
          plugins={[Inline]}
          on={{
            view: updateIndex(false),
            click: toggleOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: 'cover',
          }}
          inline={{
            style: {
              width: '100%',
              aspectRatio: '16 / 9',
            },
          }}
        />
      </div>

      {/* Full modal lightbox */}
      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        plugins={[Captions]}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />

      {/* Content */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-base-content">{title}</h3>
          <p className="text-sm text-base-content/70">{description}</p>
        </div>
        
        {/* Tags 
        <div className="flex flex-wrap gap-2 justify-start">
          {tags.map((tag, i) => (
            <SkillTag key={tag} text={tag} soundIndex={i} />
          ))}
        </div>
        */}

        {repoLink && (
          <div>
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-mono text-accent hover:underline transition"
            >
              <span>View Code</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}