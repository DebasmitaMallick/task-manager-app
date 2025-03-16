import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full text-sm">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
