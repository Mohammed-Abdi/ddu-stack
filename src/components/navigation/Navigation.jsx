import AboutIcon from "../../assets/material-icon/About.jsx";
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
          <a href="#about">About</a>
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
