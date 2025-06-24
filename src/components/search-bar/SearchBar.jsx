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
      {isOnSearch || search ? (
        <div className="search-close-icon" onClick={onSearchBarOnClose}>
          <CloseIcon />
        </div>
      ) : (
        ""
      )}
    </form>
  );
}

export default SearchBar;
