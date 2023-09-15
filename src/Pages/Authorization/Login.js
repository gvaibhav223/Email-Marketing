import React, { useState } from "react";

const Login = () => {
  const [formData, setFromData] = useState();
  const handleFilterInput = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };
  return (
    <div className="form-box">
      <div className="py-2" align="center">
        <h3>Login</h3>
      </div>
      <div className="row">
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
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
