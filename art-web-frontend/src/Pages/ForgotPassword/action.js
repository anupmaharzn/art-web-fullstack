import * as forgotactionTypes from "./constants";
import axios from "axios";
import { API_URL } from "../../config";
export const forgotPassword = (userData) => async (disptach) => {
  try {
    disptach({
      type: forgotactionTypes.FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const passwordData = { email: userData.email };

    const { data } = await axios.post(
      `${API_URL}/auth/password/forgot`,
      passwordData,
      config
    );

    disptach({
      type: forgotactionTypes.FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: forgotactionTypes.FORGOT_PASSWORD_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
