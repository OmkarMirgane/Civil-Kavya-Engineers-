import React from "react";
import { Link } from "react-router-dom";

function Headall() {
  return (
    <div className="contar">
      <div className="row" id="rowhead">
        <div className="container1" id="headcontainer">
          <div className="column" id="column1">
            <div className="card" id="btnhead">
              <img
                src={require("../images/2.jpg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/getInfo">
                  <p className="card-text">Buying a Property</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="column" id="column1">
            <div className="card" id="btnhead">
              <img
                src={require("../images/3.jpeg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/rentingHome">
                  <p className="card-text">Renting a home</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="column" id="column1">
            <div className="card" id="btnhead">
              <img
                src={require("../images/2.jpg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/sellProperty">
                  <p className="card-text">Sell your Property</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="column" id="column1">
            <div className="card" id="btnhead">
              <img
                src={require("../images/3.jpeg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/buyProperty">
                  <p className="card-text">Buying commercial spaces</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="column" id="column1">
            <div className="card" id="btnhead">
              <img
                src={require("../images/2.jpg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/leaseCommercial">
                  <p className="card-text">Lease commercial spaces</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headall;
