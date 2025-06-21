import CloseAnimated from "../../assets/nav-icon/CloseAnimated.jsx";
import HamburgerAnimated from "../../assets/nav-icon/HamburgerAnimated.jsx";
import "./Hamburger.css";

function Hamburger({ menuIsOpen, onMenu }) {
  return (
    <div className="hover-over" onClick={onMenu}>
      {menuIsOpen ? (
        <CloseAnimated className="icon" />
      ) : (
        <HamburgerAnimated className="icon" />
      )}
    </div>
  );
}

export default Hamburger;
