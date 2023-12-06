import React from "react";
import "./herosection.css";
import email from "../../assets/Email.svg";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="emailSection">
          <div>
            <h1>Grow your Business</h1>
            <h1>connnect with SusaGKjyo</h1>
          </div>
          <img src={email} alt="" className="emailImage" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
