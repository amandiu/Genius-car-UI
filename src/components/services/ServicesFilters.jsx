// ServicesFilters.jsx
import { useState, useEffect } from "react";

const ServicesFilters = ({ services, selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = ["All", ...new Set(services.map((s) => s.category))];
    setCategories(uniqueCategories);
  }, [services]);

  return (
    <div className="space-y-6 bg-white p-4 rounded-2xl shadow-md sticky top-24">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        Filter Services
      </h3>

      {/* Categories List */}
      <div className="flex flex-col gap-3 mt-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              text-left px-4 py-2 rounded-lg font-medium transition
              ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesFilters;
