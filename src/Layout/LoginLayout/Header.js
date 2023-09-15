import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-logo">
        <NavLink to="/" class="navbar-brand" href="#">
          {"</>"}
        </NavLink>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/signup">
              SignUp
            </NavLink>
          </li>
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/product">
              Product
            </NavLink>
          </li>
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/addproduct">
              Add Product
            </NavLink>
          </li>
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/">
              Logout
            </NavLink>
          </li>
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li class="nav-item nav-tabs">
            <NavLink class="nav-link" to="/">
              Other
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
