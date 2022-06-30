import axios from "axios";
import "../Styles/Pokeapi.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function Pokeapi() {
  const IndexPoke = "https://pokeapi.co/api/v2/pokemon/?limit=1";
  const randomPokeapi = Math.floor(Math.random() * IndexPoke.length); // 5
  //console.log(randomPokeapi);

  /*
  const [pokemon, setPokemon] = useState({});


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
*/

  const { data, getData } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokeapi}`
  );

  console.log(data);

  return (
    <div className="card__container">
      <div className="card">
        <div className="header">
          <div className="name__type">
            <h1 className="name">{data.name}</h1>
            <h3 className="type__name"> {data.types?.[0].type.name}</h3>
          </div>
          <h3>{data.id}</h3>
        </div>
        <div className="content">
          {
            <ul>
              <li>
                <h3>Abilities:</h3>
                <h4>{data.abilities?.[0].ability.name}</h4>
              </li>

              <li>
                <h3>Height: </h3>
                <h4>{data.height}</h4>
              </li>
              <li>
                <h3>Weight: </h3>
                <h4>{data.weight}</h4>
              </li>
              <li>
                <h3>HP: </h3>
                <h4>{data.stats?.[0].base_stat}</h4>
              </li>
              <li>
                <h3>Attack: </h3>
                <h4>{data.stats?.[1].base_stat}</h4>
              </li>
              <li>
                <h3>Defense: </h3>
                <h4>{data.stats?.[2].base_stat}</h4>
              </li>
              <li>
                <h3>Special Attack: </h3>
                <h4>{data.stats?.[3].base_stat}</h4>
              </li>
              <li>
                <h3>Special Defense: </h3>
                <h4>{data.stats?.[4].base_stat}</h4>
              </li>
              <li>
                <h3>Speed: </h3>
                <h4>{data.stats?.[5].base_stat}</h4>
              </li>
            </ul>
          }
        </div>
        <div className="img__pokemon">
          <img src={data.sprites?.other.home.front_default} alt={data.name} />
        </div>
        <button className="btn" onClick={getData}>
          Change
        </button>
      </div>
    </div>
  );
}

export default Pokeapi;
