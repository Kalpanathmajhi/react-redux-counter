import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementCount = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;
