import { Roboto, Hind_Siliguri } from "next/font/google";
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
import FloatingContactWidget from "@/components/layout/FloatingContactWidget";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "RonexMart - Everyday essentials, delivered fresh to your door",
  description: "Your trusted retail superstore supplying fresh produce & essential goods.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/img/favicon_io/favicon-32x32.png",
    apple: "/img/favicon_io/apple-touch-icon.png",
  },
  manifest: "/img/favicon_io/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${hindSiliguri.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/img/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/img/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/img/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/img/favicon_io/site.webmanifest" />
      </head>
      <body className="bg-white text-slate-800 antialiased min-h-screen flex flex-col font-sans">
        <CartProvider>
          {/* Main Header & Nav (Sticky Top) */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <TopNoticeBar />
            <MainHeader />
            <SecondaryNav />
          </header>

          {/* Main Layout Area */}
          <div className="w-full flex items-start flex-1">
            {/* Left Sidebar (Desktop Fixed, Mobile & Tablet Left Side Drawer) */}
            <LeftSidebar />

            {/* Right Column: Body Content + Footer at bottom */}
            <div className="flex-1 min-w-0 flex flex-col min-h-[calc(100vh-115px)] justify-between transition-all duration-300 ease-in-out">
              <main className="flex-1 flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5">
                {children}
              </main>
              {/* Footer placed inside right column under body contents */}
              <Footer />
            </div>
          </div>

          {/* Floating Cart Widget */}
          <FloatingCartWidget />

          {/* Floating Contact Support Widget */}
          <FloatingContactWidget />

          {/* Mobile Floating Bottom Navigation */}
          <MobileBottomNav />

          {/* Slide-over Right Cart Drawer */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
