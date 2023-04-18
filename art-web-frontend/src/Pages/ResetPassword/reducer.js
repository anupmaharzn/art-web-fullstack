import * as resetactionTypes from "./constant";

export const resetPasswordReducer = (state = { passInfo: {} }, action) => {
  switch (action.type) {
    case resetactionTypes.RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case resetactionTypes.RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        passInfo: action.payload,
      };
    case resetactionTypes.RESET_PASSWORD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
