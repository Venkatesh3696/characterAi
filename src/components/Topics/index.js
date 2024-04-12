import "./index.css";
import TopicCard from "../TopicCard";
import CharacterCard from "../CharacterCard";

const Topics = ({ topics, forYouItems }) => {
  return (
    <div className="">
      <ul className="topics-container">
        {topics.map((each) => (
          <TopicCard details={each} />
        ))}
      </ul>
      <ul className="topic-characters-container">
        {forYouItems.map((each) => (
          <CharacterCard details={each} />
        ))}
      </ul>
    </div>
  );
};

export default Topics;
