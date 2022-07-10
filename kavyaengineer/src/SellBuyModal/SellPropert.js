import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App";
function SellPropert() {
  let navigate = useNavigate();
  const [inpval, setINP] = useState({
    photo: "",
    ownername: "",
    price: "",
    mobile: "",
    address: "",
    description: "",
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

  const addData = async (e) => {
    e.preventDefault();

    const { photo, ownername, price, mobile, address, description } = inpval;

    const res = await fetch("/addinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo,
        ownername,
        price,
        mobile,
        address,
        description,
      }),
    });
    if (!photo || !ownername || !price || !mobile || !address || !description) {
      alert("Plz fill All the data.");
    }
    const data2 = await res.json();
    console.log(data2);

    if (res.status === 400 || !data2) {
      alert("Fill Data Correctly");
      console.log("error");
    } else {
      alert("Data added Succefully");
      console.log("data added");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <div className="container" id="RegisterCard">
          <form className="mt-4">
            <h1 id="registername">SELL YOUR PROPERTY </h1>
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Add Photo
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  required={true}
                  minLength={2}
                  className="form-control"
                  onChange={setData}
                  name="photo"
                  value={inpval.photo}
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  owner Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Owner Name"
                  required={true}
                  minLength={2}
                  className="form-control"
                  onChange={setData}
                  name="ownername"
                  value={inpval.ownername}
                />
              </div>

              <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Property Price
                </label>
                <input
                  type="text"
                  placeholder="Enter Property Price"
                  required={true}
                  minLength={2}
                  className="form-control"
                  name="price"
                  value={inpval.price}
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
              <div className="mb-3 col-lg-12 col-md-12 col-12 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  value={inpval.description}
                  className="form-control"
                  cols="30"
                  rows="5"
                  onChange={setData}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addData}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellPropert;
