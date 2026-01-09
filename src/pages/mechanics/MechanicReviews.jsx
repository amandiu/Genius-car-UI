import React, { useEffect, useMemo, useState } from "react";
import { FaStar, FaUserCircle, FaFlag } from "react-icons/fa";

/* ======================
   Fake Reviews
====================== */
const fakeReviews = [
  {
    id: 1,
    customerName: "Rahim Ahmed",
    rating: 5,
    comment: "Excellent service! Mechanic was very professional.",
    date: "2026-01-05",
  },
  {
    id: 2,
    customerName: "Karim Hossain",
    rating: 4,
    comment: "Good service but arrived a bit late.",
    date: "2026-01-03",
  },
  {
    id: 3,
    customerName: "Nusrat Jahan",
    rating: 5,
    comment: "Very polite and fixed the issue quickly.",
    date: "2025-12-29",
  },
  {
    id: 4,
    customerName: "Tanvir Hasan",
    rating: 3,
    comment: "Service was okay, could be improved.",
    date: "2025-12-22",
  },
];

/* ======================
   Rating Stars
====================== */
const RatingStars = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={`text-sm ${
          star <= rating ? "text-amber-400" : "text-slate-300"
        }`}
      />
    ))}
  </div>
);

const MechanicReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("recent");

  useEffect(() => {
    setReviews(fakeReviews);
  }, []);

  /* ======================
     Calculations
  ====================== */
  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length || 0;

  const ratingCount = useMemo(() => {
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => count[r.rating]++);
    return count;
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    const sorted = [...reviews];
    if (filter === "recent") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === "low") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (filter === "high") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [reviews, filter]);

  const handleReport = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to report this review as fake?"
    );
    if (confirmed) {
      alert("Thank you. The review has been reported for moderation.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold">Customer Reviews</h1>
          <p className="opacity-90 mt-2">Verified feedback from car owners</p>
        </div>

        {/* SUMMARY + BREAKDOWN */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Average */}
          <div className="rounded-3xl bg-white p-6 shadow">
            <p className="text-sm text-slate-500">Average Rating</p>
            <h2 className="text-4xl font-bold text-slate-800 mt-1">
              {averageRating.toFixed(1)} / 5
            </h2>
            <RatingStars rating={Math.round(averageRating)} />
            <p className="mt-2 text-sm text-slate-500">
              {reviews.length} total reviews
            </p>
          </div>

          {/* Breakdown */}
          <div className="rounded-3xl bg-white p-6 shadow col-span-2">
            <p className="text-sm font-medium text-slate-700 mb-4">
              Rating Breakdown
            </p>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3 mb-2">
                <span className="text-sm w-10">{star}★</span>
                <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all"
                    style={{
                      width: `${
                        reviews.length
                          ? (ratingCount[star] / reviews.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm text-slate-500 w-8">
                  {ratingCount[star]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FILTER */}
        <div className="flex justify-end">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border bg-orange-300 border-slate-200 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="recent">Most Recent</option>
            <option value="high">Highest Rating</option>
            <option value="low">Lowest Rating</option>
          </select>
        </div>

        {/* REVIEWS */}
        <div className="space-y-5">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white p-6 shadow hover:shadow-xl transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <FaUserCircle className="text-4xl text-orange-400" />
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {review.customerName}
                    </h3>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                <span className="text-xs text-slate-400">
                  {review.date}
                </span>
              </div>

              <p className="mt-4 text-slate-600">
                “{review.comment}”
              </p>

              {/* REPORT */}
              <button
                onClick={() => handleReport(review.id)}
                className="mt-4 flex items-center gap-2 text-xs text-red-500 hover:text-red-600"
              >
                <FaFlag /> Report fake review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicReviews;
