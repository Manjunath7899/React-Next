"use client";

import AddToCartQty from "@/components/AddToCartQty";
import Toast from "@/components/Toast";
import { addToCart } from "@/redux/slices/CartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const [productDetails, setProductDetails] = useState<any>({});
  const [toastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const itemInCart = cartItems.find((item) => item.id === productDetails.id);

  const fetchProductApi = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const productDetailsData = await response.json();
      setProductDetails(productDetailsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductApi();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: productDetails?.id,
        title: productDetails.title,
        price: productDetails.price,
        thumbnail: productDetails.thumbnail,
      })
    );
    setToastMessage("Added to cart!");
  };

  return (
    <div className="relative max-h-screen pb-16">
      <div className="fixed top-0 left-0 w-full bg-amber-400 p-2 z-20">
        <h1 className="flex justify-center text-3xl text-indigo-600 font-bold">
          Product details page
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 p-20">
        <div className="flex justify-center items-center bg-white shadow border border-indigo-300 rounded p-4">
          <img
            className="w-full object-contain rounded-2xl"
            src={productDetails.thumbnail}
            alt={productDetails.title}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{productDetails.title}</h1>
          <p className="text-gray-700">{productDetails.description}</p>
          <p className="text-lg font-bold text-green-600">
            ₹{productDetails.price}
          </p>
          <p className="text-sm text-gray-500">Brand: {productDetails.brand}</p>
          <p className="text-sm text-gray-500">
            Category: {productDetails.category}
          </p>
          <p className="text-sm text-yellow-600">
            Rating: {productDetails.rating}
          </p>

          {itemInCart ? (
            <AddToCartQty product={productDetails} />
          ) : (
            <button
              onClick={handleAddToCart}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default ProductDetails;
