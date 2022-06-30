import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Randomuser = () => {
  /*
  const [results, setresults] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setresults(res.data.results[0]));
  }, []);
  */

  const { data, getData } = useFetch("https://randomuser.me/api/");
  // console.log(data);

  return (
    <div className="App">
      <span>randomuser</span>
      <h1>
        {data.results?.[0].name.title} {data.results?.[0].name.first}{" "}
        {data.results?.[0].name.last}
      </h1>
      <img
        src={data.results?.[0].picture.large}
        style={{ width: "20%" }}
        alt={data.results?.[0].name.first}
      />
      <h3>{data.results?.[0].email}</h3>
      <h3>{data.results?.[0].phone}</h3>
      <h3>
        {data.results?.[0].location.city}
        {", "} {data.results?.[0].location.country}
      </h3>
      <button onClick={getData}>Change User</button>
    </div>
  );
};

export default Randomuser;
