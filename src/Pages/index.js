import React from "react";
import { useNavigate } from "react-router-dom";

const AllPages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>All pages routes</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/landing");
        }}
      >
        Landing Page
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Login Page
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("");
        }}
      >
        Error Page
      </button>
    </div>
  );
};

export default AllPages;
