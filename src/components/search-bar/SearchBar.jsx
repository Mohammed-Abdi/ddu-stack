import Search from "../../assets/material-icon/Search.jsx";
import "./SearchBar.css";

function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-bar" onClick={onSearch} href="#search">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="icon" />
    </div>
  );
}

export default SearchBar;
