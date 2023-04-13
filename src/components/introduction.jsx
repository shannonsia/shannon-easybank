import React, { useState } from "react";
import RequestInviteButton from "./invite-button";

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="introduction-heading">Next generation digital banking</h1>
      <div className="introduction-text">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </div>
      <RequestInviteButton></RequestInviteButton>
    </div>
  );
}

export default Introduction;
