import Navbar from "../../components/Navbar";
import ListingForm from "../../components/ListingForm";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px 8%" }}>
        <h1>Manage Your Properties</h1>
        <p>Add a new room or apartment listing.</p>

        <ListingForm />
      </main>
    </>
  );
}

export default Dashboard;