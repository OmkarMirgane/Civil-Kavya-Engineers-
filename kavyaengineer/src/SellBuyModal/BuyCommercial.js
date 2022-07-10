import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App";

function BuyCommercial() {
  let [isHovering, setText] = useState(false);
  const handleMouseOver = (e) => {
    setText(true);
    e.target.style.background = "rgb(86 197 118 / 81%)";
  };

  const handleMouseOut = (e) => {
    setText(false);
    e.target.style.background = "white";
  };
  //get data
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getpdata = async (e) => {
    const res = await fetch("/getInfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getpdata();
  }, []);

  return (
    <div className="carddiv1">
      <h1 id="buypropname">BUY PROPERTY / HOME </h1>
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
                src={require("../images/1.jpg")}
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
                src={require("../images/8.jpg")}
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

      <div className="container">
        <div className="mt-5">
          <div className="container">
            {getuserdata.map((element, id) => {
              return (
                <div className="column" id="columnidinfo">
                  <div className="card" style={{ width: "18 rpm" }}>
                    <p className="card-img-top">{element.photo}</p>
                    <div className="card-body">
                      <h5 className="card-title">{element.ownername}</h5>
                      <p className="card-text">{element.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{element.price}</li>
                      <li className="list-group-item">{element.mobile}</li>
                      <li className="list-group-item">{element.address}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCommercial;
