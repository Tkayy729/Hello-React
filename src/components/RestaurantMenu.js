import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
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
      console.log(
        "Menu Items:",
        json.data
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  if (!resInfo)
    return <div className="text-center pt-28 text-gray-500">Loading...</div>;

  // ✅ Safely extract menu items
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  // ✅ Safely extract restaurant info
  const info = resInfo?.cards?.[2]?.card?.card?.info;
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

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-purple-50 to-white flex flex-col items-center px-4">
      {/* 🏠 Restaurant Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl text-center border border-purple-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-500 mb-1">
          {cuisines?.join(", ") || "Various cuisines"}
        </p>
        <p className="text-gray-500 mb-3">
          {areaName} • {locality}
        </p>

        {/* ⭐ Ratings + Delivery Info */}
        <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-600 flex-wrap">
          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
            ⭐ {avgRatingString || "4.0"}
          </div>
          <div>• {sla?.deliveryTime || "30"} mins</div>
          <div>• {sla?.lastMileTravelString || "2.5 km"}</div>
          <div>• {costForTwoMessage}</div>
        </div>
      </div>

      {/* 🍴 Menu Section */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Menu
        </h2>

        {itemCards.length === 0 ? (
          <p className="text-center text-gray-400 italic">
            Menu items not available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {itemCards.map((item) => {
              const info = item?.card?.info;
              if (!info) return null;

              return (
                <div
                  key={info?.id}
                  className="flex bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] 
                             transition-transform duration-300 p-4 border border-gray-100"
                >
                  {/* 🖼️ Image */}
                  <img
                    src={
                      info?.imageId
                        ? `${BASE_URL}/images/${info.imageId}`
                        : "https://via.placeholder.com/100"
                    }
                    alt={info?.name}
                    className="w-24 h-24 rounded-lg object-cover mr-4"
                  />

                  {/* 📄 Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {info?.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      {info?.category}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {info?.description}
                    </p>
                    <p className="font-medium text-purple-600">
                      {formatPrice(info?.price || info?.defaultPrice)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
