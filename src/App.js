import "./App.css";
import ForYou from "./components/ForYou";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import TryThese from "./components/TryThese";

function App() {
  const [forYouItems, setForYouItems] = useState([]);
  const [tryTheseItems, setTryTheseItems] = useState([]);
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
        const response = await axios.get("http://localhost:3000/tryThese");
        setTryTheseItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchForYouCharacters();
    fetchTryThese();
  }, []);

  return (
    <div className="App">
      <Header />
      <Greeting />
      <ForYou forYouItems={forYouItems} />
      <TryThese tryTheseItems={tryTheseItems} />
    </div>
  );
}

export default App;
