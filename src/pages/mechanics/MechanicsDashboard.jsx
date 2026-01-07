import { useState, useMemo } from "react";
import { mechanicsData } from "../../data/mechanics.data"; // your 15+ mechanics
import RatingStars from "../../components/mechanics/RatingStars";

const MechanicsDashboard = () => {
  const [filters, setFilters] = useState({
    search: "",
    skill: "",
    rating: "",
    availability: "all", // all | available | busy
  });

  const [sortBy, setSortBy] = useState({ key: "", order: "" });

  // Filter + sort mechanics
  const filteredMechanics = useMemo(() => {
    return mechanicsData
      .filter((m) => {
        const matchSearch = m.name
          .toLowerCase()
          .includes(filters.search.toLowerCase());
        const matchSkill = !filters.skill || m.skills.includes(filters.skill);
        const matchRating =
          !filters.rating || m.rating >= Number(filters.rating);
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

  const handleSort = (key) => {
    setSortBy((prev) => ({
      key,
      order: prev.key === key && prev.order === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Mechanics Management
        </h1>
        <p className="text-gray-500">
          Filter, sort, and manage all mechanics efficiently
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4 items-center">
        <div className="flex gap-2 flex-wrap items-center">
          <input
            type="text"
            placeholder="Search mechanic..."
            className="input input-bordered w-full md:w-64"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
          <select
            className="select select-bordered w-full md:w-40"
            value={filters.skill}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, skill: e.target.value }))
            }
          >
            <option value="">All Skills</option>
            <option value="Engine">Engine</option>
            <option value="Brake">Brake</option>
            <option value="AC">AC</option>
            <option value="Electrical">Electrical</option>
          </select>
          <select
            className="select select-bordered w-full md:w-32"
            value={filters.rating}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, rating: e.target.value }))
            }
          >
            <option value="">All Ratings</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </select>
          <select
            className="select select-bordered w-full md:w-32"
            value={filters.availability}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, availability: e.target.value }))
            }
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full bg-white dark:bg-gray-800 rounded-lg shadow">
          <thead>
            <tr className="text-gray-700 dark:text-gray-200">
              <th>#</th>
              <th>Name</th>
              <th>Skills</th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("experience")}
              >
                Experience {sortBy.key === "experience" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
              </th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("rating")}
              >
                Rating {sortBy.key === "rating" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
              </th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("price")}
              >
                Price {sortBy.key === "price" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
              </th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredMechanics.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No mechanics found
                </td>
              </tr>
            ) : (
              filteredMechanics.map((m, idx) => (
                <tr
                  key={m.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td>{idx + 1}</td>
                  <td className="flex items-center gap-2">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span>{m.name}</span>
                  </td>
                  <td>{m.skills.join(", ")}</td>
                  <td>{m.experience} yrs</td>
                  <td>
                    <RatingStars rating={m.rating} />
                  </td>
                  <td>৳{m.price}</td>
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
    </div>
  );
};

export default MechanicsDashboard;
