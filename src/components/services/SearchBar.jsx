// SearchBar.jsx
const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search services..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="
          w-full px-4 py-3 rounded-xl border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-orange-400
          text-gray-700 placeholder-gray-400 font-medium
        "
      />
    </div>
  );
};

export default SearchBar;
