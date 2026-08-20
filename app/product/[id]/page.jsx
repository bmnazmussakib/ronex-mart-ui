import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import RelatedProductsVertical from '@/components/product/RelatedProductsVertical';
import RecentlyViewedProducts from '@/components/product/RecentlyViewedProducts';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  // Mock product data
  const productData = {
    id: id || "1",
    title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
    brand: "Unilever Bangladesh",
    category: "Cleaning Supplies",
    rating: 4.8,
    reviewsCount: 128,
    price: "৳70",
    oldPrice: "৳85",
    discount: "৳15 OFF",
    stock: "In Stock",
    sku: `RM-WHL-${id || '101'}`,
    weights: ["500 g", "1 kg", "2 kg"],
    images: [
      "/img/product/product (1).jpeg",
      "/img/product/product (2).jpeg",
      "/img/product/product (3).jpeg",
      "/img/product/product (4).jpeg",
    ],
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Grocery & Food', href: '/category' },
    { label: productData.category, href: '/category' },
    { label: productData.title },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-3 pb-24 sm:pb-8">
      {/* Breadcrumb Bar */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
        {/* Left: Product Gallery */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ProductGallery images={productData.images} defaultBadge={productData.discount} />
        </div>

        {/* Middle: Product Info */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <ProductInfo product={productData} />
        </div>

        {/* Right: Vertical Related Products (Desktop Only - hidden on mobile & tablets) */}
        <div className="hidden lg:block lg:col-span-3">
          <RelatedProductsVertical />
        </div>
      </div>

      {/* Product Description, Specifications & Reviews Tabs */}
      <ProductTabs />

      {/* Horizontal Related Products Carousel (Mobile & Tablet Only - hidden on desktop) */}
      <div className="block lg:hidden">
        <RelatedProducts />
      </div>

      {/* Recently Viewed Products Carousel (All Devices) */}
      <RecentlyViewedProducts />
    </div>
  );
}
