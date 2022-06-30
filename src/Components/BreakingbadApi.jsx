import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function Breakingbad() {
  /*
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/character/random")
      
      .then((res) => setCharacter(res.data));
  }, []);
*/

  const { data } = useFetch(
    "https://www.breakingbadapi.com/api/character/random"
  );
  // console.log(data);

  return (
    <div className="App">
      <span>{data[0]?.category}</span>
      <h1> {data[0]?.name}</h1>
      <h2> {data[0]?.nickname}</h2>
      <img src={data[0]?.img} style={{ width: "20%" }} alt="" />
      <h3>{data[0]?.status}</h3>
      <h3>{data[0]?.occupation?.[0]}</h3>
    </div>
  );
}

export default Breakingbad;
