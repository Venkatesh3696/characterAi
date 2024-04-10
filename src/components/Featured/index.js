import CharacterCard from "../CharacterCard";
import "./index.css";

const Featured = ({ forYouItems }) => {
  return (
    <ul className="featured-container">
      {forYouItems.map((each, index) => (
        <CharacterCard details={each} key={index} />
      ))}
    </ul>
  );
};

export default Featured;
