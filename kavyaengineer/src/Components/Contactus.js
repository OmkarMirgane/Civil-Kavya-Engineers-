import React from "react";
import "../App";

function Contactus() {
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
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  defaultValue=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  defaultValue=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  defaultValue=""
                />
              </div>
              <div className="form-group">
                <input
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
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  defaultValue="This is a description."
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
