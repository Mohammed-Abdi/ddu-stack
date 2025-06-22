import "./Courses.css";
import courses from "../../data/courses.js";
import materials from "../../data/materials.js";

function Courses({ search, year }) {
  return (
    <div className="courses-wrapper">
      {search
        ? materials
            .filter((material) =>
              material.search.toLowerCase().includes(search.toLowerCase())
            )
            .map((filteredMaterial) => {
              return (
                <div className="material-filtered">{filteredMaterial.name}</div>
              );
            })
        : courses
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
