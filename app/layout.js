import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TopNoticeBar from "@/components/layout/TopNoticeBar";
import MainHeader from "@/components/layout/MainHeader";
import SecondaryNav from "@/components/layout/SecondaryNav";
import LeftSidebar from "@/components/layout/LeftSidebar";
import FloatingCartWidget from "@/components/layout/FloatingCartWidget";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "RonexMart - Everyday essentials, delivered fresh to your door",
  description: "Your trusted wholesale superstore supplying fresh produce & essential goods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-[#f4f7f2] text-slate-800 antialiased min-h-screen flex flex-col font-sans">
        {/* Top Notice */}
        <TopNoticeBar />

        {/* Main Header & Nav */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <MainHeader />
          <SecondaryNav />
        </header>

        {/* Main Body Area with Sidebar */}
        <main className="w-full flex items-start flex-1">
          <LeftSidebar />
          <div className="flex-1 min-w-0 flex flex-col gap-4 p-4 lg:p-5">
            {children}
          </div>
        </main>

        {/* Floating Cart Widget */}
        <FloatingCartWidget />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
