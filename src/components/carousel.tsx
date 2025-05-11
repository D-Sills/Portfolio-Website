'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';
import IconButton from './icon-button';

type CarouselImage = {
  src: string;
  caption?: string;
};

export default function ImageCarousel({
  images,
  onClickImage,
}: {
  images: CarouselImage[];
  onClickImage?: (index: number) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="relative w-full aspect-video rounded overflow-hidden border border-base-300">
      <div ref={ref} className="keen-slider h-full">
        {images.map((img, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center cursor-zoom-in"
            onClick={() => onClickImage?.(i)}
          >
            <Image
              src={img.src}
              alt={img.caption || `Slide ${i + 1}`}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <div className="absolute left-2 p-2 rounded z-10 top-1/2 -translate-y-1/2">
            <IconButton
                onClick={() => slider.current?.prev()}
                icon="❮"
                additionalClasses='btn-ghost hover:btn-ghost'
            />
        </div>
        <div className="absolute right-2 p-2 rounded z-10 top-1/2 -translate-y-1/2">
            <IconButton
            onClick={() => slider.current?.next()}
            icon="❯"
            additionalClasses='btn-ghost hover:btn-ghost'
          />
        </div>
      </div>
    
      {/* Dots / Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? 'bg-accent' : 'bg-base-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
