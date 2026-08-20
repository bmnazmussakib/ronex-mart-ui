import ProductDetailsPage from './[id]/page';

export default function DefaultProductPage() {
  return <ProductDetailsPage params={Promise.resolve({ id: "1" })} />;
}
