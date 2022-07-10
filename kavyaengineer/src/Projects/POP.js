import React from "react";

function POP() {
  return (
    <div>
      <div className="row" id="tvcardsm">
        <div className="column">
          <div className="card">
            <div className="card" id="btnntv">
              <img
                id="tvcard"
                src={require("../images/P1 (1).jpeg")}
                alt="Wait Project Loading.."
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card" id="btnntv">
              <img
                id="tvcard"
                src={require("../images/P1 (2).jpeg")}
                alt="Wait Project Loading.."
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card" id="btnntv">
              <img
                id="tvcard"
                src={require("../images/P1 (3).jpeg")}
                alt="Wait Project Loading.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default POP;
