import axios from "axios";
import * as loginActionTypes from "./constants";
import { API_URL } from "../../config";
export const loginUser = (userData) => async (disptach) => {
  console.log("userdata", userData);
  try {
    disptach({
      type: loginActionTypes.LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const loginData = { email: userData.email, password: userData.password };

    const { data } = await axios.post(
      `${API_URL}/auth/login`,
      loginData,
      config
    );

    disptach({
      type: loginActionTypes.LOGIN_SUCESS,
      payload: data,
    });
    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    disptach({
      type: loginActionTypes.LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
//logout
export const Logout = () => async (dispatch) => {
  console.log("heelo from logout");
  sessionStorage.removeItem("userInfo");
  dispatch({
    type: loginActionTypes.USER_LOGOUT,
  });
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: loginActionTypes.CLEAR_ERRORS,
  });
};
