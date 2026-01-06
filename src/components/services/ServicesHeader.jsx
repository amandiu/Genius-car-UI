import SearchBar from "./SearchBar";

const ServicesHeader = ({
  searchText,
  setSearchText,
  selectedServices,
  priceSort,
  setPriceSort,
}) => {
  return (
    <div className="sticky top-16 z-40 bg-gray-900 text-white px-6 py-4 shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      {/* Left: Brand / Title / Description / Selected */}
      <div className="flex flex-col gap-1 lg:flex-1">
        <h1 className="text-2xl font-bold">Genius Car Service</h1>
        <p className="text-gray-300 text-sm">
          Select your services and book easily
        </p>
        {selectedServices?.length > 0 && (
          <p className="mt-1 text-sm text-orange-400 font-medium">
            Selected Services: {selectedServices.length}
          </p>
        )}
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 flex justify-center lg:justify-center">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>

      {/* Right: Price Filter Dropdown */}
      <div className="flex flex-col lg:flex-1 lg:items-end">
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Sort by Price
        </label>
        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          className="w-full lg:w-auto px-3 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="None">None</option>
          <option value="LowToHigh">Low to High</option>
          <option value="HighToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ServicesHeader;
