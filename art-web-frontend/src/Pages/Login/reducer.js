import * as loginActionTypes from "./constants";

export const loginUserReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case loginActionTypes.LOGIN_SUCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case loginActionTypes.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case loginActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case loginActionTypes.USER_LOGOUT:
      return {
        userInfo: {},
      };
    default:
      return state;
  }
};
