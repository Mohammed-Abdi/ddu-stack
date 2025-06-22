import "./Filter.css";

function Filter({ setYear }) {
  return (
    <div className="filter">
      <button value={2017} onClick={(e) => setYear(Number(e.target.value))}>
        2nd year
      </button>
      <button value={2018} onClick={(e) => setYear(Number(e.target.value))}>
        3rd year
      </button>
    </div>
  );
}

export default Filter;
