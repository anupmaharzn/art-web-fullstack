import * as cartactionTypes from "./constants";
import axios from "axios";
import { API_URL } from "../../config";
//add to cart

export const addItemsToCart = (id) => async (dispatch, getstate) => {
  const { data } = await axios.get(`${API_URL}/public/products/${id}`);
  dispatch({
    type: cartactionTypes.ADD_TO_CART,
    payload: {
      product_id: data.data.id,
      name: data.data.name,
      image: data.data.image,
      price: data.data.price,
      quantity: 1, //or data.data.quantity coz one piece art
    },
  });
  //local storage maa we setitem as json string so we getstate from
  //initial state  createstore ko
  //cartItems maa jun jun payload gako xa tyo matra save gara vanyeko simple vannu parda
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};

//remove from cart
export const removeCartItem = (id) => async (dispatch, getstate) => {
  dispatch({
    type: cartactionTypes.REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};

//remove from cart
export const resetCartItem = () => async (dispatch) => {
  console.log("reseting cart item");
  localStorage.removeItem("cartItems");
  dispatch({
    type: cartactionTypes.RESET_CART_ITEM,
  });
};
