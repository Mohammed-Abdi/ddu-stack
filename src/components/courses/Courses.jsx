import "./Courses.css";
import materials from "../../data/materials.js";

function Courses({ year }) {
  return (
    <div className="courses-wrapper">
      {materials
        .filter((material) => material.year == year)
        .map((material, i) => {
          return (
            <div key={i} className="material">
              {material.name}
            </div>
          );
        })}
    </div>
  );
}

export default Courses;
