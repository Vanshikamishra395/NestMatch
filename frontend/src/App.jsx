import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import TenantDashboard from "./pages/tenant/Dashboard";
import OwnerDashboard from "./pages/owner/Dashboard";
import ListingDetails from "./pages/ListingDetails";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tenant/dashboard" element={<TenantDashboard />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;