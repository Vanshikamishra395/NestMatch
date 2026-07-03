import { useState } from "react";
import API_BASE_URL from "../../services/api";
import "./ListingForm.css";

function ListingForm() {
  const [formData, setFormData] = useState({
    owner_id: 2,
    title: "",
    description: "",
    location: "",
    rent: "",
    room_type: "1 BHK",
    furnishing: "Fully Furnished",
    available_from: "2026-07-10",
    preferred_gender: "Any",
    amenities: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      amenities: formData.amenities
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "")
    };

    try {
      const response = await fetch(`${API_BASE_URL}/listings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Listing created successfully!");

        setFormData({
          owner_id: 2,
          title: "",
          description: "",
          location: "",
          rent: "",
          room_type: "1 BHK",
          furnishing: "Fully Furnished",
          available_from:"2026-07-10",
          preferred_gender: "Any",
          amenities: ""
        });

      } else {
        setMessage(data.message);
      }

    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        placeholder="Listing Title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rent"
        placeholder="Rent"
        value={formData.rent}
        onChange={handleChange}
      />

      <input
        type="text"
        name="amenities"
        placeholder="WiFi, AC, Parking"
        value={formData.amenities}
        onChange={handleChange}
      />

      <button type="submit">
        Add Listing
      </button>

      {message && <p>{message}</p>}

    </form>
  );
}

export default ListingForm;