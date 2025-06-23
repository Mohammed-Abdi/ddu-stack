import Doc from "../../assets/file-icon/Doc.jsx";
import AboutIcon from "../../assets/material-icon/About.jsx";
import AboutIconColored from "../../assets/material-icon/AboutIconColored.jsx";
import ContactIcon from "../../assets/material-icon/Contact.jsx";
import HomeIcon from "../../assets/material-icon/Home.jsx";
import "./Navigation.css";

function Navigation({ isOpen, onMenu }) {
  return (
    <nav className={!isOpen ? "closed" : ""} onClick={onMenu}>
      <ul>
        <li>
          <HomeIcon className="icon" />
          <a href="#">Home</a>
        </li>
        <li>
          <AboutIcon className="icon" />
          About
        </li>
        <li>
          <ContactIcon className="icon" />
          <a
            href="https://t.me/its_mamme"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
