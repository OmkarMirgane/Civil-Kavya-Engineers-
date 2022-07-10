import React from "react";

function Aboutus() {
  return (
    <>
      <div style={{ paddingBottom: "200px", paddingTop: "100px" }}>
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

        <div className="container" id="informationabout">
          <div className="information" id="information">
            <div className="container-y">
              <img
                id="imglog"
                style={{ height: "128px", width: "210px", marginbottom: "0px" }}
                src={require("../images/background.png")}
                alt="Wait Project Loading.."
              />
            </div>
            <h1 id="inHead" style={{ color: "red" }}>
              KAVYA Engineer's & Developer's
            </h1>
            <h2 id="inName" style={{ fontweight: "600" }}>
              Engineer-OMKAR SAJJAN MIRGANE
            </h2>
            <h3 id="inDegree">(D.C.E , BE CIVIL)</h3>
            <h3 id="inPhone">Phone No.-9922079339</h3>
            <h3 id="inEmail">Email-omkarmirgane2305@gmail.com</h3>
            <h3 id="inAdd">Address-Alipur Road Barshi. 413411</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
