import React from "react";
import "./index.css";

const TopicCard = ({ details }) => {
  const { id, topic } = details;
  return (
    <li className="topic-card" key={id}>
      <button className="topic-button">{topic}</button>
    </li>
  );
};

export default TopicCard;
