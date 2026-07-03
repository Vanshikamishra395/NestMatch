import "./AISection.css";
import {
  BrainCircuit,
  MapPinned,
  Wallet,
  House,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function AISection() {
  return (
    <section className="ai-section">
      <div className="ai-left">

        <span className="ai-badge">
          <Sparkles size={16} />
          AI Powered Matching
        </span>

        <h2>
          Find rooms that actually fit
          <span> your lifestyle.</span>
        </h2>

        <p>
          NestMatch analyzes your preferences using AI to recommend
          accommodations based on budget, location, room type,
          amenities and compatibility.
        </p>

        <div className="ai-features">

          <div className="feature">
            <Wallet size={22} />
            <span>Budget Compatibility</span>
          </div>

          <div className="feature">
            <MapPinned size={22} />
            <span>Location Intelligence</span>
          </div>

          <div className="feature">
            <House size={22} />
            <span>Room Preference Analysis</span>
          </div>

          <div className="feature">
            <BrainCircuit size={22} />
            <span>Smart AI Recommendations</span>
          </div>

        </div>

        <button className="ai-btn">
          Explore AI Matching
          <ArrowRight size={18}/>
        </button>

      </div>

      <div className="ai-right">

        <div className="score-card">

          <div className="score-circle">
            95%
          </div>

          <h3>Average Match Accuracy</h3>

          <p>
            Our AI compares listings with your preferences to
            recommend the most suitable accommodation.
          </p>

          <div className="stats">

            <div>
              <strong>10K+</strong>
              <span>Predictions</span>
            </div>

            <div>
              <strong>4.9★</strong>
              <span>User Rating</span>
            </div>

            <div>
              <strong>24x7</strong>
              <span>AI Available</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AISection;