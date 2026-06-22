"use client";

import { useState } from "react";
import PageHero from "@/components/common/pagehero";
import { FaStar } from "react-icons/fa";

export default function ReviewsPage() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReview = (id: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const tripAdvisorReviews = [
    {
      id: 1,
      rating: 5,
      text: "Don't listen to the hype about other hotels! Others may be fun but class is something totally different! Absolutely wonderful week here with my 4 year old and wife! 5* service and the food is outstanding! We had the executive kind suit and it was a pleasure! Tip... fri-sat are a little more expensive but worth it as it's a lot quieter as there's less guests! The movie theatre is 5* especially as it was a private showing just for the 3 of us...",
      author: "Sefaul Islam",
      date: "1. November, 2023.",
    },
    {
      id: 2,
      rating: 5,
      text: "The Imperial Institute Of Hospitality & Hotel Management is very famous and wonderful resort to stay and visit to keep yourself away from the busyness of the city. Their amenities are good with great service. This resort is surrounded by beautiful tea gardens. I enjoyed my time there very much.",
      author: "Jagdish Shekhawat",
      date: "1. November, 2023.",
    },
    {
      id: 3,
      rating: 5,
      text: "A classic stay at the hotel made my days filled with relaxation and calm during last winter when I was there for an official trip. The swimming pool and Jacquzii was fantastic. A wide range of varieties during Breakfast was another charm of the days. The large yet cozy lounge, supportive front desk, pool services, meeting rooms were excellent. The tea gardens and reserve forest beside the hotel are woth to visit.",
      author: "Zahid",
      date: "1. November, 2023.",
    },
  ];

  const bookingReviews = [
    { id: 4, rating: 5, text: "- it's situated in a calm and quiet place.", author: "Fonseka", date: "1. November, 2023." },
    { id: 5, rating: 5, text: "- cleanness , design , food", author: "Adel", date: "1. November, 2023." },
  ];

  const googleReviews = [
    {
      id: 6,
      rating: 5,
      text: "I visited the place with my family. They have single and double bed rooms. The rooms are very cozy and comfy....",
      author: "Shihab Ahmed",
      date: "19 June 2024",
    },
    {
      id: 7,
      rating: 5,
      text: "It is an awesome place for 1/2 nights stay with family. Quality of buffet foods is superb. Summarily, it is an outstanding place and...",
      author: "Sefaul Islam",
      date: "15 June 2024",
    },
    {
      id: 8,
      rating: 5,
      text: "ইনস্টিটিউট নিয়ে নতুন করে কিছুই বলার নেই। এটা যেমন দেশের মোস্ট এক্সপেন্সিভ জায়গা গুলোর মধ্যে একটি, তেমনি তাদের সিকিউরিটি ও সার্ভিস...",
      author: "Mohai Menur",
      date: "15 June 2024",
    },
  ];

  const facebookReviews = [
    { id: 9, rating: 5, text: "- It's situated in a calm and quiet place.", author: "Fonseka", date: "1. November, 2023." },
    { id: 10, rating: 5, text: "- cleanness , design , food", author: "Adel", date: "1. November, 2023." },
    { id: 11, rating: 5, text: "Don't listen to the hype about other hotels! Others may be fun but class is something totally different! Absolutely wonderful week here with...", author: "Brent Timm", date: "1. November, 2023." },
    { id: 12, rating: 5, text: "The Imperial Institute Of Hospitality & Hotel Management is very famous and wonderful resort to stay and visit to keep yourself away from the busyness of the city. Their...", author: "Jagdish Shekhawat", date: "1. November, 2023." },
    { id: 13, rating: 5, text: "A classic stay at the hotel made my days filled with relaxation and calm during last winter when I was there for an official trip. The swimming pool an...", author: "Zahid", date: "1. November, 2023." },
    { id: 14, rating: 5, text: "We are Bangladeshi's, a family of 5 adults who are residing overseas for...", author: "100 Percent Chiropractor", date: "100 Percent" },
    { id: 15, rating: 5, text: "The PERFECT resort. Everything here was incredible. First, the staff was amazing. So helpful, so caring and so attentive. The food served in the lunc...", author: "Brent Timm", date: "1. November, 2023." },
    { id: 16, rating: 5, text: "Good for professional family.", author: "Arnim Bin Sayeed (Ar...", date: "Arnim Bin Sayeed (Arnim)" },
  ];

  const genericDescription = "The Imperial Institute Of Hospitality & Hotel Management is highly recommended as the top leisure destination by satisfied guests. It is equipped with luxurious facilities, serene environment, sumptuous cuisines and remarkable services that make the stay unforgettable. Guests have praised the resort for its excellent hospitality, comfortable rooms, cleanliness and accessibility to amenities.";

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHero title="Guest Reviews" backgroundImage="/images/cooridoor.jpg" />

      <div className="py-10 sm:py-14 md:py-20 lg:py-28 xl:py-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20 lg:space-y-28">
        
        <section className="text-left">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-primary-dark"></span>
              <p className="text-primary-dark text-xl font-semibold tracking-widest uppercase">
                Reviews from Trip Advisor
              </p>
              <span className="w-8 h-[1px] bg-primary-dark"></span>
            </div>
            <h2 className="tracking-wide text-white max-w-5xl mx-auto leading-relaxed">
              {genericDescription}
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute inset-x-10 -top-2 -bottom-2 bg-white/20 rounded-2xl md:inset-x-20 backdrop-blur-[2px] pointer-events-none z-0" />
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-10 shadow-2xl space-y-16">
              {tripAdvisorReviews.map((review) => {
                const isExpanded = !!expandedReviews[review.id];
                const shouldTruncate = review.text.length > 150;
                return (
                  <div key={review.id} className="w-full flex flex-col">
                    <div className="relative bg-white border border-neutral-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] after:content-[''] after:absolute after:-bottom-2.5 after:left-8 after:w-5 after:h-5 after:bg-white after:border-r after:border-b after:border-neutral-100 after:rotate-45">
                      <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} size={15} />
                        ))}
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                        {shouldTruncate && !isExpanded ? `${review.text.substring(0, 150)}...` : review.text}
                      </p>
                      {shouldTruncate && (
                        <button 
                          onClick={() => toggleReview(review.id)}
                          className="text-[11px] text-neutral-400 font-medium hover:underline mt-2 block text-left"
                        >
                          {isExpanded ? "Hide" : "Read more"}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-4 ml-3">
                      <div className="w-9 h-9 rounded-full border-2 border-neutral-300 bg-neutral-100 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-sm font-bold text-neutral-800 tracking-wide">{review.author}</h4>
                        <p className="text-[11px] text-neutral-400 font-medium">{review.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="text-left">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-primary-dark"></span>
              <p className="text-primary-dark text-xl font-semibold tracking-widest uppercase">
                Reviews from Booking.com
              </p>
              <span className="w-8 h-[1px] bg-primary-dark"></span>
            </div>
            <h2 className="tracking-wide text-white max-w-5xl mx-auto leading-relaxed">
              {genericDescription}
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute inset-x-4 -top-2 -bottom-2 bg-white/10 rounded-2xl md:inset-x-10 backdrop-blur-[2px] pointer-events-none z-0" />
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                {bookingReviews.map((review) => {
                  const isExpanded = !!expandedReviews[review.id];
                  const shouldTruncate = review.text.length > 60;
                  return (
                    <div key={review.id} className="w-full bg-white border border-neutral-100 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[220px]">
                      <div>
                        <div className="flex items-center gap-0.5 text-amber-400 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} size={14} />
                          ))}
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-2">
                          {shouldTruncate && !isExpanded ? `${review.text.substring(0, 60)}...` : review.text}
                        </p>
                      </div>
                      <div>
                        {shouldTruncate && (
                          <button 
                            onClick={() => toggleReview(review.id)}
                            className="text-[11px] text-neutral-400 font-medium hover:underline mb-3 block text-left"
                          >
                            {isExpanded ? "Hide" : "Read more"}
                          </button>
                        )}
                        <div className="w-full h-[1px] bg-neutral-100 my-3" />
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div className="flex flex-col truncate">
                            <h4 className="text-xs font-bold text-neutral-800 truncate">{review.author}</h4>
                            <p className="text-[10px] text-neutral-400 font-medium truncate">{review.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="text-left">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-primary-dark"></span>
              <p className="text-primary-dark text-xl font-semibold tracking-widest uppercase">
                Reviews from Google
              </p>
              <span className="w-8 h-[1px] bg-primary-dark"></span>
            </div>
            <h2 className="tracking-wide text-white max-w-5xl mx-auto leading-relaxed">
              {genericDescription}
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute inset-x-4 -top-2 -bottom-2 bg-white/10 rounded-2xl md:inset-x-10 backdrop-blur-[2px] pointer-events-none z-0" />
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {googleReviews.map((review) => {
                  const isExpanded = !!expandedReviews[review.id];
                  const shouldTruncate = review.text.length > 80;
                  return (
                    <div key={review.id} className="w-full flex flex-col">
                      <div className="relative bg-neutral-50 rounded-2xl p-5 border border-neutral-100 shadow-sm after:content-[''] after:absolute after:-bottom-2 after:left-7 after:w-4 after:h-4 after:bg-neutral-50 after:border-r after:border-b after:border-neutral-100 after:rotate-45">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <div className="flex items-center gap-0.5 text-amber-400">
                              {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} size={13} />
                              ))}
                            </div>
                            <svg className="w-3.5 h-3.5 text-blue-500 fill-current ml-0.5" viewBox="0 0 24 24">
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.72z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.46l4.11-3.22z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 6.54l4.11 3.22c.94-2.85 3.57-4.96 6.68-4.96z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-neutral-700 leading-relaxed font-normal min-h-[55px]">
                          {shouldTruncate && !isExpanded ? `${review.text.substring(0, 80)}...` : review.text}
                        </p>
                        {shouldTruncate && (
                          <button 
                            onClick={() => toggleReview(review.id)}
                            className="text-[10px] text-neutral-400 font-medium hover:underline mt-2 block text-left"
                          >
                            {isExpanded ? "Hide" : "Read more"}
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-4 ml-4">
                        <div className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center font-bold text-xs shrink-0 uppercase">
                          {review.author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-xs font-bold text-neutral-800 tracking-wide">{review.author}</h4>
                          <p className="text-[10px] text-neutral-400 font-medium">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="text-left">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-primary-dark"></span>
              <p className="text-primary-dark text-xl font-semibold tracking-widest uppercase">
                Reviews from Facebook
              </p>
              <span className="w-8 h-[1px] bg-primary-dark"></span>
            </div>
            <h2 className="tracking-wide text-white max-w-5xl mx-auto leading-relaxed">
              {genericDescription}
            </h2>
          </div>

          <div className="relative group">
            <div className="absolute inset-x-4 -top-2 -bottom-2 bg-white/10 rounded-2xl md:inset-x-10 backdrop-blur-[2px] pointer-events-none z-0" />
            <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
                {facebookReviews.map((review) => {
                  const isExpanded = !!expandedReviews[review.id];
                  const shouldTruncate = review.text.length > 100;
                  return (
                    <div key={review.id} className="w-full bg-white border border-neutral-200 rounded-lg p-5 flex flex-col justify-between min-h-[250px] shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-sky-600 fill-current" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div className="flex flex-col truncate">
                            <h4 className="text-xs font-bold text-sky-800 tracking-wide truncate">{review.author}</h4>
                            <p className="text-[10px] text-neutral-400 font-normal truncate">{review.date}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} size={12} />
                          ))}
                        </div>

                        <p className="text-xs text-neutral-700 leading-normal font-normal">
                          {shouldTruncate && !isExpanded ? `${review.text.substring(0, 100)}...` : review.text}
                        </p>
                      </div>
                      
                      {shouldTruncate && (
                        <button 
                          onClick={() => toggleReview(review.id)}
                          className="text-[10px] text-neutral-400 font-medium hover:underline mt-3 block text-left"
                        >
                          {isExpanded ? "Hide" : "Read more"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}