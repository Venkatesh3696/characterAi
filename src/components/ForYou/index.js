import React from "react";
import "./index.css";
import CharacterCard from "../CharacterCard";

import Slider from "react-slick";
var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const ForYou = ({ forYouItems }) => {
  return (
    <Slider {...settings} className="for-you-container">
      {forYouItems.map((eachItem) => (
        <CharacterCard details={eachItem} />
      ))}
    </Slider>
  );
};

export default ForYou;
