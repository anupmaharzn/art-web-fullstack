import * as shippingactionTypes from "./constants";

export const shippingInfoReducer = (state = { shippingInfo: {} }, action) => {
  switch (action.type) {
    case shippingactionTypes.SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case shippingactionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//order reducer
export const neworderReducer = (state = {}, action) => {
  switch (action.type) {
    case shippingactionTypes.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case shippingactionTypes.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case shippingactionTypes.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case shippingactionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
