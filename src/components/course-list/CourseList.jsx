import Filter from "../filter/Filter.jsx";
import SearchBar from "../search-bar/SearchBar.jsx";
import "./CourseList.css";

function CourseList() {
  return (
    <section className="course-list">
      <SearchBar />
      <Filter />
    </section>
  );
}

export default CourseList;
