import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../App";

function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navdiv"
      >
        <div className="container-y">
          <img
            id="imglog"
            src={require("../images/background.png")}
            alt="Wait Project Loading.."
          />
        </div>
        <div className="container-fluid">
          <Link className="navbar-brand" id="Navbarbrand" to="/home">
            KAVYA Engineer's <br />& Developer's
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navhom">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About Us!
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Contact Us!
                  </Link>
                </div>
              </li>
            </ul>
            <div className="buttonreg" id="reg-btn">
              <Link to="/registration">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Registration
                </button>
              </Link>
            </div>
            <div className="buttonreg" id="lef-btn">
              <Link to="/Loginmodel">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
