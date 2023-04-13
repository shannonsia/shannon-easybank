import React, { useState } from "react";
import RequestInviteButton from "./invite-button.jsx";

function Navbar() {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

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
      <RequestInviteButton></RequestInviteButton>
    </div>
  );
}

export default Navbar;
