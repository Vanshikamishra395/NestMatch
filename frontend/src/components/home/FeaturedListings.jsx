import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../listing/RoomCard";
import API_BASE_URL from "../../services/api";
import "./FeaturedListings.css";

function FeaturedListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/listings`);
        const data = await response.json();

        if (data.success) {
          setListings(data.data.slice(0, 3));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  return (
    <section className="featured-section">
      <div className="section-header">
        <div>
          <p className="section-label">Featured Rooms</p>
          <h2>Recently listed spaces</h2>
        </div>

        <Link to="/tenant/dashboard" className="view-all-link">
          View All Rooms
        </Link>
      </div>

      <div className="featured-grid">
        {listings.map((listing) => (
          <RoomCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedListings;