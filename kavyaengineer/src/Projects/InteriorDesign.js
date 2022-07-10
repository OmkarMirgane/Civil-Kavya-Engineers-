import React from "react";
import { Link } from "react-router-dom";
import TVUNITS from "./TVUNITS";

export function InteriorCard1() {
  return (
    <div>
      <div className="containers">
        <Room />
      </div>
    </div>
  );
}
export function InteriorCard2() {
  return (
    <div>
      <div className="containers">
        <TVUNITS />
      </div>
    </div>
  );
}

export function InteriorCard3() {
  return (
    <div>
      <div className="containers">
        <POP />
      </div>
    </div>
  );
}
