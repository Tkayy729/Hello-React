import { ALT_IMG_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="res-card">
      <img src={ALT_IMG_URL} alt="res-log" className="res-logo" />
      <h3>{name}</h3>
      <h5>{cuisines}</h5>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} ratings</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
