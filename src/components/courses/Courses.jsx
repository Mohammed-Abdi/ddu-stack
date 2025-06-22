import "./Courses.css";
import courses from "../../data/courses.js";
import materials from "../../data/materials.js";

function Courses({ year }) {
  return (
    <div className="courses-wrapper">
      {courses
        .filter((course) => course.year == year)
        .map((course, i) => {
          return (
            <>
              <div key={i} className="course">
                {course.name}
              </div>

              {materials
                .filter((material) => material.code === course.code)
                .map((material, index) => {
                  return (
                    <div key={index} className="course-chapters">
                      {material.name + " " + material.chapter}
                    </div>
                  );
                })}
            </>
          );
        })}
    </div>
  );
}

export default Courses;
