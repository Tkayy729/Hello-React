import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  //const [showItems, setShowItems] = useState(null);

  return (
    <div className="w-6/12 mx-auto bg-red">
      <div className="m-3">
        <div
          className="flex justify-between shadow-lg bg-gray-400 p-2 rounded-lg cursor-pointer hover:bg-gray-300 transition"
          onClick={onToggle}
        >
          <span className="font-bold text-md">{data?.title}</span>
          {/* <span>{showItems === index ? "⬆️" : "⬇️"}</span> */}
          <span>{"⬇️"}</span>
        </div>

        <div className="shadow-inner bg-gray-100 p-2 rounded-b-lg">
          {isOpen && <ItemList data={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
