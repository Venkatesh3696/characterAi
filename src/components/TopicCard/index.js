import React from "react";
import "./index.css";

const TopicCard = ({ topic }) => {
  return (
    <li className="topic-card">
      <button className="topic-button">{topic}</button>
    </li>
  );
};

export default TopicCard;
