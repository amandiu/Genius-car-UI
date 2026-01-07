import { useState, useMemo } from "react";
import { mechanicsData } from "../../data/mechanics.data";

const MechanicsTable = () => {
  const [filters, setFilters] = useState({ search: "", skill: "", availability: "all" });
  const [sortBy, setSortBy] = useState({ key: "", order: "" });

  const filteredMechanics = useMemo(() => {
    return mechanicsData
      .filter((m) => {
        const matchSearch = m.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchSkill = !filters.skill || m.skills.includes(filters.skill);
        const matchAvailability =
          filters.availability === "all"
            ? true
            : filters.availability === "available"
            ? m.available
            : !m.available;
        return matchSearch && matchSkill && matchAvailability;
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
      order: prev.key === key ? (prev.order === "asc" ? "desc" : "asc") : "asc",
    }));
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Mechanics</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search mechanic..."
          className="input input-bordered"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select
          value={filters.skill}
          onChange={(e) => setFilters({ ...filters, skill: e.target.value })}
          className="select select-bordered"
        >
          <option value="">All Skills</option>
          <option value="Engine">Engine</option>
          <option value="Brake">Brake</option>
          <option value="AC">AC</option>
          <option value="Electrical">Electrical</option>
        </select>
        <select
          value={filters.availability}
          onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
          className="select select-bordered"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Skills</th>
              <th onClick={() => handleSort("experience")} className="cursor-pointer">
                Experience {sortBy.key === "experience" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => handleSort("rating")} className="cursor-pointer">
                Rating {sortBy.key === "rating" ? (sortBy.order === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => handleSort("price")} className="cursor-pointer">
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
                <tr key={m.id} className="hover:bg-gray-50">
                  <td>{idx + 1}</td>
                  <td>{m.name}</td>
                  <td>{m.skills.join(", ")}</td>
                  <td>{m.experience} yrs</td>
                  <td>{m.rating}</td>
                  <td>৳{m.price}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-white ${
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

export default MechanicsTable;
