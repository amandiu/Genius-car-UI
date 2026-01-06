// ServicesFilters.jsx
import { useState, useEffect } from "react";

const ServicesFilters = ({ services, selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // For mobile dropdown

  useEffect(() => {
    const uniqueCategories = ["All", ...new Set(services.map((s) => s.category))];
    setCategories(uniqueCategories);
  }, [services]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md sticky top-24">
      {/* Mobile Dropdown Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 rounded-xl font-medium text-gray-700"
        >
          {selectedCategory}
          <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {/* Dropdown list for mobile */}
        {isOpen && (
          <div className="mt-2 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsOpen(false); // close dropdown
                }}
                className={`text-left px-4 py-2 rounded-lg font-medium transition
                  ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col gap-3">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Filter Services</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-left px-4 py-2 rounded-lg font-medium transition
              ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesFilters;
