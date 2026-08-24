import CategoryViewClient from '@/components/category/CategoryViewClient';

export const metadata = {
  title: 'Monthly Essential Items - RonexMart',
  description: 'Shop monthly essential grocery and household items at best prices on RonexMart.',
};

export default function MonthlyEssentialPage() {
  const currentTitle = 'Monthly Essential Items';

  const productsList = [
    {
      id: "m201",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Pure Cooking Oil Bottle 5L",
      category: "COOKING ESSENTIALS",
      rating: "4.9",
      weight: "5 L",
      price: "৳850",
      oldPrice: "৳950",
      badge: "Monthly Essential",
    },
    {
      id: "m202",
      image: "/img/product/product (7).jpeg",
      title: "Premium Miniket Rice Special Pack 5kg",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "5 kg",
      price: "৳380",
      oldPrice: "৳420",
      badge: "Top Pick",
    },
    {
      id: "m203",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar Pure White 1kg",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "1 kg",
      price: "৳90",
      oldPrice: "৳100",
      badge: "Daily Need",
    },
    {
      id: "m204",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Vacuum Salt 1kg",
      category: "GROCERY & FOOD",
      rating: "4.8",
      weight: "1 kg",
      price: "৳45",
      oldPrice: "৳50",
    },
    {
      id: "m205",
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
      id: "m206",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon 400g",
      category: "CLEANING SUPPLIES",
      rating: "4.5",
      weight: "400 g",
      price: "৳60",
      oldPrice: "৳75",
    },
    {
      id: "m207",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce Glass Bottle 340g",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "340 g",
      price: "৳70",
      oldPrice: "৳85",
    },
    {
      id: "m208",
      image: "/img/product/product (8).jpeg",
      title: "Red Lentils (Moshoor Dal) Premium Pack 1kg",
      category: "GROCERY & FOOD",
      rating: "4.8",
      weight: "1 kg",
      price: "৳130",
      oldPrice: "৳145",
      badge: "Essential",
    },
    {
      id: "m209",
      image: "/img/product/product (9).jpeg",
      title: "Teer Whole Wheat Atta 2kg",
      category: "COOKING ESSENTIALS",
      rating: "4.7",
      weight: "2 kg",
      price: "৳125",
      oldPrice: "৳140",
    },
    {
      id: "m210",
      image: "/img/product/product (10).jpeg",
      title: "Lux Beauty Soap Soft Rose 100g (Pack of 4)",
      category: "PERSONAL CARE",
      rating: "4.8",
      weight: "400 g",
      price: "৳210",
      oldPrice: "৳240",
      badge: "Saver Pack",
    },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Monthly Essential Items' },
  ];

  return (
    <CategoryViewClient
      currentTitle={currentTitle}
      productsList={productsList}
      breadcrumbItems={breadcrumbItems}
    />
  );
}
