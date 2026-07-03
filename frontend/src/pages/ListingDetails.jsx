import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import API_BASE_URL from "../services/api";
import { getPropertyGallery } from "../utils/propertyImages";
import "./ListingDetails.css";

function ListingDetails() {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [aiResult, setAiResult] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/listings/${id}`);
        const data = await response.json();

        if (data.success) {
          setListing(data.data);
        } else {
          alert(data.message || "Unable to load listing.");
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong while loading listing.");
      }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <p className="details-loading">Loading listing...</p>;
  }

  let amenities = [];

  try {
    if (Array.isArray(listing.amenities)) {
      amenities = listing.amenities;
    } else if (listing.amenities) {
      amenities = JSON.parse(listing.amenities);
    }
  } catch {
    amenities = [];
  }

  const gallery = getPropertyGallery(listing.id) || [];

  const generateCompatibility = async () => {
    try {
      setLoadingAI(true);

      const response = await fetch(`${API_BASE_URL}/ai/compatibility`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          listingId: listing.id,
          tenantProfile: {
            preferredLocation: listing.location,
            budgetMin: Number(listing.rent) - 3000,
            budgetMax: Number(listing.rent) + 3000,
            roomType: listing.room_type,
            amenities,
          },
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAiResult(data.data);
        alert("AI match generated successfully!");
      } else {
        alert(data.message || "Unable to generate AI match.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong while generating AI match.");
    } finally {
      setLoadingAI(false);
    }
  };

  const handleInterest = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first.");
        return;
      }

      if (user.role !== "tenant") {
        alert("Only tenants can show interest.");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/interests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenant_id: user.id,
          listing_id: listing.id,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message || "Interest sent successfully!");
      } else {
        alert(data.message || "Unable to send interest.");
      }
    } catch (error) {
      console.log(error);
      alert("Unable to send interest.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="details-page">
        <section className="details-hero">
          <div className="details-image">
            {gallery.length > 0 && (
              <img src={gallery[0]} alt={listing.title} className="main-image" />
            )}

            <span className="verified-badge">Verified Listing</span>

            <div className="thumbnail-row">
              {gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="thumbnail"
                />
              ))}
            </div>
          </div>

          <div className="details-summary">
            <p className="details-location">📍 {listing.location}</p>
            <h1>{listing.title}</h1>
            <p className="details-description">{listing.description}</p>

            <div className="details-price">
              ₹{Number(listing.rent).toLocaleString()}
              <span>/month</span>
            </div>

            <button className="interest-btn" onClick={handleInterest}>
              Show Interest
            </button>
          </div>
        </section>

        <section className="details-grid">
          <div className="details-main">
            <h2>Property Details</h2>

            <div className="info-grid">
              <div>
                <span>Room Type</span>
                <strong>{listing.room_type}</strong>
              </div>

              <div>
                <span>Furnishing</span>
                <strong>{listing.furnishing}</strong>
              </div>

              <div>
                <span>Available From</span>
                <strong>{listing.available_from?.slice(0, 10)}</strong>
              </div>

              <div>
                <span>Preferred Gender</span>
                <strong>{listing.preferred_gender}</strong>
              </div>
            </div>

            <h2>Amenities</h2>

            <div className="amenity-list">
              {amenities.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>

            <h2>Owner Information</h2>

            <div className="owner-card">
              <div className="owner-avatar">
                {listing.owner_name
                  ? listing.owner_name.charAt(0).toUpperCase()
                  : "O"}
              </div>

              <div className="owner-details">
                <h3>{listing.owner_name || "Property Owner"}</h3>
                <p>{listing.owner_email || "Email not available"}</p>
                <span className="owner-badge">Verified Owner</span>
              </div>

              {listing.owner_email && (
                <a href={`mailto:${listing.owner_email}`} className="contact-owner-btn">
                  Contact Owner
                </a>
              )}
            </div>
          </div>

          <aside className="ai-card">
            <p className="ai-label">AI Compatibility</p>

            {!aiResult ? (
              <>
                <h2>Check your match</h2>
                <p>
                  Generate a smart compatibility score based on budget, location,
                  room type, and amenities.
                </p>

                <button
                  className="ai-generate-btn"
                  onClick={generateCompatibility}
                  disabled={loadingAI}
                >
                  {loadingAI ? "Generating..." : "Generate AI Match"}
                </button>
              </>
            ) : (
              <>
                <div className="ai-score">{aiResult.score}%</div>
                <h2>{aiResult.summary}</h2>

                <h4>Why it matches</h4>
                <ul>
                  {aiResult.pros?.map((item, index) => (
                    <li key={index}>✅ {item}</li>
                  ))}
                </ul>

                {aiResult.cons?.length > 0 && (
                  <>
                    <h4>Things to consider</h4>
                    <ul>
                      {aiResult.cons.map((item, index) => (
                        <li key={index}>⚠️ {item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </aside>
        </section>
      </main>
    </>
  );
}

export default ListingDetails;