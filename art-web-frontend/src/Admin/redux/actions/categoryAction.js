import * as categoriesActionTypes from "../constants/categoryactiontypes";
import axios from "axios";
import { API_URL } from "../../../config";
import { toast } from "react-toastify";
import { ADMIN_CATEGORY_PAGE } from "../../../routes";
export const getAllCategory = () => async (dispatch, getstate) => {
  try {
    dispatch({
      type: categoriesActionTypes.ALL_CATEGORIES_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data } = await axios.get(`${API_URL}/user/category`, config);

    dispatch({
      type: categoriesActionTypes.ALL_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: categoriesActionTypes.ALL_CATEGORIES_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const createCategory = (categoryData) => async (dispatch, getstate) => {
  try {
    dispatch({
      type: categoriesActionTypes.CREATE_CATEGORIES_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const { data, status } = await axios.post(
      `${API_URL}/user/category/new`,
      categoryData,
      config
    );
    if (status === 201) {
      toast.success("Category Created Successfully");
    }
    dispatch({
      type: categoriesActionTypes.CREATE_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: categoriesActionTypes.CREATE_CATEGORIES_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const getCategoryDetail = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/user/category/${id}`, config);

    disptach({
      type: categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(error?.response?.data?.message);
  }
};

export const editCategory =
  (id, categoryData, navigate) => async (disptach, getstate) => {
    try {
      disptach({
        type: categoriesActionTypes.EDIT_CATEGORIES_REQUEST,
      });
      const userInfo = getstate().user.userInfo;

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      };

      const { data, status } = await axios.put(
        `${API_URL}/user/category/${id}`,
        categoryData,
        config
      );
      if (status === 200) {
        toast.success("Category Edited Successfully");
      }
      navigate(ADMIN_CATEGORY_PAGE);
      disptach({
        type: categoriesActionTypes.EDIT_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      disptach({
        type: categoriesActionTypes.EDIT_CATEGORIES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error?.response?.data?.message);
    }
  };

export const deleteCategory = (id) => async (disptach, getstate) => {
  try {
    disptach({
      type: categoriesActionTypes.DELETE_CATEGORIES_REQUEST,
    });
    const userInfo = getstate().user.userInfo;

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data, status } = await axios.delete(
      `${API_URL}/user/category/${id}`,
      config
    );
    if (status === 200) {
      toast.success("Category Deleted Sucessfully");
    }

    disptach({
      type: categoriesActionTypes.DELETE_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: categoriesActionTypes.DELETE_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(error?.response?.data?.message);
  }
};
