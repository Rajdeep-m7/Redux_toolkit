import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">MyShop</div>

      <nav className="nav-links">
        <Link to={'/'}>Home</Link>
      </nav>
      <AddToCart />
    </header>
  );
}

export default Header;
