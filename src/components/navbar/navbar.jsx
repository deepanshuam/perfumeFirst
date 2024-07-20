// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Correctly destructure the Link component
import "./navbar.css"; // Assuming you are using CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/categories">Product Categories</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
