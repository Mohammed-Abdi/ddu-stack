import EmphasizedText from "../emphasized-text/EmphasizedText.jsx";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        All Your Course Materials in <br /> One Smart{" "}
        <span style={{ color: "var(--accent-clr)" }}>Stack</span>
      </h1>
      <p>
        No more digging through folders or broken links. Find exactly what you
        need, instantly!
      </p>
    </section>
  );
}

export default Hero;
