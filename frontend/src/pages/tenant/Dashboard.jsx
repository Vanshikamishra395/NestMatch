import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import RoomCard from "../../components/listing/RoomCard";
import API_BASE_URL from "../../services/api";
import "./Dashboard.css";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
 const [searchParams] = useSearchParams();

const [listings, setListings] = useState([]);
const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/listings`);
        const data = await response.json();

        if (data.success) {
          setListings(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  const filteredListings = listings.filter((listing) =>
    listing.location.toLowerCase().includes(search.toLowerCase()) ||
    listing.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="tenant-page">
        <section className="tenant-header">
          <div>
            <h1>Find Your Next Room</h1>
            <p>Browse verified rooms and apartments that match your lifestyle.</p>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search by location or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
        </section>

        <section className="tenant-layout">
          <aside className="filters-panel">
            <div className="filter-title">
              <h3>Filters</h3>
              <button onClick={() => setSearch("")}>Clear</button>
            </div>

            <label>Location</label>
            <input
              type="text"
              placeholder="Gurugram, Noida..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <label>Room Type</label>
            <div className="checkbox-list">
              <span>□ Single Room</span>
              <span>□ Shared Room</span>
              <span>□ 1 BHK</span>
              <span>□ 2 BHK</span>
            </div>

            <label>Budget</label>
            <div className="budget-range">
              <span>₹0</span>
              <span>₹50,000+</span>
            </div>
            <input type="range" min="0" max="50000" />
          </aside>

          <section className="listings-section">
            <div className="listings-topbar">
              <p>Showing {filteredListings.length} rooms</p>
              <select>
                <option>Sort by: Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="listings-grid">
              {filteredListings.map((listing) => (
                <RoomCard key={listing.id} listing={listing} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Dashboard;