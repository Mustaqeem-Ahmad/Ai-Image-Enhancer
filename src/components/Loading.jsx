import Lottie from "lottie-react";
import React from "react";
import loading from '../assets/loading.json'

const Loading = () => {
  return <div className="flex items-center justify-center ">
    <Lottie animationData={loading} />
  </div>;
};

export default Loading;
