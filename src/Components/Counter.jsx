import UseCounter from "../hooks/UseCounter";

const Counter = () => {
  const { counter, increment, decrement } = UseCounter(13);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
