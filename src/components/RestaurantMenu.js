import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=670");
      console.log(res)
    
    }
    fetchData();
  }, [resId]);

  

  // const {
  //   name,
  //   areaName,
  //   locality,
  //   cuisines = [],
  //   costForTwoMessage,
  //   avgRatingString,
  //   sla: { deliveryTime } = {},
  //   aggregatedDiscountInfo: { header } = {},
  // } = resMenuInfo;

  return (
    // <div>
    //   <h1>{name}</h1>
    //   <p>Cuisines: {cuisines.join(", ")}</p>
    //   <p>
    //     Locality: {locality}, Area name: {areaName}
    //   </p>
    //   <p>cost for two: {costForTwoMessage}</p>
    //   <p>Rating⭐ :{avgRatingString}</p>
    //   <p>🕒 Delivery Time: {deliveryTime} mins</p>
    //   <p>{header}</p>
    // </div>
    <div>
      Name of restaurant
    </div>
  );
};

export default RestaurantMenu;
