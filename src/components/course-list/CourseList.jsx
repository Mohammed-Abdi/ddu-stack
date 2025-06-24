import { useState } from "react";
import Filter from "../filter/Filter.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import "./CourseList.css";
import Courses from "../courses/Courses.jsx";

function CourseList() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(2018);

  function handleOnSearch() {
    document.getElementById("search")?.scrollIntoView();
  }
  return (
    <section className="course-list" id="search">
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={handleOnSearch}
      />
      {!search ? <Filter year={year} setYear={setYear} /> : ""}
      <Courses year={year} search={search} />
    </section>
  );
}

export default CourseList;
