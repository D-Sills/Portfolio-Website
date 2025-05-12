'use client';

import React, { useState } from 'react';
//import SkillTag from './skill-tag';
import ImageCarousel from './carousel';
import LightboxWrapper from './lightbox';

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
  //tags,
  images,
  repoLink,
}: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="
      bg-base-200 border border-base-300 rounded-lg overflow-hidden 
      shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform
    ">
      {/* Image Carousel (top only rounded) */}
      <div className="rounded-t-lg overflow-hidden">
        <ImageCarousel
          images={images}
          onClickImage={(i) => {
            setLightboxIndex(i);
            setLightboxOpen(true);
          }}
        />
      </div>

      <LightboxWrapper
        images={images}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title + Description */}
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
        
        {/* View Code */}
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
