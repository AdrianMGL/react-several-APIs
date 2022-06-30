import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Components/Counter";
import CounterSpa from "./Components/CounterSpa";
import Pokeapi from "./Components/Pokeapi";
// import App from './App'
// import Api from './Components/Api'
// import ApiEjercicio from './Components/ApiEjercicio'
// import ApiBoton from './Components/ApiBoton'
// import CustomHooks from './Components/customHooks'
import UseCounter from "./hooks/UseCounter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App />
    <Api/>
    <ApiEjercicio/> */}
    {/* <ApiBoton/> */}
    {/* <Counter /> */}
    {/* <CounterSpa/> */}

    <Pokeapi/>
  </React.StrictMode>
);
