import React from "react";
import "./index.css";
import CharacterCard from "../CharacterCard";

const ForYou = ({ forYouItems }) => {
  return (
    <ul className="for-you-container">
      {forYouItems.map((eachItem) => (
        <CharacterCard details={eachItem} />
      ))}
    </ul>
  );
};

export default ForYou;
