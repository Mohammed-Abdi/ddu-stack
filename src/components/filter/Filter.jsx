import { useState } from "react";
import "./Filter.css";

function Filter({ setYear }) {
  const [isOnIt, setIsOnIt] = useState(2017);
  function handleFilter(e) {
    const value = Number(e.target.value);
    setYear(value);
    setIsOnIt(value);
  }

  return (
    <div className="filter">
      <button
        value={2017}
        onClick={handleFilter}
        className={isOnIt === 2017 ? "highlight" : ""}
      >
        2nd year
      </button>
      <button
        value={2018}
        onClick={handleFilter}
        className={isOnIt === 2018 ? "highlight" : ""}
      >
        3rd year
      </button>
    </div>
  );
}

export default Filter;
