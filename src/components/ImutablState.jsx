import React, { useReducer } from "react";
let initState = {
  name: "jhon",
  age: 30,
};
const reducer = (state, action) => {
  switch (action) {
    case "change_name":
      return {
        ...state,
        name: "marko",
      };

    default:
      return state;
  }
};
function ImutablState() {
  const [person, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{person.name}</h1>
      <h3>{person.age}</h3>
      <button onClick={() => dispatch("change_name")}>ch_name</button>
    </div>
  );
}

export default ImutablState;
