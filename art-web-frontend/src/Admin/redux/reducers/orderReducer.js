import * as orderActionTypes from "../constants/orderactiontypes";

export const allOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderActionTypes.ALL_ORDERS_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case orderActionTypes.ALL_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case orderActionTypes.ALL_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderActionTypes.ADMIN_ORDER_DETAIL_REQUEST:
      return {
        loading: true,
        order: {},
      };
    case orderActionTypes.ADMIN_ORDER_DETAIL_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case orderActionTypes.ADMIN_ORDER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editorderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderActionTypes.EDIT_ORDER_REQUEST:
      return {
        loading: true,
        order: {},
      };
    case orderActionTypes.EDIT_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case orderActionTypes.EDIT_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteorderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderActionTypes.DELETE_ORDER_REQUEST:
      return {
        loading: true,
        order: {},
      };
    case orderActionTypes.DELETE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case orderActionTypes.DELETE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
