import "./index.css";

const TrySayingCard = ({ details }) => {
  const { id, profile, questions } = details;
  const { profileImageUrl, name, username, likes, chatsCount } = profile;
  return (
    <li className="try-saying-card-container" key={id}>
      <div>
        <div>
          <img alt="pro" src={profileImageUrl} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>
            <span>@{username}</span>.
            <span>
              {chatsCount} chats . <span>{likes} likes</span>
            </span>
          </p>
        </div>
      </div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>
    </li>
  );
};

export default TrySayingCard;
