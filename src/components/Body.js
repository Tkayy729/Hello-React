import { useState } from "react";
import { MockRestaurants } from "../utils/MockRestaurants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [filteredRestaurants, setFilteredrestaurant] =
    useState(MockRestaurants);

  const handlefilter = () => {
    const filteredrestaurants = MockRestaurants.filter(
      (restaurant) => restaurant.rating < 4
    );
    setFilteredrestaurant(filteredrestaurants);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button onClick={handlefilter} className="filter-btn">
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
