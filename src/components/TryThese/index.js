import React from "react";
import TryTheseCard from "../TryTheseCard";
import "./index.css";

const TryThese = ({ tryTheseItems }) => {
  return (
    <ul className="try-these-container">
      {tryTheseItems.map((each) => (
        <TryTheseCard details={each} />
      ))}
    </ul>
  );
};

export default TryThese;
