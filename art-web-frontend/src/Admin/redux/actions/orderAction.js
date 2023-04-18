import * as orderActionTypes from "../constants/orderactiontypes";

import axios from "axios";
import { API_URL } from "../../../config";

export const getAllOrders = () => async (dispatch, getstate) => {
  try {
    dispatch({
      type: orderActionTypes.ALL_ORDERS_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data } = await axios.get(`${API_URL}/user/orders`, config);

    dispatch({
      type: orderActionTypes.ALL_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: orderActionTypes.ALL_ORDERS_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getOrderDetail = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: orderActionTypes.ADMIN_ORDER_DETAIL_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/user/order/${id}`, config);

    disptach({
      type: orderActionTypes.ADMIN_ORDER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: orderActionTypes.ADMIN_ORDER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editOrder = (id, orderData) => async (disptach, getstate) => {
  try {
    disptach({
      type: orderActionTypes.EDIT_ORDER_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.put(
      `${API_URL}/user/order/${id}`,
      orderData,
      config
    );

    disptach({
      type: orderActionTypes.EDIT_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: orderActionTypes.EDIT_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteOrder = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: orderActionTypes.DELETE_ORDER_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.delete(`${API_URL}/user/order/${id}`, config);

    disptach({
      type: orderActionTypes.DELETE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: orderActionTypes.DELETE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
