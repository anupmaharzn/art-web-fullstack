import * as customerActionTypes from "../constants/customeractiontypes";

export const allCustomerReducer = (state = { customers: [] }, action) => {
  switch (action.type) {
    case customerActionTypes.ALL_CUSTOMERS_REQUEST:
      return {
        loading: true,
        customers: [],
      };
    case customerActionTypes.ALL_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customers: action.payload,
      };
    case customerActionTypes.ALL_CUSTOMERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCustomerReducer = (state = { customer: {} }, action) => {
  switch (action.type) {
    case customerActionTypes.DELETE_CUSTOMERS_REQUEST:
      return {
        loading: true,
        customer: {},
      };
    case customerActionTypes.DELETE_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        customer: action.payload,
      };
    case customerActionTypes.DELETE_CUSTOMERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
