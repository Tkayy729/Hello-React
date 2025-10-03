import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./assets/restaurants";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, location, rating, image, time } = props;
  return (
    <div className="res-card">
      <img src={image} alt="res-log" className="res-logo" />
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((res, index) => (
          <RestaurantCard
            key={index}
            name={res.name}
            location={res.location}
            rating={res.rating}
            time={res.time}
            image={res.image}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
