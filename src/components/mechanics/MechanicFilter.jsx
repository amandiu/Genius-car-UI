const MechanicFilter = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex flex-col md:flex-row gap-4 items-center">
      {/* 🔍 Search Input */}
      <input
        type="text"
        className="input input-bordered w-full md:w-1/3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-400"
        placeholder="Search mechanic..."
        value={filters.search}
        onChange={(e) => handleChange("search", e.target.value)}
      />

      {/* 🛠 Skill Select */}
      <select
        className="select select-bordered w-full md:w-1/4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
        value={filters.skill}
        onChange={(e) => handleChange("skill", e.target.value)}
      >
        <option value="">All Services</option>
        <option value="Engine">Engine</option>
        <option value="Brake">Brake</option>
        <option value="AC">AC</option>
        <option value="Electrical">Electrical</option>
      </select>

      {/* ⭐ Rating Select */}
      <select
        className="select select-bordered w-full md:w-1/4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
        value={filters.rating}
        onChange={(e) => handleChange("rating", e.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
      </select>
    </div>
  );
};

export default MechanicFilter;
