import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import FeaturedListings from "../components/home/FeaturedListings";
import HowItWorks from "../components/home/HowItWorks";
import AISection from "../components/home/AISection";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedListings />
      <HowItWorks />
      <AISection />

      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <p style={styles.label}>About NestMatch</p>

          <h2 style={styles.heading}>
            Smarter rental discovery for students and working professionals
          </h2>

          <p style={styles.text}>
            NestMatch is an AI-powered rental matching platform that helps
            tenants find suitable rooms based on budget, location, room type,
            amenities, and compatibility. It also allows property owners to list
            verified spaces and connect with interested tenants easily.
          </p>

          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>For Tenants</h3>
              <p>
                Find rooms faster with smart filtering, listing details, and AI
                compatibility scoring.
              </p>
            </div>

            <div style={styles.card}>
              <h3>For Owners</h3>
              <p>
                Add property listings, manage spaces, and receive interest from
                genuine tenants.
              </p>
            </div>

            <div style={styles.card}>
              <h3>AI Matching</h3>
              <p>
                Get a match score based on budget, location, room type, and
                amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}

const styles = {
  aboutSection: {
    padding: "90px 8%",
    background: "#f8fafc",
  },
  aboutContainer: {
    maxWidth: "1150px",
    margin: "0 auto",
    textAlign: "center",
  },
  label: {
    color: "#2563eb",
    fontWeight: "700",
    marginBottom: "12px",
  },
  heading: {
    fontSize: "38px",
    color: "#0f172a",
    marginBottom: "18px",
  },
  text: {
    maxWidth: "850px",
    margin: "0 auto 45px",
    color: "#475569",
    lineHeight: "1.8",
    fontSize: "17px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    textAlign: "left",
  },
};

export default Home;