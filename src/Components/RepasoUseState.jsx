import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("Se ejecutó COUNTER");

    const colors = [
      "#845EC2",
      "#D65DB1",
      "#FF6F91",
      "#FF9671",
      "#FFC75F",
      "#F9F871",
    ];

    const randomColor = Math.floor(Math.random() * colors.length); // 5

    document.body.style = `background: ${colors[randomColor]}`;
  }, [isVisible]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr />
      <h1>Input contraseña</h1>
      <input type={isVisible ? "text" : "password"} />
      <button onClick={() => setIsVisible(!isVisible)}>Show/hidde</button>
    </div>
  );
}

export default App;
