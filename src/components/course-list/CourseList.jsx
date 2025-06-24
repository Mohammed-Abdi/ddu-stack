import { useState } from "react";
import Filter from "../filter/Filter.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import "./CourseList.css";
import Courses from "../courses/Courses.jsx";

function CourseList({ isOnSearch, setIsOnSearch }) {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(2018);

  function handleOnSearch() {
    if (!isOnSearch) setIsOnSearch((value) => !value);
  }
  function handleSearchBarOnClose() {
    setSearch("");
    setIsOnSearch(false);
  }
  return (
    <section
      className={`course-list ${isOnSearch || search ? "on-search" : ""}`}
    >
      <SearchBar
        search={search}
        setSearch={setSearch}
        isOnSearch={isOnSearch}
        onSearch={handleOnSearch}
        onSearchBarOnClose={handleSearchBarOnClose}
      />
      {!isOnSearch && !search ? <Filter year={year} setYear={setYear} /> : ""}
      <Courses year={year} search={search} isOnSearch={isOnSearch} />
    </section>
  );
}

export default CourseList;
