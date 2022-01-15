import { React, useState } from "react";
import { Memorized } from "./Chiled";
import { MemorizedTow } from "./ChiledTow";
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("adama");
  return (
    <div>
      <h1>counter :{count}</h1>
      <MemorizedTow name={name}>hello</MemorizedTow>

      <button onClick={(e) => setCount((c) => c + 1)}>click</button>
      <button onClick={(e) => setName("kenji")}>change name</button>
      <h2>{name}</h2>
    </div>
  );
}

export default Parent;
