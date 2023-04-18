/* eslint-disable no-case-declarations */
import * as cartactionTypes from "./constants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartactionTypes.ADD_TO_CART:
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product_id === item.product_id
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            //yadi cartItems ma vako ra product exist same ho vani item else i
            i.product_id === isItemExist.product_id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case cartactionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.product_id !== action.payload
        ),
      };
    case cartactionTypes.RESET_CART_ITEM:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};
