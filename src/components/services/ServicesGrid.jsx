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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceSort, setPriceSort] = useState("None");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6; // Number of services per page

  // Filter & sort services
  const filteredServices = useMemo(() => {
    let result = services.filter((s) => {
      const categoryMatch =
        selectedCategory === "All" || s.category === selectedCategory;
      const searchMatch = s.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return categoryMatch && searchMatch;
    });

    if (priceSort === "LowToHigh") {
      result.sort(
        (a, b) =>
          Number(a.price.toString().replace(/[^0-9]/g, "")) -
          Number(b.price.toString().replace(/[^0-9]/g, ""))
      );
    } else if (priceSort === "HighToLow") {
      result.sort(
        (a, b) =>
          Number(b.price.toString().replace(/[^0-9]/g, "")) -
          Number(a.price.toString().replace(/[^0-9]/g, ""))
      );
    }

    return result;
  }, [services, selectedCategory, searchText, priceSort]);

  // Pagination logic
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * servicesPerPage;
    const end = start + servicesPerPage;
    return filteredServices.slice(start, end);
  }, [filteredServices, currentPage]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const removeService = (id) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const subtotal = useMemo(() => {
    return selectedServices.reduce((total, service) => {
      const price = Number(service.price.toString().replace(/[^0-9]/g, ""));
      return total + price;
    }, 0);
  }, [selectedServices]);

  const tax = subtotal * 0.1;
  const discount = selectedServices.length >= 2 ? subtotal * 0.05 : 0;
  const grandTotal = subtotal + tax - discount;

  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">
      {/* Header */}
      <ServicesHeader
        searchText={searchText}
        setSearchText={setSearchText}
        selectedServices={selectedServices}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
        <div className="lg:col-span-1">
          <ServicesFilters
            services={services}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence>
              {paginatedServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <ServiceCard
                    service={service}
                    isSelected={selectedServices.some(
                      (s) => s.id === service.id
                    )}
                    onSelect={() => toggleService(service)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {paginatedServices.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                No services found.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded hover:bg-gray-200"
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-3 py-1 border rounded hover:bg-gray-200"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 bg-gray-50 p-4 rounded-xl shadow-inner sticky top-24">
          <h2 className="text-lg font-semibold mb-4">
            Selected Services ({selectedServices.length})
          </h2>

          {selectedServices.length === 0 ? (
            <p className="text-gray-400">No services selected yet.</p>
          ) : (
            <>
              <div className="space-y-2">
                {selectedServices.map((s) => (
                  <div
                    key={s.id}
                    className="flex justify-between items-center bg-white p-3 rounded-lg"
                  >
                    <span>{s.title}</span>
                    <div className="flex items-center gap-2">
                      <span>{s.price}</span>
                      <button
                        onClick={() => removeService(s.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>৳ {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>৳ {tax}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ৳ {discount}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>৳ {grandTotal}</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600"
              >
                Book Selected Services
              </button>
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              Booking Summary
            </h2>

            <p>Total Services: {selectedServices.length}</p>
            <p className="font-semibold mt-2">
              Payable Amount: ৳ {grandTotal}
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;
