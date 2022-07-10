import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App";

function Contactus() {
  let navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    mobile: "",
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

    const { name, email, mobile, description } = inpval;

    const res = await fetch("/contactinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        description,
      }),
    });

    const data2 = await res.json();
    console.log(data2);

    if (res.status === 400 || !data2) {
      alert("Fill Data Correctly");
      console.log("error");
    } else {
      alert("Thanks For Contact With Us..");
      console.log("data added");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="containercontact">
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name *"
                  defaultValue=""
                  onChange={setData}
                  value={inpval.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your Email *"
                  defaultValue=""
                  onChange={setData}
                  value={inpval.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  defaultValue=""
                  onChange={setData}
                  value={inpval.mobile}
                />
              </div>
              <div className="form-group">
                <input
                  onClick={addData}
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  defaultValue="Send Message"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  defaultValue="This is a description."
                  onChange={setData}
                  value={inpval.description}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
