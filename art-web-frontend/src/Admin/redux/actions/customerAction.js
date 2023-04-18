import * as customerActionTypes from "../constants/customeractiontypes";
import axios from "axios";
import { API_URL } from "../../../config";

export const getAllCustomers = () => async (dispatch, getstate) => {
  try {
    dispatch({
      type: customerActionTypes.ALL_CUSTOMERS_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data } = await axios.get(`${API_URL}/user/customers`, config);

    dispatch({
      type: customerActionTypes.ALL_CUSTOMERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: customerActionTypes.ALL_CUSTOMERS_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const deleteCustomer = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: customerActionTypes.DELETE_CUSTOMERS_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/user/customer/${id}`,
      config
    );

    disptach({
      type: customerActionTypes.DELETE_CUSTOMERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: customerActionTypes.DELETE_CUSTOMERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
