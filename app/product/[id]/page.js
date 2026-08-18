import Link from 'next/link';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { FaChevronRight } from 'react-icons/fa6';

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  // Mock products mapping
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

  return (
    <div className="flex flex-col gap-5 py-2">
      {/* Breadcrumb Bar */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm overflow-x-auto">
        <Link href="/" className="hover:text-[#006a52] transition-colors whitespace-nowrap">
          Home
        </Link>
        <FaChevronRight className="text-[9px] text-slate-300 shrink-0" />
        <Link href="#" className="hover:text-[#006a52] transition-colors whitespace-nowrap">
          Grocery & Food
        </Link>
        <FaChevronRight className="text-[9px] text-slate-300 shrink-0" />
        <Link href="#" className="hover:text-[#006a52] transition-colors whitespace-nowrap">
          {productData.category}
        </Link>
        <FaChevronRight className="text-[9px] text-slate-300 shrink-0" />
        <span className="text-slate-800 font-bold truncate max-w-xs">
          {productData.title}
        </span>
      </nav>

      {/* Main Details Grid: Left Gallery + Right Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5">
          <ProductGallery images={productData.images} defaultBadge={productData.discount} />
        </div>
        <div className="lg:col-span-7">
          <ProductInfo product={productData} />
        </div>
      </div>

      {/* Description & Reviews Tabs */}
      <ProductTabs />

      {/* Related Products Carousel */}
      <RelatedProducts />
    </div>
  );
}
