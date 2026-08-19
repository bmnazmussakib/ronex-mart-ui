import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import CategoryHeader from '@/components/category/CategoryHeader';
import CategoryFilterSidebar from '@/components/category/CategoryFilterSidebar';
import CategoryPagination from '@/components/category/CategoryPagination';
import { FaChevronRight } from 'react-icons/fa6';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default async function CategorySlugPage({ params }) {
  const { slug } = await params;

  const categoryTitleMap = {
    'cooking-essentials': 'Cooking Essentials',
    'grocery-and-food': 'Grocery & Food',
    'beverages': 'Beverages & Drinks',
    'cleaning-supplies': 'Cleaning & Household Supplies',
    'personal-care': 'Personal Care & Hygiene',
    'bakery-and-dairy': 'Bakery & Dairy Products',
  };

  const currentTitle = categoryTitleMap[slug] || (slug ? slug.replace(/-/g, ' ').toUpperCase() : 'All Categories');

  const productsList = [
    {
      id: "101",
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "500 g",
      price: "৳70",
      oldPrice: "৳85",
      badge: "15 TK OFF",
    },
    {
      id: "102",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon",
      category: "CLEANING SUPPLIES",
      rating: "4.3",
      weight: "400 g bar",
      price: "৳60",
    },
    {
      id: "103",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce Glass Bottle",
      category: "GROCERY & FOOD",
      rating: "4.5",
      weight: "340 g bottle",
      price: "৳70",
    },
    {
      id: "104",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar Pure White",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "1 kg",
      price: "৳90",
      badge: "Daily need",
    },
    {
      id: "105",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Vacuum Salt",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "1 kg",
      price: "৳45",
    },
    {
      id: "106",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Pure Cooking Oil Bottle 5L",
      category: "COOKING ESSENTIALS",
      rating: "4.8",
      weight: "5 L",
      price: "৳850",
    },
    {
      id: "107",
      image: "/img/product/product (7).jpeg",
      title: "Premium Miniket Rice Special Pack 5kg",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "5 kg",
      price: "৳380",
    },
    {
      id: "108",
      image: "/img/product/product (1).jpeg",
      title: "Kirkland Organic Raw & Unfiltered Honey",
      category: "IMPORTED FOODS",
      rating: "4.8",
      weight: "680 g",
      price: "৳1,890",
    },
  ];

    const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Grocery & Food', href: '#' },
    { label: currentTitle, href: '#' },
    { label: currentTitle },
  ];

  return (
    <div className="flex flex-col gap-5 py-2">
      {/* Breadcrumb Bar */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Category Banner Header */}
      <CategoryHeader title={currentTitle} itemCount={productsList.length} />

      {/* Main Grid: Left Filters + Right Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Filter Sidebar */}
        <div className="lg:col-span-3">
          <CategoryFilterSidebar />
        </div>

        {/* Right Product Grid */}
        <div className="lg:col-span-9 flex flex-col justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsList.map((item) => (
              <div key={item.id} className="h-full">
                <ProductCard {...item} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <CategoryPagination totalPages={4} />
        </div>
      </div>
    </div>
  );
}
