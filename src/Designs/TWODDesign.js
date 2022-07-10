import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function TWODDesign() {
  let [isHovering, setText] = useState(false);
  const handleMouseOver = (e) => {
    setText(true);
    e.target.style.background = "rgb(86 197 118 / 81%)";
  };

  const handleMouseOut = (e) => {
    setText(false);
    e.target.style.background = "white";
  };
  return (
    <div>
      <div className="container" id="inform">
        <h1 id="info">Interior Designs</h1>
      </div>
      <div>
        <div className="contacard">
          <div className="carddiv" id="cardtopmar">
            <div className="row">
              <div className="column">
                <div className="card">
                  <div
                    className="card"
                    id="btn btt"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <img
                      id="imgcard"
                      src={require("../images/room1.jpg")}
                      alt="Wait Project Loading.."
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/interiorcard1"> ROOMS</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div
                    className="card"
                    id="btn btt"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <img
                      id="imgcard"
                      src={require("../images/TVUni.jpeg")}
                      alt="Wait Project Loading.."
                      id="imgacard2"
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/interiorcard2"> TV UNITS DESIGN</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div
                    className="card"
                    id="btn btt"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <img
                      id="imgcard"
                      src={require("../images/POP.jpeg")}
                      alt="Wait Project Loading.."
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/interiorcard3"> POP DESIGN</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TWODDesign;
