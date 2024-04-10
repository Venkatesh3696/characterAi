import React from "react";
import "./index.css";

const TryTheseCard = ({ details }) => {
  const { id, imageUrl, heading, withWho } = details;
  return (
    <li key={id} className="try-these-card">
      <img alt="profile" src={imageUrl} className="try-these-image" />
      <div>
        <h1 className="try-these-heading">{heading} </h1>
        <p className="try-these-para">with {withWho}</p>
      </div>
    </li>
  );
};

export default TryTheseCard;
