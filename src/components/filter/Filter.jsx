import "./Filter.css";

function Filter({ year, setYear }) {
  function handleFilter(e) {
    const value = Number(e.target.value);
    setYear(value);
  }

  return (
    <div className="filter">
      <button
        value={2018}
        onClick={handleFilter}
        className={year === 2018 ? "highlight" : ""}
      >
        3rd year
      </button>
      <button
        value={2017}
        onClick={handleFilter}
        className={year === 2017 ? "highlight" : ""}
      >
        2nd year
      </button>
    </div>
  );
}

export default Filter;
