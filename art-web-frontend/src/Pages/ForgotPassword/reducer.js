import * as forgotactionTypes from "./constants";

export const forgotPasswordReducer = (state = { forgotdata: {} }, action) => {
  switch (action.type) {
    case forgotactionTypes.FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case forgotactionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        forgotdata: action.payload,
      };
    case forgotactionTypes.FORGOT_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
