'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ReactNode } from 'react';

type CarouselProps = {
  items: { key: string | number; element: ReactNode }[];
  spacing?: number;
  perView?: number;
};

export const Carousel = ({
  spacing = 48,
  perView = 2,
  items,
}: CarouselProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView,
      spacing,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item) => (
        <div key={item.key} className="keen-slider__slide">
          {item.element}
        </div>
      ))}
      <div className="keen-slider__slide" />
    </div>
  );
};
