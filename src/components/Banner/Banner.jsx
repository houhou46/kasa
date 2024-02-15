import React from "react";
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="banners">
      <img src={require("../../assets/montagne.png")} alt="montagne" />
    </div>
  );
};

export default Banner;
