import CloseIcon from "../../assets/material-icon/Close.jsx";
import Search from "../../assets/material-icon/Search.jsx";
import "./SearchBar.css";

function SearchBar({
  search,
  setSearch,
  onSearch,
  isOnSearch,
  onSearchBarOnClose,
}) {
  return (
    <a className="search-bar" onClick={onSearch} href="#search">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="icon" />
      {isOnSearch || search ? (
        <a href="#" className="search-close-icon" onClick={onSearchBarOnClose}>
          <CloseIcon />
        </a>
      ) : (
        ""
      )}
    </a>
  );
}

export default SearchBar;
