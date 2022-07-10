import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App";

function Register() {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
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

  //home page use redirect krnyasathi
  const navigate = useNavigate();

  const addData = async (e) => {
    e.preventDefault();

    const { name, email, password, mobile, address } = inpval;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        mobile,
        address,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      alert("Fill Data Correctly");
      console.log("error");
    } else {
      alert("Data added Succefully");
      console.log("data added");
      //redirect to home
      navigate("/");
    }
  };

  return (
    <div className="container" id="RegisterCard">
      <div className="container" id="RegisterCard">
        <form className="mt-4">
          <div className="container" id="resisternamecard">
            <h1 id="registername">Register Here</h1>
          </div>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                required={true}
                minLength={2}
                className="form-control"
                onChange={setData}
                name="name"
                value={inpval.name}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                required={true}
                minLength={2}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={inpval.email}
                onChange={setData}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                required={true}
                minLength={2}
                className="form-control"
                name="password"
                value={inpval.password}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mobile No.
              </label>
              <input
                type="number"
                placeholder="Enter Email Mobile NO."
                required={true}
                minLength={2}
                className="form-control"
                name="mobile"
                value={inpval.mobile}
                onChange={setData}
              />
            </div>

            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                required={true}
                minLength={2}
                className="form-control"
                name="address"
                value={inpval.address}
                onChange={setData}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={addData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
