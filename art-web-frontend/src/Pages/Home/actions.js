import { API_URL } from "../../config";
import * as productActionTypes from "./constants";
import axios from "axios";

//get all products

export const getProducts = (currentPage, searchtext) => async (disptach) => {
  console.log("searchtext", searchtext);
  try {
    disptach({
      type: productActionTypes.ALL_PRODUCT_REQUEST,
    });
    let link = `${API_URL}/public/products/?page=${currentPage}`;
    if (searchtext) {
      link = `${API_URL}/public/products/?search=${searchtext}`;
    }
    const { data } = await axios.get(link);
    disptach({
      type: productActionTypes.ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: productActionTypes.ALL_PRODUCT_FAIL,
      payload: error.data.error,
    });
  }
};

//clearing errors
export const clearErrors = () => async (disptach) => {
  disptach({
    type: productActionTypes.CLEAR_ERRORS,
  });
};
