import React from "react";
import { Audio } from "react-loader-spinner";

const LoadingSpinner: React.FC = () => (
  <div>
    <Audio
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
);

export default LoadingSpinner;
