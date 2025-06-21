import "./Filter.css";

const filterButtons = ["2nd year", "3rd year"];

function Filter() {
  return (
    <div className="filter">
      {filterButtons.map((button, i) => {
        return <button key={i}>{button}</button>;
      })}
    </div>
  );
}

export default Filter;
