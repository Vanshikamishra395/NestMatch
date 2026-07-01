import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../services/api";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "tenant",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Create Account</h2>

        <p>Join NestMatch today.</p>

        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>I am a</label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
          </select>

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;