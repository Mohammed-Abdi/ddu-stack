import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h1 className="about-heading">About DDU Stack</h1>
        <p className="about-description">
          DDU Stack is a lightweight platform designed for students at Dire Dawa
          University to instantly access, preview, and download course
          materials. Whether you're catching up on assignments or preparing for
          exams, everything is organized and accessible in just a few clicks.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>📁 90+</h3>
          <p>Course Files</p>
        </div>
        <div className="stat">
          <h3>⏱️ Instant</h3>
          <p>File Previews</p>
        </div>
        <div className="stat">
          <h3>⚡ 100%</h3>
          <p>Free Access</p>
        </div>
      </div>

      <div className="features">
        <h3 className="features-heading">Platform Highlights</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">⚡</div>
            <h4>Instant Preview</h4>
            <p>Preview files instantly before downloading.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📂</div>
            <h4>Organized by Course</h4>
            <p>Everything sorted by year and subject.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📱</div>
            <h4>Mobile Friendly</h4>
            <p>Fully responsive design that works on any device.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h4>Super Fast</h4>
            <p>Built for performance — everything loads instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
