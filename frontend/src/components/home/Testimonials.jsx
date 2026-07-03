import "./Testimonials.css";
import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      review:
        "NestMatch helped me find a fully furnished apartment within two days. The AI recommendations were surprisingly accurate.",
    },
    {
      name: "Priya Verma",
      role: "College Student",
      review:
        "I loved the clean interface and verified listings. Showing interest and connecting with owners was effortless.",
    },
    {
      name: "Aman Gupta",
      role: "Working Professional",
      review:
        "The compatibility score saved me hours of searching. I found a room that matched both my budget and lifestyle.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What our users say</h2>
        <p>
          Thousands of students and professionals trust NestMatch to find their
          perfect home.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" color="#facc15" />
              ))}
            </div>

            <p className="review">"{item.review}"</p>

            <div className="user">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;