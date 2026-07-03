import { Link, useNavigate } from "react-router-dom";
import { Home, Search, Info, LogOut } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    localStorage.clear();
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <Home size={26} />
        <span>NestMatch</span>
      </Link>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/tenant/dashboard">Find Rooms</Link>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-links">
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="nav-btn">
              Register
            </Link>
          </>
        )}

        {user && (
          <>
            <Link
              to={
                user.role === "owner"
                  ? "/owner/dashboard"
                  : "/tenant/dashboard"
              }
            >
              Dashboard
            </Link>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              Logout
            </button>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;