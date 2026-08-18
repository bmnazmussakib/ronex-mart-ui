import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CartProvider } from "@/context/CartContext";
import TopNoticeBar from "@/components/layout/TopNoticeBar";
import MainHeader from "@/components/layout/MainHeader";
import SecondaryNav from "@/components/layout/SecondaryNav";
import LeftSidebar from "@/components/layout/LeftSidebar";
import FloatingCartWidget from "@/components/layout/FloatingCartWidget";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "RonexMart - Everyday essentials, delivered fresh to your door",
  description: "Your trusted wholesale superstore supplying fresh produce & essential goods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}>
      <body className="bg-[#f4f7f2] text-slate-800 antialiased min-h-screen flex flex-col font-sans">
        <CartProvider>
          {/* Top Notice */}
          <TopNoticeBar />

          {/* Main Header & Nav (Fixed Top) */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <MainHeader />
            <SecondaryNav />
          </header>

          {/* Main Layout Area */}
          <div className="w-full flex items-start flex-1">
            {/* Fixed Left Sidebar */}
            <LeftSidebar />

            {/* Right Column: Body Content + Footer at bottom */}
            <div className="flex-1 min-w-0 flex flex-col min-h-[calc(100vh-115px)] justify-between">
              <main className="flex-1 flex flex-col gap-4 p-4 lg:p-5">
                {children}
              </main>
              {/* Footer placed inside right column under body contents */}
              <Footer />
            </div>
          </div>

          {/* Floating Cart Widget */}
          <FloatingCartWidget />

          {/* Slide-over Right Cart Drawer */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
