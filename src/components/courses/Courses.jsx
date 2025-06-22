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
            .map((filteredMaterial) => {
              return (
                <Material
                  key={filteredMaterial.id}
                  code={filteredMaterial.code}
                  name={filteredMaterial.name}
                  topic={filteredMaterial.topic}
                  chapter={filteredMaterial.chapter}
                  format={filteredMaterial.format}
                  path={filteredMaterial.path}
                />
              );
            })
        : courses
            .filter((course) => course.year == year)
            .map((course, i) => {
              return (
                <div key={i} className="courses-material-wrapper">
                  <div key={i} className="course">
                    {course.name}
                  </div>

                  <div className="materials-wrapper">
                    {materials
                      .filter((material) => material.code === course.code)
                      .map((filteredMaterial) => {
                        return (
                          <Material
                            key={filteredMaterial.id}
                            code={filteredMaterial.code}
                            name={filteredMaterial.name}
                            topic={filteredMaterial.topic}
                            chapter={filteredMaterial.chapter}
                            format={filteredMaterial.format}
                            path={filteredMaterial.path}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
    </div>
  );
}

export default Courses;
