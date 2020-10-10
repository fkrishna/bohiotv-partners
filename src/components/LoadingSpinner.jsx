import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

// import 3rd Party Lib
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingSpinner({ type, size, color }) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="uk-text-center">
        <Loader type={type} color={color} height={size} width={size} />
      </div>
    )
  );
}

LoadingSpinner.defaultProps = {
  type: "ThreeDots",
  color: "#eee",
  size: 80,
};

export default LoadingSpinner;
