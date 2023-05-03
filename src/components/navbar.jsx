import React, { useState } from "react";
import RequestInviteButton from "./invite-button.jsx";

function Navbar() {
  const navItems = ["Home", "About", "Contact", "Blog", "Careers"];
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
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

        <div
          className="nav-burger-mobile"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          style={{ display: isNavExpanded ? "none" : "block" }}
        >
          <img src="/nav.jpg" id="mobile-icon" />
        </div>

        <div
          className="nav-close-mobile"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          style={{ display: isNavExpanded ? "block" : "none" }}
        >
          <img src="/icon-close.svg" id="close-icon" />
        </div>
      </div>

      <div
        className="nav-mobile-container"
        style={{ display: isNavExpanded ? "block" : "none" }}
      >
        {navItems.map((item) => (
          <div key={item} className="nav-mobile">
            {item}
          </div>
        ))}
      </div>

      <div
        className="black-screen"
        style={{ display: isNavExpanded ? "block" : "none" }}
      ></div>
    </div>
  );
}

export default Navbar;
