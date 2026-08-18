import HeroBanners from "@/components/home/HeroBanners";
import PromoSlider from "@/components/home/PromoSlider";
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
    <>
      <HeroBanners />
      <PromoSlider />
      <TrendingCategories />
      <TopBrandsSlider />
      <PantrySection />
      <PopularProductsSlider />
      <PromoBannerSingle />
      <TabbedProductsSlider />
      <DualPromoBanners />
      <NewsletterSection />
    </>
  );
}
