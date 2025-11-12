import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://namastedev.com/api/v1/listRestaurants"
      );
      const json = await data.json();
      const restaurants =
        json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    error,
    loading,
  };
};

export default useRestaurant;
