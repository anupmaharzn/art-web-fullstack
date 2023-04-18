import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routes";
import "./pagenotfound.scss";
const PageNotFound = () => {
  return (
    <>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>
      <h1 className="title">Oops! Something went wrong!</h1>
      <Link className="btnpage" to={HOME_PAGE}>
        Return To Home
      </Link>
    </>
  );
};

export default PageNotFound;
