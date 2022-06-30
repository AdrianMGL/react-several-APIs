import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Emojisworld = () => {
  // const [emoji, setEmoji] = useState({});

  /** https://api.chucknorris.io/jokes/random
 .get("https://randomuser.me/api/") */

  /*
  useEffect(() => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => setEmoji(res.data));
  }, []);

  console.log(emoji);

  const getEmojis = () => {
    axios
      
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => setEmoji(res.data.results[0]));
   
  };
*/

  const { data, getData } = useFetch(
    "https://api.emojisworld.fr/v1/random?limit=1"
  );

  // console.log(data);

  return (
    <div className="App">
      <span>emojisworld</span>
      <h1>{data.results?.[0].emoji}</h1>
      <h2>Name: {data.results?.[0].name}</h2>
      <h2>Id: {data.results?.[0].id}</h2>
      <h2>Categoria: {data.results?.[0].category.name}</h2>
      <h3>Unicode: {data.results?.[0].unicode}</h3>
      <button onClick={getData}>Cargar</button>
    </div>
  );
};

export default Emojisworld;
