import { useState } from "react";
import Filter from "../filter/Filter.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import "./CourseList.css";
import Courses from "../courses/Courses.jsx";

function CourseList() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(2017);
  return (
    <section className="course-list">
      <SearchBar search={search} setSearch={setSearch} />
      {!search && <Filter year={year} setYear={setYear} />}
      <Courses year={year} search={search} />
    </section>
  );
}

export default CourseList;
