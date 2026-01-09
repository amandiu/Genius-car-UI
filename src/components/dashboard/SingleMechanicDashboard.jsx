import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTools,
  FaDollarSign,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

/* ---------- REUSABLE STAT CARD ---------- */
const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
    <div className={`text-3xl mb-3 ${color}`}>{icon}</div>
    <h2 className="font-semibold text-slate-700">{title}</h2>
    <p className="text-slate-500 mt-1">{value}</p>
  </div>
);

const SingleMechanicDashboard = () => {
  const { id } = useParams();
  const [mechanic, setMechanic] = useState(null);

  useEffect(() => {
    // 🔹 Simulated API Response
    setMechanic({
      id,
      name: "John Doe",
      email: "john@example.com",
      phone: "+880 1711-000000",
      location: "Dhaka, Bangladesh",
      role: "mechanic",
      experience: "5 Years",
      status: "Active",
      rating: 4.8,

      jobsCompleted: 124,

      earnings: {
        today: 1200,
        week: 8400,
        month: 32400,
        total: 124000,
      },

      payouts: [
        { id: 1, date: "2026-01-07", amount: 3200, method: "bKash" },
        { id: 2, date: "2026-01-05", amount: 2800, method: "Nagad" },
        { id: 3, date: "2026-01-03", amount: 4100, method: "Bank" },
        { id: 4, date: "2026-01-01", amount: 3600, method: "bKash" },
        { id: 5, date: "2025-12-29", amount: 2900, method: "Bank" },
      ],
    });
  }, [id]);

  if (!mechanic) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold">Mechanic Dashboard</h1>
          <p className="text-sm opacity-90">
            Profile, earnings & performance overview
          </p>
        </div>

        {/* PROFILE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-4xl font-bold">
              {mechanic.name.charAt(0)}
            </div>
            <h2 className="mt-3 font-semibold text-lg text-slate-800">
              {mechanic.name}
            </h2>
            <span className="flex items-center gap-1 text-emerald-600 text-sm mt-1">
              <FaCheckCircle /> {mechanic.status}
            </span>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="flex items-center gap-2 text-slate-600">
              <FaEnvelope className="text-orange-500" /> {mechanic.email}
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <FaPhone className="text-orange-500" /> {mechanic.phone}
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <FaMapMarkerAlt className="text-orange-500" /> {mechanic.location}
            </p>
            <p className="flex items-center gap-2 text-slate-600">
              <FaUser className="text-orange-500" /> Experience:{" "}
              {mechanic.experience}
            </p>
          </div>
        </div>

        {/* CORE STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<FaTools />}
            title="Jobs Completed"
            value={mechanic.jobsCompleted}
            color="text-orange-500"
          />
          <StatCard
            icon={<FaDollarSign />}
            title="Total Earnings"
            value={`৳ ${mechanic.earnings.total}`}
            color="text-emerald-600"
          />
          <StatCard
            icon={<FaStar />}
            title="Rating"
            value={`${mechanic.rating} ★`}
            color="text-amber-400"
          />
          <StatCard
            icon={<FaUser />}
            title="Role"
            value="Professional Mechanic"
            color="text-slate-600"
          />
        </div>

        {/* EARNINGS SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<FaDollarSign />}
            title="Today"
            value={`৳ ${mechanic.earnings.today}`}
            color="text-green-600"
          />
          <StatCard
            icon={<FaDollarSign />}
            title="This Week"
            value={`৳ ${mechanic.earnings.week}`}
            color="text-blue-600"
          />
          <StatCard
            icon={<FaDollarSign />}
            title="This Month"
            value={`৳ ${mechanic.earnings.month}`}
            color="text-purple-600"
          />
          <StatCard
            icon={<FaDollarSign />}
            title="Lifetime"
            value={`৳ ${mechanic.earnings.total}`}
            color="text-emerald-700"
          />
        </div>

        {/* EARNINGS CHART */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            Monthly Earnings Overview
          </h2>

          <div className="flex items-end gap-4 h-40">
            {[40, 65, 80, 55, 90, 70].map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 bg-orange-500 rounded-t-lg transition-all"
                  style={{ height: `${value}%` }}
                />
                <span className="text-xs text-slate-500">
                  M{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LAST PAYOUTS */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            Last 5 Payouts
          </h2>

          <ul className="divide-y">
            {mechanic.payouts.map((payout) => (
              <li
                key={payout.id}
                className="flex justify-between items-center py-3"
              >
                <div>
                  <p className="font-medium text-slate-700">
                    {payout.method}
                  </p>
                  <p className="text-xs text-slate-500">
                    {payout.date}
                  </p>
                </div>

                <span className="font-semibold text-emerald-600">
                  ৳ {payout.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SingleMechanicDashboard;
