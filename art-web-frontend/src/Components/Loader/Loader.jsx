import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import "./loader.scss";
const Loader = () => {
  const loading = true;

  const loaderProps = {
    loading,
    size: 80,
    duration: 1,
    colors: ["#f6b93b", "#5e22f0", "#ef5777"],
  };

  return (
    <div className="loader">
      <GooeyCircleLoader {...loaderProps} />
    </div>
  );
};

export default Loader;
