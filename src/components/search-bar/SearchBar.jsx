import Search from "../../assets/material-icon/Search.jsx";
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search..." />
      <Search className="icon" />
    </form>
  );
}

export default SearchBar;
