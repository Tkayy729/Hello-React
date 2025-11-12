import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // 👈 for accordion
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/listRestaurantMenu/${resId}`);
      const json = await response.json();
      setResInfo(json.data);

      // Debug log
      console.log("Menu Items:", json.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  if (!resInfo)
    return <div className="text-center pt-28 text-gray-500">Loading...</div>;

  // ✅ Safely extract restaurant info
  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("cat", categories);

  if (!info)
    return (
      <div className="text-center pt-28 text-gray-500">
        No restaurant data found
      </div>
    );

  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    locality,
    avgRatingString,
    sla,
  } = info;

  // ✅ Helper function for price formatting
  const formatPrice = (price) => {
    if (!price) return "N/A";
    return `₹${(price / 100).toFixed(2)}`;
  };
  //     cat?.card?.card?. = data
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-purple-50 to-white flex flex-col items-center px-4">
      {/* Restaurant Details */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{name}</span>
      </div>

      {categories
        ?.filter((cat) => cat?.card?.card?.title)
        .map((cat, index) => (
          <RestaurantCategory
            key={cat?.card?.card?.title || index}
            data={cat?.card?.card}
            isOpen ={openIndex === index}
            onToggle ={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
