import * as categoriesActionTypes from "../constants/categoryactiontypes";

export const allCategoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case categoriesActionTypes.ALL_CATEGORIES_REQUEST:
      return {
        loading: true,
        category: [],
      };
    case categoriesActionTypes.ALL_CATEGORIES_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case categoriesActionTypes.ALL_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createCategoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case categoriesActionTypes.CREATE_CATEGORIES_REQUEST:
      return {
        loading: true,
        category: [],
      };
    case categoriesActionTypes.CREATE_CATEGORIES_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case categoriesActionTypes.CREATE_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const detailcategoryReducer = (
  state = { categoryDetail: {} },
  action
) => {
  switch (action.type) {
    case categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_REQUEST:
      return {
        loading: true,
        categoryDetail: {},
      };
    case categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_SUCCESS:
      return {
        loading: false,
        categoryDetail: action.payload.data,
      };
    case categoriesActionTypes.ADMIN_CATEGORIES_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editcateoryReducer = (state = { editedCategory: {} }, action) => {
  switch (action.type) {
    case categoriesActionTypes.EDIT_CATEGORIES_REQUEST:
      return {
        loading: true,
        editedCategory: {},
      };
    case categoriesActionTypes.EDIT_CATEGORIES_SUCCESS:
      return {
        loading: false,
        editedCategory: action.payload,
      };
    case categoriesActionTypes.EDIT_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deletecategoryReducer = (
  state = { deletedCategory: {} },
  action
) => {
  switch (action.type) {
    case categoriesActionTypes.DELETE_CATEGORIES_REQUEST:
      return {
        loading: true,
        deletedCategory: {},
      };
    case categoriesActionTypes.DELETE_CATEGORIES_SUCCESS:
      return {
        loading: false,
        deletedCategory: action.payload,
      };
    case categoriesActionTypes.DELETE_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
