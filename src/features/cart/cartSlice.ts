import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type CartItem, type CartState } from "@/utils";
import { toast } from "@/components/ui/use-toast";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 700,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: () => {},
    clearCart: () => {},
    removeItem: () => {},
    editItem: () => {},
    calculateTotal: () => {},
  },
});
export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
