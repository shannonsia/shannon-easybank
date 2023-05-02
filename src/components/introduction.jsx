import React, { useState } from "react";
import RequestInviteButton from "./invite-button";

function Introduction() {
  return (
    <div className="introduction-container">
      <div className="introduction">
        <div className="introduction-heading">
          Next generation digital banking
        </div>
        <div className="introduction-text">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </div>
        <div>
          <RequestInviteButton></RequestInviteButton>
        </div>
      </div>
      <div className="introduction-image">
        <img className="image-two" src="../images/image-mockups.png"></img>
        <img className="image-one" src="../images/bg-intro-desktop.svg"></img>
      </div>
    </div>
  );
}

export default Introduction;
