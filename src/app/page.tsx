import { Carousel } from '@/components/Carousel';
import { Product } from '@/components/Product';

export default function Home() {
  return (
    <main className="home-container flex gap-12">
      <Carousel
        items={[
          { key: 1, element: <Product /> },
          { key: 2, element: <Product /> },
          { key: 3, element: <Product /> },
          { key: 4, element: <Product /> },
        ]}
      />
    </main>
  );
}
