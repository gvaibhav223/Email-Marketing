import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="py-4 aboutus_box">
        <div className="row container">
          <div className="col-md-5">
            <div className="about-image">
              <img
                src="./Images/Building-images/about.png"
                alt="about "
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="secion-heading">
              <h2 align="center" className="text-light">
                About Us
              </h2>
            </div>
            <div className="desc-box">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
              cum blanditiis error consequatur mollitia officiis corporis
              pariatur veritatis ipsam quae aliquam libero praesentium ab
              tempore magnam et sit sint nesciunt! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Optio, cum blanditiis error
              consequatur mollitia officiis corporis pariatur veritatis ipsam
              quae aliquam libero praesentium ab tempore magnam et sit sint
              nesciunt! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Optio, cum blanditiis error consequatur mollitia officiis
              corporis pariatur veritatis ipsam quae aliquam libero praesentium
              ab tempore magnam et sit sint nesciunt!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
