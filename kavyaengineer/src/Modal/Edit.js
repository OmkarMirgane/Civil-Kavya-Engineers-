import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
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
  //details edit krnyasathi

  const { id } = useParams("");
  console.log(id);

  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  const getpdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getpdata();
  }, []);

  //user ne edit kele ani submit kele ki home page la redirect karayla pahije tya sathi useNavigate
  const navigate = useNavigate();

  const updateduser = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, work, address, description } = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("data added");

      //redirect home page vr krnya sathi
      navigate("/");
    }
  };
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <div className="container">
        <form className="mt-4">
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
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
                Age
              </label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={inpval.age}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mobile
              </label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={inpval.mobile}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Work
              </label>
              <input
                type="text"
                className="form-control"
                name="work"
                value={inpval.work}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={inpval.address}
                onChange={setData}
              />
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12 form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Decription
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
              onClick={updateduser}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
