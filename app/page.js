import HeroBanners from "@/components/home/HeroBanners";
import TrendingCategories from "@/components/home/TrendingCategories";
import TopBrandsSlider from "@/components/home/TopBrandsSlider";
import PantrySection from "@/components/home/PantrySection";
import PopularProductsSlider from "@/components/home/PopularProductsSlider";
import PromoBannerSingle from "@/components/home/PromoBannerSingle";
import TabbedProductsSlider from "@/components/home/TabbedProductsSlider";
import DualPromoBanners from "@/components/home/DualPromoBanners";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-16 py-1">
      <HeroBanners />
      <TrendingCategories />
      <PopularProductsSlider />
      <TopBrandsSlider />
      <PantrySection />
      <TabbedProductsSlider />
      <PromoBannerSingle />
      <DualPromoBanners />
      <NewsletterSection />
    </div>
  );
}
