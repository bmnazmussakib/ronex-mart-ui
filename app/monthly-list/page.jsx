"use client";

import CategoryFilterSidebar from "@/components/category/CategoryFilterSidebar";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryPagination from "@/components/category/CategoryPagination";
import Breadcrumb from "@/components/ui/Breadcrumb";
import HorizontalProductCard from "@/components/ui/HorizontalProductCard";
import ProductCard from "@/components/ui/ProductCard";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import {
  FaBasketShopping,
  FaBorderAll,
  FaCalendarCheck,
  FaChevronRight,
  FaCircleCheck,
  FaFilter,
  FaGrip,
  FaList,
  FaTableCells,
  FaTableCellsLarge,
  FaXmark,
} from "react-icons/fa6";

export default function MonthlyListPage() {
  const { addToCart, openCart } = useCart();

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [gridView, setGridView] = useState("4cols");
  const [priceRange, setPriceRange] = useState([350, 3500]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [successMessage, setSuccessMessage] = useState("");

  const currentTitle = "My Monthly Grocery List";

  // Monthly Grocery Essentials List
  const monthlyProducts = [
    {
      id: "m-101",
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh 1kg",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "1 kg",
      price: "৳140",
      oldPrice: "৳160",
      numericPrice: 140,
    },
    {
      id: "m-102",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon 400g (Pack of 3)",
      category: "CLEANING SUPPLIES",
      rating: "4.5",
      weight: "1.2 kg",
      price: "৳180",
      numericPrice: 180,
    },
    {
      id: "m-103",
      image: "/img/product/product (3).jpeg",
      title: "Pran Tomato Ketchup & Hot Sauce Twin Pack",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "680 g",
      price: "৳150",
      numericPrice: 150,
    },
    {
      id: "m-104",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar Pure White 5kg Pack",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "5 kg",
      price: "৳450",
      numericPrice: 450,
    },
    {
      id: "m-105",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Vacuum Salt 1kg (Pack of 2)",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "2 kg",
      price: "৳90",
      numericPrice: 90,
    },
    {
      id: "m-106",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Pure Cooking Oil Can 5L",
      category: "COOKING ESSENTIALS",
      rating: "4.9",
      weight: "5 L",
      price: "৳850",
      oldPrice: "৳950",
      numericPrice: 850,
    },
    {
      id: "m-107",
      image: "/img/product/product (7).jpeg",
      title: "Premium Miniket Rice Special Pack 10kg",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "10 kg",
      price: "৳760",
      numericPrice: 760,
    },
    {
      id: "m-108",
      image: "/img/product/product (1).jpeg",
      title: "Dano Full Cream Milk Powder 1kg Tin",
      category: "DAIRY & MILK",
      rating: "4.8",
      weight: "1 kg",
      price: "৳980",
      numericPrice: 980,
    },
  ];

  const pillCategories = [
    "Monthly Staples",
    "Cooking Oils",
    "Rice & Flour",
    "Spices & Masala",
    "Washing & Cleaning",
    "Dairy Essentials",
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Account", href: "/profile" },
    { label: "My Monthly List" },
  ];

  // Dynamic Grid CSS Class generator
  const getGridClasses = () => {
    if (gridView === "list") return "grid grid-cols-1 gap-3";
    if (gridView === "2cols") return "grid grid-cols-2 gap-4";
    if (gridView === "3cols") return "grid grid-cols-2 sm:grid-cols-3 gap-4";
    if (gridView === "5cols")
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3";
    // Default 4cols
    return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4";
  };

  // Calculate Total Estimated Monthly Price
  const totalMonthlyPrice = monthlyProducts.reduce(
    (sum, item) => sum + item.numericPrice,
    0,
  );

  // Add ALL items to cart handler
  const handleAddAllToCart = () => {
    monthlyProducts.forEach((product) => {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        weight: product.weight,
        quantity: 1,
      });
    });

    setSuccessMessage(
      `All ${monthlyProducts.length} monthly items added to your cart successfully!`,
    );
    setTimeout(() => setSuccessMessage(""), 4000);
    openCart();
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5 py-1 sm:py-2">
      {/* Success Banner Notification */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between shadow-2xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <FaCircleCheck className="text-[#006a52] text-base shrink-0" />
            <span>{successMessage}</span>
          </div>
          <button
            onClick={openCart}
            className="text-xs bg-[#006a52] text-white px-3 py-1 rounded-md hover:bg-[#005240] transition-colors cursor-pointer"
          >
            View Cart
          </button>
        </div>
      )}

      {/* 1. Category Banner Header */}
      <CategoryHeader
        bannerImage="/img/hero-banner-category.png"
        alt={currentTitle}
      />

      {/* 2. Sub-Category Pill Chips (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-between gap-2 py-1">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
          {pillCategories.map((pill, idx) => (
            <button
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-[#006a52] hover:text-white text-slate-700 text-xs font-medium transition-colors shrink-0 cursor-pointer border border-slate-200/80 shadow-2xs"
            >
              {pill}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 shrink-0 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
          <FaCalendarCheck className="text-[#006a52]" />
          <span>Monthly Supply List</span>
        </div>
      </div>

      {/* 3. DESKTOP FILTER TOOLBAR BAR */}
      <div className="hidden lg:flex items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
        {/* Left: Breadcrumb Link */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 shrink-0">
          <Link
            href="/"
            className="hover:text-[#006a52] text-slate-500 transition-colors"
          >
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <span className="font-bold text-[#006a52] truncate max-w-[220px]">
            {currentTitle}
          </span>
        </div>

        {/* Center: Inline Filters */}
        <div className="flex items-center gap-3">
          {/* Price Range Slider */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs sm:text-sm shrink-0">
            <span className="text-sm font-semibold text-[#006a52] px-2 py-0.5 rounded-md font-taka">
              ৳{priceRange[0]}
            </span>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-24 sm:w-28 accent-[#006a52] cursor-pointer"
            />
            <span className="text-sm font-semibold text-[#006a52] px-2 py-0.5 rounded-md font-taka">
              ৳{priceRange[1]}
            </span>
          </div>

          {/* Select Brand Dropdown */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-300 rounded-full text-xs sm:text-sm font-medium text-slate-700 hover:border-[#006a52] focus:outline-none cursor-pointer shadow-2xs"
          >
            <option value="">Select Brand</option>
            <option value="unilever">Unilever Bangladesh</option>
            <option value="pran">PRAN Foods</option>
            <option value="fresh">Fresh (Meghna Group)</option>
            <option value="aci">ACI Pure</option>
            <option value="square">Square Food & Beverage</option>
          </select>

          {/* Sort By Relevance Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-300 rounded-full text-xs sm:text-sm font-medium text-slate-700 hover:border-[#006a52] focus:outline-none cursor-pointer shadow-2xs"
          >
            <option value="relevance">Sort By Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          {/* All Filters Button */}
          <button
            onClick={() => setIsFilterDrawerOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-medium rounded-full transition-colors cursor-pointer shadow-2xs shrink-0"
          >
            <FaFilter className="text-xs" />
            <span>All Filters</span>
          </button>
        </div>

        {/* Right: View As Grid Switcher Icons */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm font-medium text-slate-600">View As:</span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/90">
            <button
              onClick={() => setGridView("list")}
              title="List View"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === "list"
                  ? "bg-white text-[#006a52] shadow-2xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <FaList className="text-sm" />
            </button>
            <button
              onClick={() => setGridView("2cols")}
              title="2 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === "2cols"
                  ? "bg-white text-[#006a52] shadow-2xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <FaTableCellsLarge className="text-sm" />
            </button>
            <button
              onClick={() => setGridView("3cols")}
              title="3 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === "3cols"
                  ? "bg-white text-[#006a52] shadow-2xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <FaGrip className="text-sm" />
            </button>
            <button
              onClick={() => setGridView("4cols")}
              title="4 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === "4cols"
                  ? "bg-white text-[#006a52] shadow-2xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <FaBorderAll className="text-sm" />
            </button>
            <button
              onClick={() => setGridView("5cols")}
              title="5 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === "5cols"
                  ? "bg-white text-[#006a52] shadow-2xs font-bold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <FaTableCells className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BREADCRUMB BAR */}
      <div className="lg:hidden">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* MAIN PRODUCTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
        <div className="lg:hidden">
          <CategoryFilterSidebar />
        </div>

        <div className="lg:col-span-12 flex flex-col justify-between">
          <div className={getGridClasses()}>
            {monthlyProducts.map((item) => (
              <div key={item.id} className="h-full">
                {gridView === "list" ? (
                  <HorizontalProductCard item={item} />
                ) : (
                  <ProductCard {...item} />
                )}
              </div>
            ))}
          </div>

          <CategoryPagination totalPages={2} />
        </div>
      </div>

      {/* DESKTOP ALL FILTERS SLIDE-OVER DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isFilterDrawerOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isFilterDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsFilterDrawerOpen(false)}
        />
        <div
          className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
            isFilterDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-[#053b2c] text-white shrink-0">
            <div className="flex items-center gap-2">
              <FaFilter className="text-emerald-300 text-xs" />
              <span className="font-bold text-xs tracking-wider uppercase">
                Filter Products
              </span>
            </div>
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
            >
              <FaXmark className="text-base" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar">
            <CategoryFilterSidebar />
          </div>
          <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0">
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs py-2.5 rounded-full uppercase transition-colors text-center cursor-pointer shadow-xs"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM STICKY ACTION BAR: ADD ALL ITEMS TO CART (SCOPED TO BODY CONTENT) */}
      <div className="sticky bottom-20 sm:bottom-3 z-30 w-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-xl p-3 sm:p-4 my-2">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          {/* Left summary info */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-medium text-slate-800">
              <span className="w-8 h-8 rounded-full bg-[#006a52]/10 text-[#006a52] flex items-center justify-center font-bold">
                {monthlyProducts.length}
              </span>
              <span>Monthly Items Total</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="font-medium text-slate-700">
              Est. Total:{" "}
              <strong className="text-[#006a52] text-base sm:text-lg font-semibold font-taka">
                ৳{totalMonthlyPrice.toLocaleString()}
              </strong>
            </div>
          </div>

          {/* Right Add All Items to Cart Button */}
          <button
            onClick={handleAddAllToCart}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaBasketShopping className="text-sm sm:text-base" />
            <span>Add All Items to Cart ({monthlyProducts.length} Items)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
