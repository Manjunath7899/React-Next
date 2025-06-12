import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
}

interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item: Product) => item.id === actions.payload?.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem?.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...actions.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, actions: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === actions.payload.id
      );
      if (
        existingItem &&
        existingItem?.quantity &&
        existingItem?.quantity > 1
      ) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems.filter((item) => item.id !== actions.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
