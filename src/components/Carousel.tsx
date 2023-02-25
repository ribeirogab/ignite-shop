'use client';

import 'keen-slider/keen-slider.min.css';
import { ReactNode } from 'react';
import { useKeenSlider } from 'keen-slider/react';

type CarouselProps = {
  items: { key: string | number; element: ReactNode }[];
  gap?: string;
};

export const Carousel = ({ items, gap = '3rem' }: CarouselProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
  });

  return (
    <div ref={sliderRef} className={`keen-slider gap-[${gap}]`}>
      {items.map((item) => (
        <div key={item.key} className="keen-slider__slide">
          {item.element}
        </div>
      ))}
    </div>
  );
};
