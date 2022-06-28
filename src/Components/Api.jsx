import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";

function Api() {
  // Paso 2: useState para recibir la respuesta
  const [character, setCharacter] = useState({});

  //Paso 1: useEffect con la petición
  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      // Paso 3: setear el estado
      .then((res) => setCharacter(res.data));
  }, []);

  // Paso 4: hacerle console.log

  return (
    <div className="App">
      hello world
      <h1>{character[0]?.name}</h1>
      <img src={character[0]?.img} style={{ width: "10%" }} alt="" />
    </div>
  );
}

export default Api;
