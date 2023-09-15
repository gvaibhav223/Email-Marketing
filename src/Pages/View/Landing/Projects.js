import React, { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const project_array = [
    {
      project_name: "Wildstone Infra Hotel",
      project_loc: "2715 Ash Dr. San Jose, South Dakota",
      project_img: "./Images/Building-images/build (0).png",
      type: "commercial",
    },
    {
      project_name: "Wish Stone Building",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (1).png",
      type: "commercial",
    },
    {
      project_name: "Mr. Parkinston’s House",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (2).png",
      type: "commercial",
    },
    {
      project_name: "Oregano Height",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (3).png",
      type: "residential",
    },
    {
      project_name: "Harmony Gardens",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (4).png",
      type: "residential",
    },
    {
      project_name: "Oasis Tower",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (5).png",
      type: "residential",
    },
    {
      project_name: "Zenith Heights",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (6).png",
      type: "other",
    },
    {
      project_name: "Tranquil Haven",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (7).png",
      type: "other",
    },
    {
      project_name: "Serenity Heights",
      project_loc: "2972 Westheimer Rd. Santa Ana, Illinois ",
      project_img: "./Images/Building-images/build (8).png",
      type: "other",
    },
  ];

  return (
    <div className="container">
      <div className="secion-heading">
        <h2 align="center">Projects</h2>
      </div>
      <div className="project-area">
        <div className="project-tabs-box" align="center">
          <button
            onClick={() => {
              setActiveTab("all");
            }}
            className={
              activeTab === "all"
                ? "project-tab project-tab-active"
                : "project-tab"
            }
          >
            All
          </button>
          <button
            onClick={() => {
              setActiveTab("commercial");
            }}
            className={
              activeTab === "commercial"
                ? "project-tab project-tab-active"
                : "project-tab"
            }
          >
            Commercial
          </button>
          <button
            onClick={() => {
              setActiveTab("residential");
            }}
            className={
              activeTab === "residential"
                ? "project-tab project-tab-active"
                : "project-tab"
            }
          >
            Residential
          </button>
          <button
            onClick={() => {
              setActiveTab("other");
            }}
            className={
              activeTab === "other"
                ? "project-tab project-tab-active"
                : "project-tab"
            }
          >
            Other
          </button>
        </div>
        <div className="mt-3 project-card-box">
          <div className="row">
            {project_array
              .filter((values) => {
                if (activeTab === "all") {
                  return values;
                } else if (values?.type === activeTab) {
                  return values;
                }
              })
              .map((val) => {
                return (
                  <div className="col-md-4 my-2">
                    <div className="project-card">
                      <div className="project-image-box">
                        <img
                          src={val?.project_img}
                          alt-="project view"
                          className="img-fluid"
                        />
                      </div>
                      <div className="project-about">
                        <div className="project-name">{val?.project_name}</div>
                        <div className="project-loc">{val?.project_loc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
