import * as detailActionTypes from "./constants";
import { API_URL } from "../../config";
import axios from "axios";
export const getProductDetail = (id) => async (disptach) => {
  try {
    disptach({
      type: detailActionTypes.PRODUCT_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${API_URL}/public/products/${id}`);

    disptach({
      type: detailActionTypes.PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: detailActionTypes.PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (disptach) => {
  disptach({
    type: detailActionTypes.CLEAR_ERRORS,
  });
};
