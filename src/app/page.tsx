import { Carousel } from '@/components/Carousel';
import { Product } from '@/components/Product';

export default function Home() {
  return (
    <main className="home-container flex gap-12">
      <Carousel
        perSlide={2}
        items={[
          <Product key={1} />,
          <Product key={2} />,
          <Product key={3} />,
          <Product key={4} />,
          <Product key={5} />,
        ]}
      />
    </main>
  );
}
