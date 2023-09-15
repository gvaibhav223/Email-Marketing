import React from "react";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className=""
      style={{ maxWidth: "150px" }}
      onClick={() => {
        navigate("/");
      }}
    >
      <img
        src="./Images/Building-images/logo.png"
        alt="Logo"
        className="img-fluid"
      />
    </div>
  );
};

export default Logo;
