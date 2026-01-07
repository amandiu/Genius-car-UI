import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { mechanicsData } from "../data/mechanics.data"; // 15+ mechanics

// ⭐ RatingStars Component
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`${
            i < fullStars ? "text-yellow-400" : "text-gray-300 dark:text-gray-500"
          }`}
        />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStar} className="text-yellow-400" />}
      <span className="ml-2 text-gray-900 dark:text-gray-100 font-semibold">{rating}</span>
    </div>
  );
};

// 🔍 Filter Component
const MechanicFilter = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <input
        type="text"
        placeholder="Search mechanic..."
        value={filters.search}
        onChange={e => handleChange("search", e.target.value)}
        className="input input-bordered w-full md:w-1/3 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      />

      <select
        value={filters.skill}
        onChange={e => handleChange("skill", e.target.value)}
        className="select select-bordered w-full md:w-1/4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      >
        <option value="">All Services</option>
        <option value="Engine">Engine</option>
        <option value="Brake">Brake</option>
        <option value="AC">AC</option>
        <option value="Electrical">Electrical</option>
      </select>

      <select
        value={filters.rating}
        onChange={e => handleChange("rating", e.target.value)}
        className="select select-bordered w-full md:w-1/4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      >
        <option value="">All Ratings</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
      </select>

      <select
        value={filters.availability}
        onChange={e => handleChange("availability", e.target.value)}
        className="select select-bordered w-full md:w-1/4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
      >
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="busy">Busy</option>
      </select>
    </div>
  );
};

// 🔧 Main Mechanics Dashboard
const MechanicsDashboard = () => {
  const [filters, setFilters] = useState({
    search: "",
    skill: "",
    rating: "",
    availability: "all",
  });
  const [sortBy, setSortBy] = useState({ key: "", order: "" });
  const [selectedMechanic, setSelectedMechanic] = useState(mechanicsData[0]);
  const [openModal, setOpenModal] = useState(false);

  // Filter + Sort Mechanics
  const filteredMechanics = useMemo(() => {
    return mechanicsData
      .filter(m => {
        const matchSearch = m.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchSkill = !filters.skill || m.skills.includes(filters.skill);
        const matchRating = !filters.rating || m.rating >= Number(filters.rating);
        const matchAvailability =
          filters.availability === "all"
            ? true
            : filters.availability === "available"
            ? m.available
            : !m.available;
        return matchSearch && matchSkill && matchRating && matchAvailability;
      })
      .sort((a, b) => {
        if (!sortBy.key) return 0;
        const valA = a[sortBy.key];
        const valB = b[sortBy.key];
        if (valA < valB) return sortBy.order === "asc" ? -1 : 1;
        if (valA > valB) return sortBy.order === "asc" ? 1 : -1;
        return 0;
      });
  }, [filters, sortBy]);

  const handleSort = key => {
    setSortBy(prev => ({
      key,
      order: prev.key === key ? (prev.order === "asc" ? "desc" : "asc") : "asc",
    }));
  };

  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Mechanics Management
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Search, filter, sort, view profile, and book mechanics easily
        </p>
      </div>

      {/* Filters */}
      <MechanicFilter filters={filters} setFilters={setFilters} />

      {/* Table + Profile */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* Mechanics Table */}
        <div className="flex-1 overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <table className="table w-full">
            <thead>
              <tr className="text-gray-700 dark:text-gray-200">
                <th>#</th>
                <th>Name</th>
                <th>Skills</th>
                <th className="cursor-pointer" onClick={() => handleSort("experience")}>
                  Experience {sortBy.key === "experience" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
                </th>
                <th className="cursor-pointer" onClick={() => handleSort("rating")}>
                  Rating {sortBy.key === "rating" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
                </th>
                <th className="cursor-pointer" onClick={() => handleSort("price")}>
                  Price {sortBy.key === "price" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
                </th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredMechanics.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No mechanics found
                  </td>
                </tr>
              ) : (
                filteredMechanics.map((m, index) => (
                  <tr
                    key={m.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => setSelectedMechanic(m)}
                  >
                    <td>{index + 1}</td>
                    <td className="flex items-center gap-2">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {m.name}
                    </td>
                    <td>{m.skills.join(", ")}</td>
                    <td>{m.experience}</td>
                    <td><RatingStars rating={m.rating} /></td>
                    <td>৳{m.price || 0}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded text-white text-sm ${
                          m.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {m.available ? "Available" : "Busy"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Selected Mechanic Profile */}
        <div className="lg:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={selectedMechanic.img}
              alt={selectedMechanic.name}
              className="w-36 h-36 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedMechanic.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">Experience: {selectedMechanic.experience}</p>
            <p className="text-gray-700 dark:text-gray-300">Specialization: {selectedMechanic.specialization}</p>
            <RatingStars rating={selectedMechanic.rating} />
            <button
              onClick={() => setOpenModal(true)}
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition"
            >
              Book This Mechanic
            </button>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Reviews</h3>
            {selectedMechanic.reviews.length > 0 ? (
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                {selectedMechanic.reviews.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded shadow text-gray-900 dark:text-gray-100"
                  >
                    <p>"{r.comment}"</p>
                    <span className="font-semibold">{r.name}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md relative"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Booking: {selectedMechanic.name}
            </h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transition"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white font-bold"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MechanicsDashboard;
