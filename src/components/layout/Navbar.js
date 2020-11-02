import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="" alt="" />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/third" className="navbar-item">
            Third
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
              <SignedInLinks />
              <SignedOutLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
