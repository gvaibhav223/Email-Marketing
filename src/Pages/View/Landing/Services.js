import React from "react";

const Services = () => {
  const array = [
    {
      color: "light",
      label: "Construction",
      img: "./Images/Building-images/",
    },
    {
      color: "dark",
      label: "Renovation",
      img: "./Images/Building-images/",
    },
    {
      color: "light",
      label: "Consultation",
      img: "./Images/Building-images/",
    },
    {
      color: "dark",
      label: "Electric",
      img: "./Images/Building-images/",
    },
    {
      color: "light",
      label: "Architecture",
      img: "./Images/Building-images/",
    },
    {
      color: "dark",
      label: "Repair Services",
      img: "./Images/Building-images/",
    },
  ];
  return (
    <div className="service-section">
      <div className="secion-heading">
        <h2 align="center">Our Services</h2>
      </div>
      <div className="container pt-4">
        <div className="row ">
          {array.map((val, i) => {
            return (
              <>
                <div className="col-md-4 mb-3">
                  <div className={`service-card ${val?.color}`} align="center">
                    <div className="icon-box">
                      <img
                        src={`${val?.img}/icon (${i}).png`}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                    <div className="label-box">{val?.label}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
