import React, { useState } from "react";

function IndividualBenefits({ image, heading, text }) {
  return (
    <section className="benefits">
      <img src={image} className="benefits-image"></img>
      <div className="benefits-heading">{heading}</div>
      <div className="benefits-text">{text}</div>
    </section>
  );
}

function Benefits() {
  return (
    <div className="benefits-section">
      <div className="headings">Why choose Easybank?</div>
      <div className="benefits-intro">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </div>
      <div className="benefits-container">
        <IndividualBenefits
          image="icon-online.svg"
          heading="Online Banking"
          text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <IndividualBenefits
          image="icon-budgeting.svg"
          heading="Simple Budgeting"
          text="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
        />
        <IndividualBenefits
          image="icon-onboarding.svg"
          heading="Fast Onboarding"
          text="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <IndividualBenefits
          image="icon-api.svg"
          heading="Open API"
          text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </div>
  );
}

export default Benefits;
