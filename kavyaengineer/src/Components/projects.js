import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Projects() {
  let [isHovering, setText] = useState(false);
  const handleMouseOver = () => {
    setText(true);
  };

  const handleMouseOut = () => {
    setText(false);
  };
  return (
    <Router>
      <div className="carddiv">
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Card 1</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h3>Card 2</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div>
                <Link to="/Cards">
                  <button
                    id="btn"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Click
                  </button>
                </Link>
              </div>
              {isHovering && <h2>Hello world</h2>}
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Projects;
