import CategorySlugPage from './[slug]/page';

export default function DefaultCategoryPage() {
  return <CategorySlugPage params={Promise.resolve({ slug: "cooking-essentials" })} />;
}
