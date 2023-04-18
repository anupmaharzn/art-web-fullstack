import * as detailActionTypes from "./constants";

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case detailActionTypes.PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        product: {},
      };
    case detailActionTypes.PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload.data,
      };
    case detailActionTypes.PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case detailActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
