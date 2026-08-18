export default function FloatingCartWidget() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#0b5d44] text-white p-2.5 rounded-l-xl shadow-xl flex flex-col items-center gap-1 text-center cursor-pointer hover:bg-[#084c38] transition-all">
      <i className="fa-solid fa-cart-shopping text-base"></i>
      <span className="text-[9px] font-semibold tracking-wider uppercase">Item: 0</span>
      <span className="text-[10px] font-bold border-t border-emerald-600/60 pt-1 w-full font-taka">৳ 0</span>
    </div>
  );
}
