import CategoryViewClient from '@/components/category/CategoryViewClient';

export default async function BrandProductsPage({ params }) {
  const { slug } = await params;

  const brandTitleMap = {
    'unilever': 'Unilever Bangladesh',
    'pran': 'PRAN Foods',
    'fresh': 'Fresh (Meghna Group)',
    'aci': 'ACI Pure',
    'square': 'Square Food & Beverage',
    'nestle': 'Nestlé Bangladesh',
    'ispahani': 'Ispahani Tea',
    'radhuni': 'Radhuni Spices',
    'bombay-sweets': 'Bombay Sweets',
    'kazi-farms': 'Kazi Farms Kitchen',
    'olympic': 'Olympic Biscuits',
    'teer': 'Teer Consumer Goods',
    'aarong': 'Aarong Dairy',
  };

  const currentTitle = brandTitleMap[slug] || (slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Brand Shop');

  const productsList = [
    {
      id: "b301",
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
      id: "b302",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon",
      category: "CLEANING SUPPLIES",
      rating: "4.5",
      weight: "400 g bar",
      price: "৳60",
      oldPrice: "৳70",
    },
    {
      id: "b303",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce Glass Bottle",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "340 g bottle",
      price: "৳70",
      oldPrice: "৳85",
    },
    {
      id: "b304",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar Pure White",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "1 kg",
      price: "৳90",
      oldPrice: "৳100",
      badge: "Best Seller",
    },
    {
      id: "b305",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Vacuum Salt",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "1 kg",
      price: "৳45",
      oldPrice: "৳50",
    },
    {
      id: "b306",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Pure Cooking Oil Bottle 5L",
      category: "COOKING ESSENTIALS",
      rating: "4.9",
      weight: "5 L",
      price: "৳850",
      oldPrice: "৳950",
      badge: "Top Choice",
    },
    {
      id: "b307",
      image: "/img/product/product (7).jpeg",
      title: "Premium Miniket Rice Special Pack 5kg",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "5 kg",
      price: "৳380",
      oldPrice: "৳420",
    },
    {
      id: "b308",
      image: "/img/product/product (10).jpeg",
      title: "Lux Beauty Soap Soft Rose 100g (Pack of 4)",
      category: "PERSONAL CARE",
      rating: "4.8",
      weight: "400 g",
      price: "৳210",
      oldPrice: "৳240",
    },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Brand Shop', href: '/brand-shop' },
    { label: currentTitle },
  ];

  return (
    <CategoryViewClient
      currentTitle={currentTitle}
      productsList={productsList}
      breadcrumbItems={breadcrumbItems}
    />
  );
}
