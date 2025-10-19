import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  } = useRestaurant();
  const [searchText, setSearchText] = useState("");
  
  if (error) {
    return (
      <div>
        <h1>Error:</h1>
        <h3>{error}</h3>
      </div>
    );
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().replaceAll(" ", ""))
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            search
          </button>
        </div>
        <div className="filter"></div>
        <button
          onClick={() => {
            const filteredRes = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.1
            );
            setFilteredRestaurants(filteredRes);
          }}
          className="filter-btn"
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard
              {...restaurant?.info}
              deliveryTime={restaurant?.info?.sla?.deliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
