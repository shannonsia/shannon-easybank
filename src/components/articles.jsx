import React, { useState } from "react";

function IndividualArticles({ image, author, title, text }) {
  return (
    <>
      <section className="article">
        <img src={image} className="article-image"></img>
        <div className="article-author">By {author}</div>
        <div className="article-title">{title}</div>
        <div className="article-text">{text}</div>
      </section>
    </>
  );
}

function LatestArticles() {
  return (
    <div className="article-section">
      <h1>Latest Articles</h1>
      <div className="article-container">
        <IndividualArticles
          image="../images/image-currency.jpg"
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
          text="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
        />
        <IndividualArticles
          image="../images/image-restaurant.jpg"
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
        />
        <IndividualArticles
          image="../images/image-plane.jpg"
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
        />
        <IndividualArticles
          image="../images/image-confetti.jpg"
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
        />
      </div>
    </div>
  );
}

export default LatestArticles;
