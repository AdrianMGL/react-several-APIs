import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Components/Counter";
import CounterSpa from "./Components/CounterSpa";
import Pokeapi from "./Components/Pokeapi";
// import App from './App'
import Breakingbad from "./Components/BreakingbadApi";
import Randomuser from "./Components/RandomuserApi";
import EmojisworldApi from "./Components/EmojisworldApi";
// import CustomHooks from './Components/customHooks'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* { <App > } */}
    <Breakingbad />
    <hr />
    <EmojisworldApi />
    <hr />
    <Randomuser />
    {/* <Counter />
    <CounterSpa/> */}
    <hr />
    <Pokeapi />
  </React.StrictMode>
);
