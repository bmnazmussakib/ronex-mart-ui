'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileOverviewTab from '@/components/profile/ProfileOverviewTab';
import ProfileOrdersTab from '@/components/profile/ProfileOrdersTab';
import ProfileWishlistTab from '@/components/profile/ProfileWishlistTab';
import ProfileAddressesTab from '@/components/profile/ProfileAddressesTab';
import ProfileSettingsTab from '@/components/profile/ProfileSettingsTab';

function ProfilePageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'overview');

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const [user, setUser] = useState({
    fullName: 'Tanvir Ahmed',
    email: 'tanvir.ahmed@example.com',
    phone: '01712345678',
    gender: 'Male',
    dob: '1996-08-15',
    city: 'Dhaka',
  });

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Account', href: '/profile' },
    { label: 'My Profile' },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-3 pb-24 sm:pb-8">
      {/* Breadcrumb Bar */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* Left Column: Profile Sidebar */}
        <div className="lg:col-span-3 lg:sticky lg:top-[135px]">
          <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
        </div>

        {/* Right Column: Tab View Content */}
        <div className="lg:col-span-9">
          {activeTab === 'overview' && (
            <ProfileOverviewTab user={user} setUser={setUser} />
          )}

          {activeTab === 'orders' && (
            <ProfileOrdersTab />
          )}

          {activeTab === 'wishlist' && (
            <ProfileWishlistTab />
          )}

          {activeTab === 'addresses' && (
            <ProfileAddressesTab />
          )}

          {activeTab === 'settings' && (
            <ProfileSettingsTab />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading Profile...</div>}>
      <ProfilePageContent />
    </Suspense>
  );
}
