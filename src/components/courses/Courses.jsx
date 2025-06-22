import "./Courses.css";
import courses from "../../data/courses.js";
import materials from "../../data/materials.js";
import Material from "../material/Material.jsx";

function Courses({ search, year }) {
  return (
    <div className="courses-wrapper">
      {search
        ? materials
            .filter((material) =>
              material.search.toLowerCase().includes(search.toLowerCase())
            )
            .map((filteredMaterial, i) => {
              return (
                <Material
                  key={i}
                  code={filteredMaterial.code}
                  name={filteredMaterial.name}
                  topic={filteredMaterial.topic}
                  chapter={filteredMaterial.chapter}
                  format={filteredMaterial.format}
                />
              );
            })
        : courses
            .filter((course) => course.year == year)
            .map((course, i) => {
              return (
                <div key={i}>
                  <div key={i} className="course">
                    {course.name}
                  </div>

                  {materials
                    .filter((material) => material.code === course.code)
                    .map((filteredMaterial, i) => {
                      return (
                        <Material
                          key={i}
                          code={filteredMaterial.code}
                          name={filteredMaterial.name}
                          topic={filteredMaterial.topic}
                          chapter={filteredMaterial.chapter}
                          format={filteredMaterial.format}
                        />
                      );
                    })}
                </div>
              );
            })}
    </div>
  );
}

export default Courses;
