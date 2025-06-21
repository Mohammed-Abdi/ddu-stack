import Hamburger from "../hamburger/Hamburger.jsx";
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
          <img src="/favicon/logo.svg" width={32} height={32} />
          DDU<span style={{ color: "var(--accent-clr)" }}>STACK</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
