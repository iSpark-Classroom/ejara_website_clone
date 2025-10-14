import React from "react";
import Investment from "./Investment";
import InvestedSafely from "./InvestedSafely";
import Guaranteed from "./Guaranteed";

function Invest() {
  return (
    <div className="container">
      <Investment />
      <InvestedSafely />
      <Guaranteed />
    </div>
  );
}

export default Invest;
