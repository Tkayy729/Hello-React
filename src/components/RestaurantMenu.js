import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${MENU_API + resId}`);
        const json = await data.json();
        setResMenuInfo(json?.data?.cards?.[2]?.card?.card?.info);
        console.log(json?.data?.cards?.[2]?.card?.card?.info);
      } catch (err) {
        console.error("Error fetching restaurant data:", err);
      }
    };

    fetchData();
  }, [resId]);

  if (!resMenuInfo) {
    return <h2>Loading restaurant info...</h2>;
  }

  const {
    name,
    areaName,
    locality,
    cuisines = [],
    costForTwoMessage,
    avgRatingString,
    sla: { deliveryTime } = {},
    aggregatedDiscountInfo: { header } = {},
  } = resMenuInfo;

  return (
    <div>
      <h1>{name}</h1>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>
        Locality: {locality}, Area name: {areaName}
      </p>
      <p>cost for two: {costForTwoMessage}</p>
      <p>Rating⭐ :{avgRatingString}</p>
      <p>🕒 Delivery Time: {deliveryTime} mins</p>
      <p>{header}</p>
    </div>
  );
};

export default RestaurantMenu;
