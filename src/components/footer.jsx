import React, { useState } from "react";
import RequestInviteButton from "./invite-button";

{
  /* function SocialMediaIcon() {
  const socialMedia = ["Facebook"];

  return (
    <>
      <div>
        {socialMedia.map((icon) => (
          <div key={icon}>{icon}</div>
        ))}
      </div>
    </>
  );
}
*/
}

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
    "../images/icon-facebook.svg",
    "../images/icon-youtube.svg",
    "../images/icon-twitter.svg",
    "../images/icon-pinterest.svg",
    "../images/icon-instagram.svg",
  ];

  return (
    <div className="footer-bar">
      <div className="footer-left">
        <img src={"../images/logo.svg"}></img>
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
