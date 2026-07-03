import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/tenant/dashboard?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <p className="hero-badge">
          <Sparkles size={16} />
          AI-assisted rental matching
        </p>

        <h1>
          Find the right room, <br />
          not just an available one.
        </h1>

        <p className="hero-subtitle">
          Discover verified rooms and apartments that fit your budget,
          location, and lifestyle preferences.
        </p>

        <div className="hero-search">
          <div className="search-field">
            <MapPin size={20} />
            <input
              type="text"
              placeholder="Search city or locality"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <button onClick={handleSearch} className="hero-search-btn">
            <Search size={18} />
            Search
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>250+</strong>
            <span>Verified Rooms</span>
          </div>
          <div>
            <strong>95%</strong>
            <span>Match Accuracy</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Fast Owner Response</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-property-card">
          <div className="hero-card-image"></div>

          <div className="hero-card-content">
            <span className="verified-chip">
              <ShieldCheck size={15} />
              Verified
            </span>

            <h3>Modern 1 BHK near Metro</h3>
            <p>Noida Sector 62</p>

            <div className="hero-price-row">
              <strong>₹12,000/month</strong>
              <span>92% Match</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;