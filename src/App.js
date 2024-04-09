import "./App.css";
import ForYou from "./components/ForYou";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [forYouItems, setForYouItems] = useState([]);
  useEffect(() => {
    const fetchForYouCharacters = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        setForYouItems(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchForYouCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <Greeting />
      <ForYou forYouItems={forYouItems} />
    </div>
  );
}

export default App;
