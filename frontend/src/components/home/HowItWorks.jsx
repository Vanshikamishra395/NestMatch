import "./HowItWorks.css";
import {
  Search,
  Sparkles,
  HeartHandshake,
  Home,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Search size={34} />,
      title: "Search Rooms",
      description:
        "Browse verified rooms and apartments based on your preferred location and budget.",
    },
    {
      icon: <Sparkles size={34} />,
      title: "AI Compatibility",
      description:
        "Generate an AI-powered compatibility score based on amenities, room type and preferences.",
    },
    {
      icon: <HeartHandshake size={34} />,
      title: "Show Interest",
      description:
        "Connect with property owners instantly by expressing your interest in a listing.",
    },
    {
      icon: <Home size={34} />,
      title: "Move In",
      description:
        "Choose the best match and move into your new home with confidence.",
    },
  ];

  return (
 <section className="how-it-works" id="how-it-works">
      <div className="section-heading">
        <span>How It Works</span>
        <h2>Finding your perfect room is simple</h2>
        <p>
          NestMatch combines verified listings with AI recommendations to help
          you find the ideal accommodation.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;