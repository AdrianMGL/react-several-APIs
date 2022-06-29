import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";

const ApiEjercicio = () => {
  const [results, setresults] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setresults(res.data.results[0]));
  }, []);
  
  console.log(results);

  return (
    <div className="App">
      <hr />
      API random user
      <h1>
        {results.name?.title} {results.name?.first} 
        {results.name?.last}
      </h1>
      <img src={results.picture?.large} style={{ width: "50%" }} alt="" />
      <h3>{results.email}</h3>
      <h3>{results.phone}</h3>
      <h3>{results.location?.city}{', '} {results.location?.country}</h3>
    </div>
  );
};

export default ApiEjercicio;
