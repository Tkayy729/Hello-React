import React from "react";
import { ALT_IMG_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        const { name, price, description } = item.card.info;
        return (
          <div
            className="flex justify-between p-2 border-b-4 "
            key={item.card.info.id}
          >
            <div className="flex flex-col">
              <span className="font-bold">{name}</span>
              <span className="text-xs">{description}</span>
              <span className="text-xs">₹{price / 100}</span>
            </div>
            <div>
              <img width={100} alt="img" src={ALT_IMG_URL} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
