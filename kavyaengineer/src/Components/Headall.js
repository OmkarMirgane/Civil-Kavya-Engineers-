import React from "react";
import { Link } from "react-router-dom";

function Headall() {
  return (
    <div className="row" id="rowhead">
      <div className="container" id="headcontainer">
        <div className="column" id="col-head">
          <div className="card" id="card-head">
            <div className="card" id="btnhead">
              <img
                src={require("../images/3.jpeg")}
                alt="Wait Project Loading.."
                id="img-head"
              />
              <div className="card-body">
                <Link to="/buyProperty">
                  <p className="card-text">Buying a Property</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="column" id="col-head">
          <div className="card" id="card-head">
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
        </div>
        <div className="column" id="col-head">
          <div className="card" id="card-head">
            <div className="card" id="btnhead">
              <img
                src={require("../images/3.jpeg")}
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
        </div>
        <div className="column" id="col-head">
          <div className="card" id="card-head">
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
        </div>
        <div className="column" id="col-head">
          <div className="card" id="card-head">
            <div className="card" id="btnhead">
              <img
                src={require("../images/3.jpeg")}
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
