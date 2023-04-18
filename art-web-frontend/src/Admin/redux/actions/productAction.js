import axios from "axios";
import { API_URL } from "../../../config";
import * as productActionTypes from "../constants/productactiontypes";
import { toast } from "react-toastify";

export const getAdminProduct = (currentPage) => async (dispatch, getstate) => {
  try {
    dispatch({
      type: productActionTypes.ADMIN_PRODUCT_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data } = await axios.get(
      `${API_URL}/user/products/?page=${currentPage}`,
      config
    );

    dispatch({
      type: productActionTypes.ADMIN_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productActionTypes.ADMIN_PRODUCT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const createProduct = (productData) => async (dispatch, getstate) => {
  try {
    dispatch({
      type: productActionTypes.CREATE_PRODUCT_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data } = await axios.post(
      `${API_URL}/user/product/new`,
      productData,
      config
    );

    dispatch({
      type: productActionTypes.CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productActionTypes.CREATE_PRODUCT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getProductDetail = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: productActionTypes.ADMIN_PRODUCT_DETAIL_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/user/products/${id}`, config);

    disptach({
      type: productActionTypes.ADMIN_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: productActionTypes.ADMIN_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editProduct = (id, productData) => async (disptach, getstate) => {
  try {
    disptach({
      type: productActionTypes.EDIT_PRODUCT_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data, status } = await axios.put(
      `${API_URL}/user/product/${id}`,
      productData,
      config
    );
    if (status === 200) {
      toast.success("Product Edited Successfully");
    }
    disptach({
      type: productActionTypes.EDIT_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: productActionTypes.EDIT_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(error?.response?.data?.message);
  }
};

export const deleteProduct = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: productActionTypes.DELETE_PRODUCT_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.delete(
      `${API_URL}/user/product/${id}`,
      config
    );

    disptach({
      type: productActionTypes.DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: productActionTypes.DELETE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
