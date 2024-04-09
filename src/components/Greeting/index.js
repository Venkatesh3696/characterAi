import React from "react";
import LargeCard from "../LargeCard";
import "./index.css";

const Greeting = () => {
  return (
    <div className="greeting-container">
      <div className="main-greet">
        <p className="main-greet-question">What do you want to do</p>
        <h1 className="main-greet-answer">Go on adventure</h1>
      </div>
      <div className="large-cards-container">
        <LargeCard />
        <LargeCard />
      </div>
    </div>
  );
};

export default Greeting;
