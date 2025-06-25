import "./Hamburger.css";

function Hamburger({ menuIsOpen, onMenu }) {
  return (
    <div className={`hamburger ${menuIsOpen ? "active" : ""}`} onClick={onMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default Hamburger;
