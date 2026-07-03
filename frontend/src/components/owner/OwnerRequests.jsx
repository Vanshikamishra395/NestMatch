import { useEffect, useState } from "react";
import API_BASE_URL from "../../services/api";
import "./OwnerRequests.css";

function OwnerRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || user.role !== "owner") return;

        const response = await fetch(
          `${API_BASE_URL}/interests/requests/${user.id}`
        );

        const data = await response.json();

        if (data.success) {
          setRequests(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <section className="owner-requests">
      <h2>📩 Interested Tenants</h2>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <div className="request-list">
          {requests.map((request) => (
            <div className="request-card" key={request.id}>
              <h3>{request.tenant_name}</h3>

              <p>
                <strong>Email:</strong> {request.tenant_email}
              </p>

              <p>
                <strong>Property:</strong> {request.title}
              </p>

              <p>
                <strong>Location:</strong> {request.location}
              </p>

              <p>
                <strong>Rent:</strong> ₹{request.rent}
              </p>

              <span className="status">{request.status}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default OwnerRequests;