import React, { useState } from "react";
import axios from "axios";
import APIConfig from "../Config/APIConfig";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFromData] = useState();
  const navigate = useNavigate();
  const handleFilterInput = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handle_register = async () => {
    try {
      const res = await axios.post(APIConfig.register);
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {}
  };

  console.log("formData", formData);
  return (
    <div className="form-box">
      <div className="py-2" align="center">
        <h3>Sign Up</h3>
      </div>
      <div className="row">
        <div className="col-md-12 py-2">
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input
              type="text"
              class="form-control"
              onChange={handleFilterInput}
              value={formData?.name}
              name="name"
              id="exampleInputName"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="col-md-12 py-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={handleFilterInput}
              value={formData?.email}
              name="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="col-md-12 py-2">
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              onChange={handleFilterInput}
              value={formData?.password}
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="col-md-12 py-2">
          <div align="center">
            <button onClick={handle_register} className="btn btn-primary">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
