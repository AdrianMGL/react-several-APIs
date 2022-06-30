import { useState } from "react";

const UseCounter = (initialCounter) => {
  /** */
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return { counter, increment, decrement };
};

export default UseCounter;
