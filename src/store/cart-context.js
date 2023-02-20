import React from "react";
import Cart from "../components/Cart/Cart";

// MANAGE STATE //
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});
export default CartContext;
