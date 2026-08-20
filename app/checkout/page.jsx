'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import ShippingAndBillingForm from '@/components/checkout/ShippingAndBillingForm';
import CheckoutSummarySidebar from '@/components/checkout/CheckoutSummarySidebar';
import { FaChevronRight, FaCircleCheck, FaHouse } from 'react-icons/fa6';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, clearCart, subtotal } = useCart();

  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [exchangeId, setExchangeId] = useState('');
  const [needBag, setNeedBag] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('cod');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState('');

  const [shippingData, setShippingData] = useState({
    phone: '',
    email: '',
    fullName: '',
    country: 'Bangladesh',
    district: '',
    area: '',
    address: '',
    specialNote: '',
  });

  const [billingData, setBillingData] = useState({
    phone: '',
    email: '',
    fullName: '',
    country: 'Bangladesh',
    district: '',
    area: '',
    address: '',
  });

  const shippingFee = shippingData.district === 'Dhaka' ? 60 : 120;
  const vatAmount = subtotal * 0.05; // 5% VAT

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'RONEX10') {
      setDiscountAmount(50);
      alert('Promo code RONEX10 applied! ৳50 discount added.');
    } else {
      alert('Invalid promo code. Try "RONEX10"');
    }
  };

  const handleSearchExchange = () => {
    if (exchangeId.trim()) {
      alert(`Searching for exchange order ID: ${exchangeId}...`);
    }
  };

  const handlePlaceOrder = () => {
    if (!shippingData.fullName || !shippingData.phone || !shippingData.address) {
      alert('Please fill in all required shipping address details (*)!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `RM-${Math.floor(100000 + Math.random() * 900000)}`;
      clearCart();
      setIsSubmitting(false);
      const query = new URLSearchParams({
        orderId,
        name: shippingData.fullName,
        phone: shippingData.phone,
        address: `${shippingData.address}, ${shippingData.area}, ${shippingData.district}`,
        payment: selectedPayment.toUpperCase(),
        total: (subtotal + shippingFee - discountAmount).toFixed(2),
      }).toString();
      router.push(`/order-confirmation?${query}`);
    }, 1000);
  };

  if (isOrderPlaced) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-md space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006a52] mx-auto flex items-center justify-center text-3xl shadow-inner">
            <FaCircleCheck />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ORDER PLACED SUCCESSFULLY
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900 mt-3">
              Thank You For Your Order!
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Order ID: <strong className="text-slate-800 font-bold">{placedOrderId}</strong>
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Customer Name:</span>
              <strong className="text-slate-800">{shippingData.fullName}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Phone:</span>
              <strong className="text-slate-800">+880{shippingData.phone}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Shipping Location:</span>
              <strong className="text-slate-800">{shippingData.area}, {shippingData.district}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Payment Method:</span>
              <strong className="text-slate-800 uppercase">{selectedPayment}</strong>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Our customer care team will contact you shortly to confirm dispatch.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/"
              className="flex-1 bg-[#006a52] hover:bg-[#005240] text-white font-bold text-xs py-3 px-4 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <FaHouse className="text-xs" />
              <span>Back To Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '#' },
    { label: 'Checkout' },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-3 pb-28 sm:pb-8">
      {/* Breadcrumb Bar */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Grid: Left Shipping & Billing Form + Right Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <ShippingAndBillingForm
            shippingData={shippingData}
            onShippingChange={handleShippingChange}
            billingData={billingData}
            onBillingChange={handleBillingChange}
            sameAsShipping={sameAsShipping}
            setSameAsShipping={setSameAsShipping}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            onApplyPromo={handleApplyPromo}
            exchangeId={exchangeId}
            setExchangeId={setExchangeId}
            onSearchExchange={handleSearchExchange}
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-[135px]">
          <CheckoutSummarySidebar
            shippingFee={shippingFee}
            vatAmount={vatAmount}
            discountAmount={discountAmount}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            needBag={needBag}
            setNeedBag={setNeedBag}
            onPlaceOrder={handlePlaceOrder}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
