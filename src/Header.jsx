import React from "react";
import AddToCart from "./AddToCart";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">MyShop</div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </nav>
      <AddToCart />
    </header>
  );
}

export default Header;
