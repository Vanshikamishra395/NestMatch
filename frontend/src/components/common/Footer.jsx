import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <div className="footer-logo">
          <span>🏠</span>
          <span>NestMatch</span>
        </div>

        <p>
          AI-powered rent and flatmate finder helping tenants and owners connect
          through smarter compatibility.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <a href="/">Home</a>
          <a href="/tenant/dashboard">Find Rooms</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="/">Documentation</a>
          <a href="/">System Design</a>
          <a href="/">GitHub Repo</a>
        </div>

        <div>
          <h4>Contact</h4>
          <span>📧 support@nestmatch.com</span>
          <span>💻 GitHub</span>
          <span>🔗 LinkedIn</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NestMatch. Built as an AI-powered full-stack rental platform.</p>
      </div>
    </footer>
  );
}

export default Footer;