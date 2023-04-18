import * as productActionTypes from "./constants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productActionTypes.ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case productActionTypes.ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case productActionTypes.ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case productActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
