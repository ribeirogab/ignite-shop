type ProductProps = {
  params: {
    id: string;
  };
};

export default function Product({ params }: ProductProps) {
  return (
    <main>
      <h1 style={{ color: 'red' }}>Product {params?.id}</h1>
      <button className="bg-red-600">click me</button>
    </main>
  );
}
