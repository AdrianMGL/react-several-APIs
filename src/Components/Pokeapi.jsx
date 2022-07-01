import axios from "axios";
import "../Styles/Pokeapi.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function Pokeapi() {
  /*
  const IndexPoke = "https://pokeapi.co/api/v2/pokemon/?limit=500";
  const randomPokeapi = Math.floor(Math.random() * IndexPoke.length); // 5
*/
  //console.log(randomPokeapi);

  const [pokemon, setPokemon] = useState({});
  const [height, setHeight] = useState(0);
  const [isDecimeters, setIsDecimeters] = useState(true);
  const [weight, setWeight] = useState(0);
  const [weightUnit, setWeightUnit] = useState("hectograms");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      // Paso 3: setear el estado
      .then((res) => {
        setPokemon(res.data);
        setHeight(res.data.height);
        setWeight(res.data.weight);
      });
  }, []);

  /** */
  const convertHeight = () => {
    if (isDecimeters) {
      // Transformar a metros
      setHeight(height / 10);
      setIsDecimeters(false);
    } else {
      // Transformar a decimetros;
      setHeight(height * 10);
      setIsDecimeters(true);
    }
  };

  /**
   * 

   */

  const convertWeight = () => {
    if (weightUnit === "hectograms") {
      // Transformar a kilogramos
      setWeight(weight / 10);
      setWeightUnit("kilograms");
    } else {
      // Transformarlo a hectogramos
      setWeight(weight * 10);
      setWeightUnit("hectograms");
    }
  };

  const getPoke = () => {
    const randomId = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => {
        setPokemon(res.data);
        setHeight(res.data.height);
        setWeight(res.data.weight);
      });
  };

  // Paso 4: hacerle console.log
  //console.log(pokemon);

  /*
  const { data, getData } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokeapi}`
  );

  console.log(data);
*/
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
          {
            <ul>
              <li>
                <h3>Abilities:</h3>
                <h4>{pokemon.abilities?.[0].ability.name}</h4>
              </li>

              <li>
                <h3>Height: </h3>
                <h4>
                  {height} {isDecimeters ? "decimeters" : "meters"}
                </h4>
              </li>
              <li>
                <h3>Weight: </h3>
                <h4>
                  {weight} {weightUnit}
                </h4>
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
          }
        </div>
        <div className="img__pokemon">
          <img
            src={pokemon.sprites?.other.home.front_default}
            alt={pokemon.name}
          />
        </div>
        <button className="btn" onClick={convertHeight}>
          Height
        </button>
        <button className="btn" onClick={convertWeight}>
          Weight
        </button>
        <button className="btn" onClick={getPoke}>
          Random pokemon
        </button>
      </div>
    </div>
  );
}

export default Pokeapi;
