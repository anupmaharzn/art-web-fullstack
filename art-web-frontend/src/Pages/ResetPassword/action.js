import * as resetactionTypes from "./constant";
import axios from "axios";
import { API_URL } from "../../config";
import { toast } from "react-toastify";
import { LOGIN_PAGE } from "../../routes";
export const resetPassword =
  (id, token, passwordData, navigate) => async (disptach) => {
    try {
      disptach({
        type: resetactionTypes.RESET_PASSWORD_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data, status } = await axios.put(
        `${API_URL}/auth/password/reset/${id}/${token}`,
        passwordData,
        config
      );
      if (status === 200) {
        toast.success("Password Changed");
        navigate(LOGIN_PAGE);
      }

      disptach({
        type: resetactionTypes.RESET_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      disptach({
        type: resetactionTypes.RESET_PASSWORD_FAIL,
        payload: error.response ? error.response.data.message : error.message,
      });
      toast.error(error?.response?.data?.message);
    }
  };
