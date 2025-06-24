import Search from "../../assets/material-icon/Search.jsx";
import "./SearchBar.css";

function SearchBar({ search, setSearch, onSearch }) {
  function handleSubmit(p) {
    p.preventDefault();
  }
  return (
    <form className="search-bar" onSubmit={handleSubmit} onClick={onSearch}>
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
