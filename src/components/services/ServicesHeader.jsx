// ServicesHeader.jsx
import SearchBar from "./SearchBar";

const ServicesHeader = ({ searchText, setSearchText }) => {
  return (
    <div className="text-center mb-14">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
        Our Car Services
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Choose from a wide range of professional car maintenance and repair
        services provided by certified mechanics.
      </p>

      {/* Search Bar */}
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
};

export default ServicesHeader;
