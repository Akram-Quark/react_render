import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  console.log("usestate render");
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((c) => c + 1)}>increment</button>
    </div>
  );
}

export default UseState;
