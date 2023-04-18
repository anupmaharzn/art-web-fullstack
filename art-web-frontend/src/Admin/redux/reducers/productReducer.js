import * as productActionTypes from "../constants/productactiontypes";

export const adminProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productActionTypes.ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case productActionTypes.ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case productActionTypes.ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const createProductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case productActionTypes.CREATE_PRODUCT_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case productActionTypes.CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case productActionTypes.CREATE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const adminproductDetailReducer = (
  state = { productDetail: {} },
  action
) => {
  switch (action.type) {
    case productActionTypes.ADMIN_PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        productDetail: {},
      };
    case productActionTypes.ADMIN_PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        productDetail: action.payload.data,
      };
    case productActionTypes.ADMIN_PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editproductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productActionTypes.EDIT_PRODUCT_REQUEST:
      return {
        loading: true,
        product: {},
      };
    case productActionTypes.EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case productActionTypes.EDIT_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteproductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productActionTypes.DELETE_PRODUCT_REQUEST:
      return {
        loading: true,
        product: {},
      };
    case productActionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case productActionTypes.DELETE_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
