import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </div>
  );
};

export default Hero;
