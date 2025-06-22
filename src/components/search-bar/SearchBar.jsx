import Search from "../../assets/material-icon/Search.jsx";
import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="icon" />
    </form>
  );
}

export default SearchBar;
