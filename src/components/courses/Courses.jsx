import "./Courses.css";
import courses from "../../data/courses.js";

function Courses({ year }) {
  return (
    <div className="courses-wrapper">
      {courses
        .filter((course) => course.year == year)
        .map((course, i) => {
          return (
            <div key={i} className="course">
              {course.name}
            </div>
          );
        })}
    </div>
  );
}

export default Courses;
