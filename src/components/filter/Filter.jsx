import "./Filter.css";

const filterButtons = ["All", "2nd year"];

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
