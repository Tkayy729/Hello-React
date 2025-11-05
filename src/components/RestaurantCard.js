import { ALT_IMG_URL, CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="w-64 hover:border  rounded-lg p-3 shadow-md hover:shadow-gray-600 hover:shadow-lg transition flex flex-col">
      <img
        src={ALT_IMG_URL}
        alt="res-log"
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="font-bold text-lg mt-3 truncate p-1">{name}</h3>
      <h5 className="text-gray-600 truncate p-1">{cuisines?.join(", ")}</h5>
      <h4 className="text-sm text-gray-700 p-1">{costForTwo} for two</h4>
      <h4 className="text-sm text-gray-700 p-1">{avgRating} ⭐ ratings</h4>
      <h4 className="text-sm text-gray-700 p-1">{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
