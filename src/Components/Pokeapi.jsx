import axios from "axios";
import "../Styles/Pokeapi.css";
import { useState, useEffect } from "react";

function Pokeapi() {
  const IndexPoke = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  const randomPokeapi = Math.floor(Math.random() * IndexPoke.length); // 5
  console.log(randomPokeapi);

  // Paso 2: useState para recibir la respuesta
  const [pokemon, setPokemon] = useState({});

  //Paso 1: useEffect con la petición
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/25")
      // Paso 3: setear el estado
      .then((res) => setPokemon(res.data));
  }, []);

  const getPoke = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokeapi}`)
      .then((res) => setPokemon(res.data));
  };

  // Paso 4: hacerle console.log
  console.log(pokemon);

  return (
    <div className="card__container">
      <div className="card">
        <div className="header">
          <div className="name__type">
            <h1 className="name">{pokemon.name}</h1>
            <h3 className="type__name"> {pokemon.types?.[0].type.name}</h3>
          </div>
          <h3>{pokemon.id}</h3>
        </div>
        <div className="content">
          <ul>
            <li>
              <h3>Abilities:</h3>
              <h4>{pokemon.abilities?.[0].ability.name}</h4>
            </li>

            <li>
              <h3>Height: </h3>
              <h4>{pokemon.height}</h4>
            </li>
            <li>
              <h3>Weight: </h3>
              <h4>{pokemon.weight}</h4>
            </li>
            <li>
              <h3>HP: </h3>
              <h4>{pokemon.stats?.[0].base_stat}</h4>
            </li>
            <li>
              <h3>Attack: </h3>
              <h4>{pokemon.stats?.[1].base_stat}</h4>
            </li>
            <li>
              <h3>Defense: </h3>
              <h4>{pokemon.stats?.[2].base_stat}</h4>
            </li>
            <li>
              <h3>Special Attack: </h3>
              <h4>{pokemon.stats?.[3].base_stat}</h4>
            </li>
            <li>
              <h3>Special Defense: </h3>
              <h4>{pokemon.stats?.[4].base_stat}</h4>
            </li>
            <li>
              <h3>Speed: </h3>
              <h4>{pokemon.stats?.[5].base_stat}</h4>
            </li>
          </ul>
        </div>
        <div className="img__pokemon">
          <img
            src={pokemon.sprites?.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <button onClick={getPoke}>Change</button>
      </div>
    </div>
  );
}

export default Pokeapi;
