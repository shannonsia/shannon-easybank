import React, { useState } from "react";
import RequestInviteButton from "./invite-button";

function Footer() {
  const footerItems = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];

  const socialMediaIcons = [
    "icon-facebook.svg",
    "icon-youtube.svg",
    "icon-twitter.svg",
    "icon-pinterest.svg",
    "icon-instagram.svg",
  ];

  return (
    <div className="footer-bar">
      <div className="footer-left">
        <img src={"logo.svg"}></img>
        <div>
          {socialMediaIcons.map((icon) => (
            <img src={icon} key={icon} className="footer-socials"></img>
          ))}
        </div>
      </div>
      <div className="footer-middle">
        {footerItems.map((item) => (
          <div key={item} className="footer-items">
            {item}
          </div>
        ))}
      </div>
      <div className="footer-right">
        <RequestInviteButton></RequestInviteButton>
        <div className="footer-copyright">
          {" "}
          &copy; Easybank. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
