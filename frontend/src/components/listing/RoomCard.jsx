import { Link } from "react-router-dom";
import { MapPin, Heart } from "lucide-react";
import { getPropertyImage } from "../../utils/propertyImages";
import "./RoomCard.css";

function RoomCard({ listing }) {
  return (
    <div className="room-card">
      <div
        className="room-image"
        style={{ backgroundImage: `url(${getPropertyImage(listing.id)})` }}
      >
        <span className="featured-badge">Verified</span>

        <button className="heart-btn">
          <Heart size={18} />
        </button>
      </div>

      <div className="room-content">
        <h3>{listing.title}</h3>

        <p className="location">
          <MapPin size={16} />
          {listing.location}
        </p>

        <div className="tags">
          <span>{listing.room_type || "Room"}</span>
          <span>{listing.furnishing || "Furnished"}</span>
        </div>

        <p className="description">{listing.description}</p>
      </div>

      <div className="room-footer">
        <h2>₹{Number(listing.rent).toLocaleString()}/month</h2>

        <Link to={`/listings/${listing.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;