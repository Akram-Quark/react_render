import React from "react";

export const ChiledTow = ({ children, name }) => {
  console.log("renderd ch >>>>>");
  const date = new Date();
  return (
    <h4>
      hours: {date.getHours()} min : {date.getMinutes()} : {date.getSeconds()}
      {children} :{name}
    </h4>
  );
};

export const MemorizedTow = React.memo(ChiledTow);
