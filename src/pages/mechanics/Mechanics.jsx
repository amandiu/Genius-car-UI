import { useState, useMemo } from "react";
import MechanicFilter from "../../components/mechanics/MechanicFilter";
import RatingStars from "../../components/mechanics/RatingStars";
import { mechanicsData } from "../../data/mechanics.data";
import { Link } from "react-router-dom";

const Mechanics = () => {
  const [filters, setFilters] = useState({
    search: "",
    skill: "",
    rating: "",
    availability: "all",
  });

  const [sortBy, setSortBy] = useState({ key: "", order: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // ✅ Pagination

  // Filter + Sort
  const filteredMechanics = useMemo(() => {
    return mechanicsData
      .filter((m) => {
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

  // Pagination Slice
  const totalPages = Math.ceil(filteredMechanics.length / itemsPerPage);
  const paginatedMechanics = filteredMechanics.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    setSortBy((prev) => {
      if (prev.key === key) {
        return { key, order: prev.order === "asc" ? "desc" : "asc" };
      } else {
        return { key, order: "asc" };
      }
    });
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Title + Subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-700">
          Find Your <span className="text-orange-600">Expert Mechanic</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-500 text-lg md:text-xl">
          Browse trusted professionals and book your car service easily
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
        <MechanicFilter filters={filters} setFilters={setFilters} />

        {/* Availability Toggle */}
        <div className="flex gap-2 items-center">
          <span className="text-gray-700 dark:text-gray-500 font-medium">
            Availability:
          </span>
          <select
            className="select select-bordered text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
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

      {/* Mechanics Table */}
      <div className="overflow-x-auto">
        <table className="table w-full bg-white dark:bg-gray-800 rounded-xl shadow">
          <thead className="sticky top-0 bg-white dark:bg-gray-800 z-10">
            <tr className="text-gray-700 dark:text-gray-200">
              <th>#</th>
              <th>Mechanic</th>
              <th>Skills</th>
              <th
                className="cursor-pointer"
                onClick={() => handleSort("experience")}
              >
                Experience{" "}
                {sortBy.key === "experience" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMechanics.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-4">
                  No mechanics found
                </td>
              </tr>
            ) : (
              paginatedMechanics.map((m, index) => (
                <tr
                  key={m.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="flex items-center gap-2">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-gray-800 dark:text-gray-100">{m.name}</span>
                  </td>
                  <td className="text-gray-700 dark:text-gray-200">{m.skills.join(", ")}</td>
                  <td className="text-gray-700 dark:text-gray-200">{m.experience} yrs</td>
                  <td><RatingStars rating={m.rating} /></td>
                  <td className="text-gray-700 dark:text-gray-200">৳{m.price}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        m.available ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {m.available ? "Available" : "Busy"}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/mechanic/${m.id}`}
                      className="text-white bg-orange-500 px-3 py-1 rounded hover:bg-orange-600"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mechanics;
