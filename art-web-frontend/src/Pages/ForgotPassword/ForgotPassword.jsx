import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../routes";
import { forgotPassword } from "./action";
import "./forgotpassword.scss";
const Login = () => {
  const dispatch = useDispatch();
  const { forgotdata, error } = useSelector((state) => state.forgotPassword);
  console.log(forgotdata?.message);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginConfig = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "*Invalid Email Format ",
      },
    },
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast(error);
    }
    if (error === undefined) {
      toast(forgotdata?.message);
    }
  }, [navigate, dispatch, forgotdata, error]);

  const handleLoginForm = (data) => {
    console.log("clicked", data);
    dispatch(forgotPassword(data));
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />
      <div className="container">
        <div className="login-section">
          <span className="login-title">Forgot Password</span>

          <form
            onSubmit={handleSubmit(handleLoginForm)}
            className="login-fields"
          >
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", loginConfig.email)}
              />
              {errors?.email && <p>{errors.email.message}</p>}
            </div>

            <div className="form-btn">
              <Button type="submit" theme="button">
                FORGOT
              </Button>
              <Link to={LOGIN_PAGE} className="link">
                Back To Login?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
