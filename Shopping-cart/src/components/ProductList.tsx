"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddToCartQty from "./AddToCartQty";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addToCart } from "@/redux/slices/CartSlice";
import Toast from "./Toast";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductListProps {
  productData: Product[];
  pageStartIndex: number;
  pageEndIndex: number;
}

export const ProductList: React.FC<ProductListProps> = ({
  productData,
  pageStartIndex,
  pageEndIndex,
}) => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToastMessage] = useState("");

  const navigateToProductDetailsPage = (id: number) => {
    router.push(`/products/${id}`);
  };

  const handleAddToCart = (productItem: Product) => {
    dispatch(
      addToCart({
        id: productItem?.id,
        title: productItem.title,
        price: productItem.price,
        thumbnail: productItem.thumbnail,
      })
    );
    setToastMessage("Added to cart!");
  };

  return (
    <div className="grid grid-cols-4 gap-10 px-5 py-8">
      {productData &&
        productData.length > 0 &&
        productData.slice(pageStartIndex, pageEndIndex).map((productItem) => {
          const itemInCart = cartItems.find(
            (item) => item.id === productItem.id
          );
          return (
            <div
              key={productItem.id}
              className="shadow p-3 border border-indigo-300 rounded-2xl cursor-pointer"
            >
              <img
                onClick={() => navigateToProductDetailsPage(productItem.id)}
                src={productItem.thumbnail}
                alt={productItem.title}
              />
              <div className="">
                <h4 className="text-indigo-600">{productItem.title}</h4>
                <h4 className="text-indigo-600">Rs: {productItem.price}</h4>
              </div>
              {itemInCart ? (
                <AddToCartQty product={productItem} />
              ) : (
                <div
                  onClick={() => {
                    handleAddToCart(productItem);
                  }}
                  className="w-1/2 bg-indigo-600 rounded-lg flex justify-center gap-4 px-2 py-2 mt-2 mb-2 cursor-pointer"
                >
                  <button className="text-white font-semibold text-xs text-shadow-md cursor-pointer">
                    Add To Cart
                  </button>
                </div>
              )}
              {toast && <Toast message={toast} onClose={() => {}} />}
            </div>
          );
        })}
    </div>
  );
};
