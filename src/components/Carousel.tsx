import { Fragment, ReactNode } from 'react';

type CarouselProps = {
  items: ReactNode[];
  perSlide?: number;
};

const splitItems = ({ items, perSlide = 2 }: CarouselProps) => {
  const itemsPerSlide: ReactNode[][] = [];

  items.reverse();

  while (items.length) {
    itemsPerSlide.push(items.splice(0, perSlide));
  }

  return itemsPerSlide;
};

export const Carousel = (props: CarouselProps) => {
  const itemsPerSlide = splitItems(props);

  return (
    <div className="carousel w-container">
      {itemsPerSlide.map((items, index) => (
        <div
          id={`slide-${index + 1}`}
          className="carousel-item relative w-full gap-8"
          key={`${JSON.stringify(items)}-${index}`}
        >
          {items.map((item, itemIndex) => (
            <Fragment key={`${JSON.stringify(item)}-${itemIndex}`}>
              {item}
            </Fragment>
          ))}

          <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
            {index === 0 ? (
              <div />
            ) : (
              <a href={`#slide-${index}`} className="btn-circle btn">
                ❮
              </a>
            )}

            {items.length >= index + 1 && (
              <a href={`#slide-${index + 2}`} className="btn-circle btn">
                ❯
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
