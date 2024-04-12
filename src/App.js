import "./App.css";
import ForYou from "./components/ForYou";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import TryThese from "./components/TryThese";
import Featured from "./components/Featured";
import Topics from "./components/Topics";
import TrySaying from "./components/TrySaying";

const url =
  "https://my-json-server.typicode.com/Venkatesh3696/embed_ai_jsonserver";

function App() {
  const [forYouItems, setForYouItems] = useState([]);
  const [tryTheseItems, setTryTheseItems] = useState([]);
  const [topics, setTopics] = useState([]);
  const [trySaying, setTrySaying] = useState([]);
  useEffect(() => {
    const fetchForYouCharacters = async () => {
      try {
        const response = await axios.get(`${url}/characters`);
        setForYouItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchTryThese = async () => {
      try {
        const response = await axios.get(`${url}/try_these`);
        setTryTheseItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchTopics = async () => {
      try {
        const response = await axios.get(`${url}/topics`);
        setTopics(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    const fetchTrySaying = async () => {
      try {
        const response = await axios.get(`${url}/try_saying`);
        setTrySaying(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchForYouCharacters();
    fetchTryThese();
    fetchTopics();
    fetchTrySaying();
  }, []);

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
      <Topics topics={topics} forYouItems={forYouItems} />
      <h1>Try saying</h1>
      <TrySaying trySaying={trySaying} />
    </div>
  );
}

export default App;
