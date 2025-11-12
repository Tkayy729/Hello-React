import { useState } from "react";
import RestaurantCard, { WithVegLabel } from "./RestaurantCard";
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
  const VegRestaurantCard = WithVegLabel(RestaurantCard);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="pt-20 place-content-center bg-gray-400">
      <div className="flex justify-start  m-3 p-2">
        <div className="search">
          <input
            type="text"
            placeholder="eg. burger hub"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="w-60 border border-gray-500 rounded-md outline-none p-1 ml-5 mr-1"
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .replaceAll(" ", "")
                  .includes(searchText.toLowerCase().replaceAll(" ", ""))
              );
              setFilteredRestaurants(filteredRes);
            }}
            className="btn p-1 m-1 bg-gray-800 text-gray-50 rounded-lg hover:cursor-pointer "
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setFilteredRestaurants(filteredRes);
            }}
            className="bg-gray-800 text-gray-50 p-1 m-1 rounded-lg hover:cursor-pointer px-1"
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 px-10">
        {filteredRestaurants?.map((restaurant) => {
          const info = restaurant?.info;
          console.log("info", info);
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants1/" + restaurant?.info?.id}
            >
              {info?.veg ? (
                <VegRestaurantCard
                  {...info}
                  deliveryTime={restaurant?.info?.sla?.deliveryTime}
                />
              ) : (
                <RestaurantCard
                  {...info}
                  deliveryTime={restaurant?.info?.sla?.deliveryTime}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
