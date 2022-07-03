import React, { useContext } from "react";
import InfoContext from "../Context/Information/infoContext";

const BuyProperty = () => {
  const context = useContext(InfoContext);
  const { info } = context;

  return (
    <div>
      <h1>Here</h1>
      {info.map((infornation) => {
        return infornation.name;
      })}
    </div>
  );
};

export default BuyProperty;
