import UseCounter from "../hooks/UseCounter";

const CounterSpa = () => {
  const { counter, increment, decrement } = UseCounter(5);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Sumar 1</button>
      <button onClick={decrement}>Restar 1</button>
    </div>
  );
};

export default CounterSpa;
