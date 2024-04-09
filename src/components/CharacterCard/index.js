import React from "react";
import "./index.css";
import { FaComment } from "react-icons/fa6";

const CharacterCard = ({ details }) => {
  console.log(details);
  const { id, name, postedBy, description, comments, imageUrl } = details;
  console.log(imageUrl);
  return (
    <li className="character-card-container" key={id}>
      <img alt="profile" id="character-image" src={imageUrl} />
      <div className="character-contents">
        <p className="character-name">{name}</p>
        <p className="character-posted-by">By@ {postedBy} </p>
        <p className="character-description">{description}</p>
        <div className="comments-and-hide">
          <div className="comment-container">
            <FaComment />
            <p className="character-comments">{comments} </p>
          </div>
          <button className="hide-character-button">...</button>
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
