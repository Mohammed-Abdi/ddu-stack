import CloseAnimated from "../../assets/nav-icon/CloseAnimated.jsx";
import HamburgerAnimated from "../../assets/nav-icon/HamburgerAnimated.jsx";
import "./Hamburger.css";

function Hamburger({ menuIsOpen, onMenu }) {
  return (
    <div className="hamburger" onClick={onMenu}>
      {menuIsOpen ? (
        <CloseAnimated className="icon" />
      ) : (
        <HamburgerAnimated className="icon" />
      )}
    </div>
  );
}

export default Hamburger;
