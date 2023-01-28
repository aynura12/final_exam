import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav_icons">
        <img
          id="nav_img"
          src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png"
          alt="navIcon"
        />
        <h5 id="nav_title">NATURAL COSMETICS</h5>
      </div>

      <div className="nav_links">
        <Link to="/" className="nav_link">
          HOME
        </Link>
        <Link to="/about" className="nav_link">
          ABOUT US
        </Link>
        <Link to="/shop" className="nav_link">
          SHOP
        </Link>
        <Link to="/add" className="nav_link">
          ADD
        </Link>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </nav>
  );
};

export default Navbar;
