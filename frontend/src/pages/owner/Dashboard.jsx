import Navbar from "../../components/common/Navbar";
import ListingForm from "../../components/listing/ListingForm";
import OwnerRequests from "../../components/owner/OwnerRequests";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px 8%" }}>
        <h1>Manage Your Properties</h1>
        <p>Add a new room or apartment listing.</p>

        <ListingForm />
          <OwnerRequests />
      </main>
    </>
  );
}

export default Dashboard;