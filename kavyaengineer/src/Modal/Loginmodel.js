import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Loginmodel() {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    email: "",
    password: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((previousval) => {
      return {
        ...previousval,
        [name]: value,
      };
    });
  };

  const fetchData = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await res.json();
    console.log(json);

    if (!res.status === 201 || !json) {
      alert("Please fill correct credentials");
    } else {
      alert("Welcome ");
      let loggedIn = true;
      console.log("data added");
      //redirect to home
      navigate("/userinfo");
    }
  };

  return (
    <div id="logincard" style={{ padding: "130px" }}>
      <div
        className="modal-dialog modal-dialog-scrollable"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="staticBackdropLabel"
                style={{ fontweight: "800", fontsize: "30px" }}
              >
                LOGIN..
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  alert("Please Login Here..");
                }}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    value={inpval.email}
                    type="email"
                    name="email"
                    onChange={setData}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={setData}
                    value={inpval.password}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Accept Terms & Condition
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div>
                <div>
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
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={fetchData}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginmodel;
