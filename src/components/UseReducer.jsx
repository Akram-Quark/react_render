import React, { useReducer } from "react";
import Chiled from "./Chiled";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};
function UseReducer({ children }) {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("object");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <Chiled></Chiled>
    </div>
  );
}

export default UseReducer;
