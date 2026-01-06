// SearchBar.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchText, setSearchText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative max-w-md mx-auto">
      <label htmlFor="service-search" className="sr-only">
        Search services
      </label>

      <input
        id="service-search"
        type="text"
        placeholder="Search services..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full pl-10 pr-10 py-3 rounded-xl border
          border-gray-300 focus:outline-none 
          focus:ring-2 focus:ring-orange-400
          placeholder-gray-400 text-white bg-gray-800 font-medium
          transition-shadow duration-200
          ${isFocused ? "shadow-lg" : "shadow-sm"}
        `}
      />

      {/* Search icon */}
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />

      {/* Clear button */}
      {searchText && (
        <button
          type="button"
          onClick={() => setSearchText("")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Clear search"
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
