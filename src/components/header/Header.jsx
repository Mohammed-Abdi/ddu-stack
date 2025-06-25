import Github from "../../assets/nav-icon/Github.jsx";
import Hamburger from "../hamburger/Hamburger.jsx";
import Doc from "../../assets/file-icon/Doc.jsx";
import "./Header.css";

function Header({ menuIsOpen, onMenu }) {
  return (
    <header>
      <div className="left-header">
        <Hamburger menuIsOpen={menuIsOpen} onMenu={onMenu} />
        <a
          href="https://ddustack.vercel.app"
          rel="noopener noreferrer"
          className="logo"
        >
          <Doc />
          DDU<span style={{ color: "var(--accent-clr)" }}>STACK</span>
        </a>
      </div>
      <div className="right-header">
        <a
          href="https://github.com/Mohammed-Abdi/ddu-stack"
          rel="noopener noreferrer"
          target="_blank"
          className="icon-wrapper hover-over"
        >
          <Github className="icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
