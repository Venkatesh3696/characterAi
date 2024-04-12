import CharacterCard from "../CharacterCard";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const Featured = ({ forYouItems }) => {
  return (
    <Slider {...settings} className="featured-container">
      {forYouItems.map((each, index) => (
        <CharacterCard details={each} key={index} />
      ))}
    </Slider>
  );
};

export default Featured;
