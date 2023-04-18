import axios from "axios";
import * as shippingactionTypes from "./constants";
import { API_URL } from "../../config";
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: shippingactionTypes.SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

//place order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: shippingactionTypes.CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${API_URL}/public/order`, order, config);
    dispatch({
      type: shippingactionTypes.CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: shippingactionTypes.CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: shippingactionTypes.CLEAR_ERRORS,
  });
};
