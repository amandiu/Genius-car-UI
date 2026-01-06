// ServicesGrid.jsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";
import { servicesData } from "../../data/servicesData";
import ServicesHeader from "./ServicesHeader";
import ServicesFilters from "./ServicesFilters";

const ServicesGrid = () => {
  const [services] = useState(servicesData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  // Filter services based on search text & category
  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const categoryMatch =
        selectedCategory === "All" || s.category === selectedCategory;
      const searchMatch = s.title.toLowerCase().includes(searchText.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [services, selectedCategory, searchText]);

  // Toggle service selection
  const toggleService = (service) => {
    setSelectedServices((prev) => {
      if (prev.find((s) => s.id === service.id)) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <ServicesHeader searchText={searchText} setSearchText={setSearchText} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Filters */}
        <div className="lg:col-span-1">
          <ServicesFilters
            services={services}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Middle: Service Cards */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServiceCard
                    service={service}
                    isSelected={selectedServices.some((s) => s.id === service.id)}
                    onClick={() => toggleService(service)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredServices.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                No services found.
              </p>
            )}
          </div>
        </div>

        {/* Right: Selected Services */}
        <div className="lg:col-span-1 bg-gray-50 p-4 rounded-xl shadow-inner space-y-4 sticky top-24">
          <h2 className="text-lg font-semibold mb-4">Selected Services</h2>
          {selectedServices.length === 0 && (
            <p className="text-gray-400">No services selected yet.</p>
          )}
          <div className="space-y-2">
            {selectedServices.map((s) => (
              <div
                key={s.id}
                className="flex justify-between items-center bg-white rounded-xl p-3 shadow-md"
              >
                <span>{s.title}</span>
                <span className="font-semibold">{s.price}</span>
              </div>
            ))}
          </div>
          {selectedServices.length > 0 && (
            <button className="w-full mt-4 bg-orange-500 text-white font-medium py-2 rounded-xl hover:bg-orange-600 transition">
              Book Selected Services
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
