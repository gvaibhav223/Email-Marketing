import React from "react";

const Reputation = () => {
  const array = [1, 2, 3];
  return (
    <div className="container">
      <div className="secion-heading">
        <h2 align="center">Our Reputation</h2>
      </div>
      <div className="p-4 card-area"></div>
      <div className="row">
        {array.map((val) => {
          return (
            <div className="col-md-4">
              <div className="card-container">
                <div className="icon-box">
                  <img
                    src="./Images/Building-images/icon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div className="card-heading">
                  <h4>Best Services</h4>
                </div>
                <div className="card-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    voluptatibus autem culpa assumenda aliquam veniam
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reputation;
