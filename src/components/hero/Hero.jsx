import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        All Your Course Materials in <br /> One Smart{" "}
        <span style={{ color: "var(--accent-clr)" }}>Stack</span>
      </h1>
      <p>
        No more digging through folders. Find exactly what you need, instantly!
      </p>
    </section>
  );
}

export default Hero;
