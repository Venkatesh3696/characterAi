import React from "react";
import TrySayingCard from "../TrySayingCard";
import "./index.css";

const TrySaying = ({ trySaying }) => {
  return (
    <ul className="try-saying-container">
      {trySaying.map((each) => (
        <TrySayingCard key={trySaying.id} details={each} />
      ))}
    </ul>
  );
};

export default TrySaying;
