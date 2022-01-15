import React from "react";

export const Chiled = ({ children, name }) => {
  console.log("renderd ch >>>>>");
  return (
    <h4>
      {children} :{name}
    </h4>
  );
};

export const Memorized = React.memo(Chiled);
