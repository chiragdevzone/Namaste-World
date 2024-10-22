import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
        />
      </div>
      <div className="link-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="card-container">
      <div>
        <img
          alt="biryani-image"
          className="food-img"
          src="https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg"
        />
      </div>

      <h3>Apna Kitchen</h3>
      <h3>Rating - 4.5</h3>
      <h5>
        A classic and savory pizza topped with a blanket of melting cheese,
        oozing with flavor and sure to satisfy.
      </h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <h3>search</h3>
      </div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
