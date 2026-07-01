import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">AI-assisted room matching</p>

        <h1>Find a room that actually fits your budget and location.</h1>

        <p className="hero-text">
          NestMatch helps tenants discover suitable rooms and lets owners find
          better-matched tenants through smart compatibility scoring.
        </p>

        <div className="hero-actions">
          <a href="/register" className="primary-btn">Start Searching</a>
          <a href="/login" className="secondary-btn">List a Room</a>
        </div>
      </div>

      <div className="hero-card">
        <h3>Suggested Match</h3>
        <p className="score">92%</p>
        <p className="muted">
          Close to preferred location and within budget range.
        </p>
      </div>
    </section>
  );
}

export default Hero;