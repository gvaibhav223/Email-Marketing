import React from "react";

const Count = () => {
  const array = [
    {
      count_number: 84,
      count_label: "Happy Client",
      count_icon: "./Images/Building-images",
    },
    {
      count_number: 127,
      count_label: "Projects Completed",
      count_icon: "./Images/Building-images",
    },
    {
      count_number: 37,
      count_label: "Awards Win",
      count_icon: "./Images/Building-images",
    },
    {
      count_number: 30,
      count_label: "Years in Business",
      count_icon: "./Images/Building-images",
    },
  ];
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="row">
            {array.map((val, i) => {
              return (
                <div key={i} className=" col-sm-12 col-md-6 my-4">
                  <div className="count-box">
                    <div className="count-img">
                      <img
                        src={`${val?.count_icon}/illus (${i}).png`}
                        alt="count icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="count-number">
                      <h1>{val?.count_number}</h1>
                    </div>
                    <div className="count-label">
                      <div className="line"></div>
                      <div className="text">{val?.count_label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="count-heading">
            <h1>30 Years Experience</h1>
          </div>
          <div className="count-desc">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </div>
          <button className="button-contained">Contact US</button>
        </div>
      </div>
    </div>
  );
};

export default Count;
