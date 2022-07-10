import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Details() {
  const { id } = useParams("");
  console.log(id);

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

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
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getpdata();
  }, []);

  //Delete user

  //redirect to home page

  const navigate = useNavigate();

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      navigate("/");
    }
  };

  return (
    <div className="container mt-3">
      <div className="card text">
        <div className="card-header">WellCome {" " + getuserdata.name}</div>
        <div className="card-body">
          <div className="container" style={{ "text-align": "right" }}>
            <Link to={`/edit/${getuserdata._id}`}>
              <button className="btn btn-primary">
                <i class="fa-solid fa-pen"></i>
              </button>
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => deleteuser(getuserdata._id)}
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <h3 className="card-title-center">
            <i class="fa-solid fa-user"></i> {" " + getuserdata.name}
          </h3>

          <div class="container">
            <div class="row">
              <div className="card-text1">
                <div class="col-sm">
                  <h5>
                    <i class="fa-solid fa-envelope"></i>email:-
                    {" " + getuserdata.email}
                  </h5>
                  <h5>
                    <i class="fa-solid fa-mobile-screen"></i>Mobile:-
                    {" " + getuserdata.mobile}
                  </h5>
                  <h5>Age:-{" " + getuserdata.age}</h5>
                </div>
                <div class="col-sm">
                  <h5>
                    <i class="fa-solid fa-briefcase"></i>Work:-
                    {" " + getuserdata.work}
                  </h5>
                  <h5>
                    <i class="fa-solid fa-address-card"></i>Address:-
                    {" " + getuserdata.address}
                  </h5>
                  <h5>Discription:- {" " + getuserdata.description}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
