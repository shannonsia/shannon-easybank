import React, { useState } from "react";
import RequestInviteButton from "./invite-button.jsx";

function Navbar() {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

  function mobileNav() {}

  return (
    <div className="nav-container">
      <img src="/logo.svg" height="25" />
      <div className="nav-bar">
        {navItems.map((item) => (
          <div key={item} className="nav-items">
            {item}
          </div>
        ))}
      </div>

      <div className="nav-button">
        <RequestInviteButton></RequestInviteButton>
      </div>

      <div className="nav-button-mobile">
        <img src="/nav.jpg" />
      </div>
    </div>
  );
}

export default Navbar;
