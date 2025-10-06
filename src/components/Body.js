import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchedText(e.target.value)}
            value={searchedText}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchedText.toLowerCase())
              );
              setListOfRestaurants(filteredRes);
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
            setListOfRestaurants(filteredRes);
          }}
          className="filter-btn"
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard
            {...restaurant?.info}
            deliveryTime={restaurant?.info?.sla?.deliveryTime}
            key={restaurant?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
