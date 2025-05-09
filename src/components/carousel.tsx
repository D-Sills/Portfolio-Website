'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';

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
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-sm btn-circle btn-ghost bg-base-100/60 z-10"
      >
        ❮
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-sm btn-circle btn-ghost bg-base-100/60 z-10"
      >
        ❯
      </button>

      {/* Dots / Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? 'bg-primary' : 'bg-base-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
