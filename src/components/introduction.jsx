import React, { useState } from "react";
import RequestInviteButton from "./invite-button";

function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction-heading">
        Next generation digital banking
      </div>
      <div className="introduction-text">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </div>
      <div>
        <RequestInviteButton></RequestInviteButton>
      </div>
    </div>
  );
}

export default Introduction;
