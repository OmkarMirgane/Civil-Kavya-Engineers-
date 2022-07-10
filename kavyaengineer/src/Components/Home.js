import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import TWODDesign from "../Designs/TWODDesign";
import Headall from "./Headall";

function Home() {
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
    <>
      {/* <Routes>
        <Route path="/cards" element={<Cards />} />
      </Routes> */}
      <div className="containerslogan">
        <h1 id="slog">
          You construct a dream. We will construct them into reality
        </h1>
      </div>
      <div>
        <Headall />
      </div>

      <div>
        <div className="container" id="inform">
          <h1 id="info">Our Projects</h1>
        </div>
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
                      src={require("../images/1.jpg")}
                      alt="Wait Project Loading.."
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/card1"> View</Link>
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
                      src={require("../images/2.jpg")}
                      alt="Wait Project Loading.."
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/card2"> View</Link>
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
                      src={require("../images/3.jpeg")}
                      alt="Wait Project Loading.."
                    />
                    {isHovering && (
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/card3"> View</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carddiv">
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
                    src={require("../images/4.jpeg")}
                    alt="Wait Project Loading.."
                  />
                  {isHovering && (
                    <button type="button" className="btn btn-outline-info">
                      <Link to="/card4"> View</Link>
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
                    src={require("../images/5.jpeg")}
                    alt="Wait Project Loading.."
                  />
                  {isHovering && (
                    <button type="button" className="btn btn-outline-info">
                      <Link to="/card5"> View</Link>
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
                    src={require("../images/6.bmp")}
                    alt="Wait Project Loading.."
                  />
                  {isHovering && (
                    <button type="button" className="btn btn-outline-info">
                      <Link to="/card6"> View</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <TWODDesign />
        </div>

        <div>
          <div className="quote-wrapper">
            <blockquote
              className="text"
              cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
            >
              <p>
                You can dream, create, design, and build the most wonderful
                place in the world. But it requires people to make the dream a
                reality.”
              </p>
              <footer> – Walt Disney</footer>
            </blockquote>
          </div>
        </div>

        <div className="containers" id="infocard">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card" id="ServiceInfocard">
                  <div className="container" id="servinfo">
                    <h2>OUR SERVICES</h2>
                  </div>
                  <br />
                  <p id="infotext">
                    <ul id="listinfo">
                      <li> GOVERNMENT CONTRACT</li>
                      <li> 2D DESIGN</li>
                      <li> 3D ELEVATION & WALKTHROUGH</li>
                      <li> RCC DESIGN</li>
                      <li> ESTIMATION</li>
                      <li> BUILDING PERMISSIONS</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-sm">
                <div className="card" id="ServiceInfocard">
                  <div className="container" id="servinfo">
                    <h2>OUR SERVICES</h2>
                  </div>
                  <p id="infotext">
                    <br />
                    <ul id="listinfo">
                      <li> INTERIOR DESIGN</li>
                      <li> COLLECTOR N.A. PLOTS</li>
                      <li> BANK HOME LOAN</li>
                      <li> EXPERINCED TEAM</li>
                      <li> READY POSSESION BUNGLOW</li>
                      <li> MSEB WORKS</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
