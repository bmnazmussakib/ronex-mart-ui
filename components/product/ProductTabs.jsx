'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfStroke, FaCheck, FaPenToSquare, FaXmark, FaCircleCheck } from 'react-icons/fa6';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSuccessMsg, setReviewSuccessMsg] = useState('');

  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      name: 'Tanvir Ahmed',
      rating: 5,
      date: '2 days ago',
      comment: 'Great quality powder. Cleaning power is excellent for everyday clothes and smells really fresh!',
      verified: true,
    },
    {
      id: 2,
      name: 'Nusrat Jahan',
      rating: 4,
      date: '5 days ago',
      comment: 'Authentic product with good packaging. Value for money.',
      verified: true,
    },
  ]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;

    const newReviewItem = {
      id: Date.now(),
      name: reviewerName.trim() || 'Anonymous Customer',
      rating: newRating,
      date: 'Just now',
      comment: reviewComment.trim(),
      verified: true,
    };

    setReviewsList([newReviewItem, ...reviewsList]);
    setReviewerName('');
    setReviewComment('');
    setNewRating(5);
    setShowReviewForm(false);
    setReviewSuccessMsg('Thank you! Your review has been submitted successfully.');
    setTimeout(() => setReviewSuccessMsg(''), 4000);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-2xs">
      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-200 bg-slate-50 px-2 sm:px-3 pt-2 overflow-x-auto gap-1 sm:gap-2 custom-scrollbar">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'description'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('specifications')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'specifications'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'reviews'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Reviews ({reviewsList.length + 126})
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {/* 1. DESCRIPTION TAB */}
        {activeTab === 'description' && (
          <div className="space-y-3.5 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">About this item</h3>
            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
              Wheel Washing Powder 2 in 1 Clean & Fresh is specially formulated to deliver sparkling clean clothes with every wash. Its advanced stain removal technology dissolves tough grime, food stains, and daily dirt while protecting fabric fibers.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 font-normal text-slate-600 text-xs sm:text-sm">
              <li>Dual action cleaning with long-lasting freshness</li>
              <li>Removes stubborn stains without fading colors</li>
              <li>Suitable for both hand wash and top-loading washing machines</li>
              <li>Enriched with fresh floral fragrance that keeps clothes smelling great all day</li>
            </ul>
          </div>
        )}

        {/* 2. SPECIFICATIONS TAB */}
        {activeTab === 'specifications' && (
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">Technical Specifications</h3>
            <div className="divide-y divide-slate-100 max-w-xl text-xs sm:text-sm rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Brand</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Unilever Bangladesh</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Pack Weight</span>
                <span className="sm:col-span-2 font-medium text-slate-800">500 g</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Form</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Detergent Powder</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Country of Origin</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Bangladesh</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <div id="reviews" className="space-y-4 sm:space-y-5">
            {/* Success Toast */}
            {reviewSuccessMsg && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3 rounded-lg flex items-center gap-2 animate-in fade-in">
                <FaCircleCheck className="text-[#006a52] text-sm shrink-0" />
                <span>{reviewSuccessMsg}</span>
              </div>
            )}

            {/* Customer Ratings Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">Customer Ratings & Reviews</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">4.8</span>
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs sm:text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">• {reviewsList.length + 126} verified reviews</span>
                </div>
              </div>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="flex items-center gap-1.5 bg-[#006a52] hover:bg-[#005240] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs cursor-pointer shrink-0"
              >
                <FaPenToSquare className="text-xs" />
                <span>{showReviewForm ? 'Cancel Review' : 'Write a Review'}</span>
              </button>
            </div>

            {/* Write a Review Form */}
            {showReviewForm && (
              <form onSubmit={handleReviewSubmit} className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                  <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Write Your Review</h4>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <FaXmark className="text-sm" />
                  </button>
                </div>

                {/* Rating Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Your Rating:</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-lg sm:text-xl transition-colors cursor-pointer p-0.5"
                      >
                        <FaStar
                          className={
                            star <= (hoverRating || newRating)
                              ? 'text-amber-500'
                              : 'text-slate-300'
                          }
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-slate-600 ml-2">
                      {hoverRating || newRating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Your Name (Optional):</label>
                  <input
                    type="text"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#006a52] focus:ring-1 focus:ring-[#006a52]"
                  />
                </div>

                {/* Review Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Your Review *</label>
                  <textarea
                    rows="3"
                    required
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="What did you like or dislike about this product?"
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#006a52] focus:ring-1 focus:ring-[#006a52]"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-4 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-[#006a52] hover:bg-[#005240] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}

            {/* Review Cards List */}
            <div className="space-y-3 sm:space-y-4">
              {reviewsList.map((rev) => (
                <div key={rev.id} className="p-3.5 sm:p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2 animate-in fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 text-xs sm:text-sm">{rev.name}</span>
                      {rev.verified && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                          <FaCheck className="text-[9px]" /> Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < rev.rating ? 'text-amber-500' : 'text-slate-300'} />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

