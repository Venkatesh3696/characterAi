import "./index.css";
import TopicCard from "../TopicCard";

const Topics = ({ topics }) => {
  return (
    <ul className="topics-container">
      {topics.map((each) => (
        <TopicCard topic={each} />
      ))}
    </ul>
  );
};

export default Topics;
