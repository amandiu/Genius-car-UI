import React from "react";
import {
  FaDollarSign,
  FaTools,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarAlt,
  FaArrowUp,
} from "react-icons/fa";

/* ======================
   Fake Earnings Data
====================== */
const earningsData = {
  today: 1200,
  week: 8400,
  month: 32400,
  total: 185000,
  completedJobs: 126,
  payouts: [
    { id: 1, date: "2026-01-06", amount: 5000, method: "bKash" },
    { id: 2, date: "2026-01-03", amount: 8000, method: "Nagad" },
    { id: 3, date: "2025-12-28", amount: 6500, method: "Bank Transfer" },
    { id: 4, date: "2025-12-20", amount: 7000, method: "bKash" },
    { id: 5, date: "2025-12-12", amount: 9000, method: "Bank Transfer" },
  ],
  chart: [
    { label: "Mon", value: 1200 },
    { label: "Tue", value: 1800 },
    { label: "Wed", value: 900 },
    { label: "Thu", value: 2200 },
    { label: "Fri", value: 1600 },
    { label: "Sat", value: 2400 },
    { label: "Sun", value: 1300 },
  ],
};

/* ======================
   Premium Stat Card
====================== */
const StatCard = ({ icon, title, value }) => (
  <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-orange-100">
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full blur-2xl" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="text-3xl text-orange-500">{icon}</div>
        <FaArrowUp className="text-emerald-500 text-sm" />
      </div>
      <p className="text-slate-500 text-sm mt-3">{title}</p>
      <h2 className="text-2xl font-extrabold text-slate-800 mt-1">
        ৳ {value.toLocaleString()}
      </h2>
    </div>
  </div>
);

const MechanicEarnings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white p-6">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 text-white p-8 rounded-3xl shadow-xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Earnings Overview
          </h1>
          <p className="text-lg opacity-90 mt-2">
            Smart insights into your income & payouts
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<FaCalendarDay />} title="Today Earnings" value={earningsData.today} />
          <StatCard icon={<FaCalendarWeek />} title="This Week" value={earningsData.week} />
          <StatCard icon={<FaCalendarAlt />} title="This Month" value={earningsData.month} />
          <StatCard icon={<FaDollarSign />} title="Total Earnings" value={earningsData.total} />
        </div>

        {/* JOBS + CHART */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* COMPLETED JOBS */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col justify-center hover:shadow-xl transition">
            <div className="text-4xl text-emerald-500 mb-4">
              <FaTools />
            </div>
            <p className="text-slate-500">Completed Jobs</p>
            <h2 className="text-4xl font-extrabold text-slate-800">
              {earningsData.completedJobs}
            </h2>
          </div>

          {/* BAR CHART */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 lg:col-span-2">
            <h3 className="font-semibold text-slate-700 mb-6">
              Weekly Earnings
            </h3>

            <div className="flex items-end gap-4 h-44">
              {earningsData.chart.map((day, index) => (
                <div key={index} className="flex flex-col items-center w-full group">
                  <div
                    className="w-7 rounded-xl bg-gradient-to-t from-orange-400 to-amber-400 group-hover:from-amber-500 group-hover:to-yellow-400 transition-all duration-300"
                    style={{ height: `${day.value / 25}px` }}
                    title={`৳ ${day.value}`}
                  />
                  <span className="text-xs mt-3 text-slate-500">
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAYOUTS */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-slate-700 mb-4">
            Recent Payouts
          </h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-3">Date</th>
                <th>Method</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {earningsData.payouts.map((payout) => (
                <tr
                  key={payout.id}
                  className="border-b last:border-none hover:bg-orange-50 transition"
                >
                  <td className="py-3">{payout.date}</td>
                  <td>{payout.method}</td>
                  <td className="text-right font-bold text-emerald-600">
                    ৳ {payout.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MechanicEarnings;
