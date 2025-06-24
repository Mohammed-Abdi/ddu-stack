import "./Courses.css";
import courses from "../../data/courses.js";
import materials from "../../data/materials.js";
import Material from "../material/Material.jsx";
import Course from "../course/Course.jsx";
import { useState } from "react";
import CloseIcon from "../../assets/material-icon/Close.jsx";

function Courses({ search, year }) {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className={`courses-wrapper ${search ? "on-search" : ""}`}>
      {search
        ? materials
            .filter((material) =>
              material.search.toLowerCase().includes(search.toLowerCase())
            )
            .map((filteredMaterial) => (
              <Material
                key={filteredMaterial.id}
                code={filteredMaterial.code}
                name={filteredMaterial.name}
                topic={filteredMaterial.topic}
                chapter={filteredMaterial.chapter}
                format={filteredMaterial.format}
                path={filteredMaterial.path}
                size={filteredMaterial.size}
                unit={filteredMaterial.unit}
                isLabExercise={filteredMaterial.isLabExercise}
                isAssignment={filteredMaterial.isAssignment}
              />
            ))
        : courses
            .filter((course) => course.year == year)
            .map((course, i) => {
              const total = materials.filter(
                (material) => material.code === course.code
              ).length;

              const isThisOpen = isOpen === course.code;

              return (
                <div key={i} className="courses-material-wrapper">
                  <Course
                    name={course.name}
                    code={course.code}
                    total={total}
                    setIsOpen={() =>
                      setIsOpen((prev) =>
                        prev === course.code ? null : course.code
                      )
                    }
                  />

                  <div
                    className={`materials-wrapper ${
                      !isThisOpen ? "closed" : ""
                    }`}
                  >
                    <div className="material-header">
                      <h2>{course.name}</h2>
                      <div
                        className="icon hover-over"
                        onClick={() =>
                          setIsOpen((prev) =>
                            prev === course.code ? null : course.code
                          )
                        }
                      >
                        <CloseIcon />
                      </div>
                    </div>
                    <div className="material-list">
                      {materials
                        .filter((material) => material.code === course.code)
                        .map((filteredMaterial) => (
                          <Material
                            key={filteredMaterial.id}
                            code={filteredMaterial.code}
                            name={filteredMaterial.name}
                            topic={filteredMaterial.topic}
                            chapter={filteredMaterial.chapter}
                            format={filteredMaterial.format}
                            path={filteredMaterial.path}
                            size={filteredMaterial.size}
                            unit={filteredMaterial.unit}
                            isLabExercise={filteredMaterial.isLabExercise}
                            isAssignment={filteredMaterial.isAssignment}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
    </div>
  );
}

export default Courses;
