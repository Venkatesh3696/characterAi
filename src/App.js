import "./App.css";
import ForYou from "./components/ForYou";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import TryThese from "./components/TryThese";
import Featured from "./components/Featured";
import Topics from "./components/Topics";

function App() {
  const [forYouItems, setForYouItems] = useState([]);
  const [tryTheseItems, setTryTheseItems] = useState([]);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchForYouCharacters = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        setForYouItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchTryThese = async () => {
      try {
        const response = await axios.get("http://localhost:3000/try_these");
        setTryTheseItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchTopics = async () => {
      try {
        const response = await axios.get("http://localhost:3000/topics");
        setTopics(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchForYouCharacters();
    fetchTryThese();
    fetchTopics();
  }, []);
  console.log(topics);

  return (
    <div className="App">
      <Header />
      <Greeting />
      <h1>For you</h1>
      <ForYou forYouItems={forYouItems} />
      <h1>Try these</h1>
      <TryThese tryTheseItems={tryTheseItems} />
      <h1>Featured</h1>
      <Featured forYouItems={forYouItems} />
      <Topics topics={topics} />
    </div>
  );
}

export default App;
