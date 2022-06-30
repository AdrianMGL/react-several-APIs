import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";

const ApiBoton = () => {
  const [emoji, setEmoji] = useState({});

  /** https://api.chucknorris.io/jokes/random */

  // .get("https://randomuser.me/api/")

  useEffect(() => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => setEmoji(res.data));
  }, []);

  console.log(emoji);

  const getEmojis = () => {
    axios
      // .get("https://randomuser.me/api/")
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => setEmoji(res.data.results[0]));
    // .then((res) => setEmoji(res.data));
  };

  return (
    <div className="App">
      <hr />
      API
      <h2>id: {emoji.id}</h2>
      <h2>Categoria: {emoji.results[0].category.name}</h2>
      {/* <h2>emoji.unicode</h2> */}
      <h1>{emoji.name}</h1>
      {/* <img src={emoji.emoji} alt="" /> */}
      {/* <h3>{results[0].}</h3> */}
      <button onClick={getEmojis}>Cargar</button>
    </div>
  );
};

export default ApiBoton;
