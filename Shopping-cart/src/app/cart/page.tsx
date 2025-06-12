"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div className="w-full h-full grid grid-cols-1">
      <div className="flex justify-center items-center bg-amber-300 p-2">
        <h1 className="text-3xl text-indigo-600 font-bold">Cart Page</h1>
      </div>

      <div className="p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded p-4 shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="text-sm font-bold">
                    ₹{item.quantity! * item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
