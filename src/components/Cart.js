import React, { useState } from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen pt-28 border-red border bg-gradient-to-br from-purple-50 to-white flex flex-col items-center px-4">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">Cart</span>
      </div>
      <div className="w-full">
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
