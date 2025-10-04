const RestaurantCard = ({ name, location, rating, image, time }) => {
    return (
      <div className="res-card">
        <img src={image} alt="res-log" className="res-logo" />
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h4>{rating}</h4>
        <h4>{time}</h4>
      </div>
    );
  };

  export default RestaurantCard;