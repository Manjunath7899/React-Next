import { addToCart, removeFromCart } from "@/redux/slices/CartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface AddToCartQtyProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
}

const AddToCartQty: React.FC<AddToCartQtyProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    dispatch(addToCart(product));
  };

  const handleDecrement = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="flex w-28 h-10 justify-between items-center rounded border border-gray-300 px-4">
      <button
        aria-label="Decrease quantity"
        className="text-2xl cursor-pointer text-gray-500 hover:text-red-500 transition"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        aria-label="Increase quantity"
        className="text-xl cursor-pointer text-gray-500 hover:text-green-500 transition"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default AddToCartQty;
