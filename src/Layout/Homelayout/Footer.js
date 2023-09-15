import React from "react";
import Logo from "../../Component/Logo";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="container">
        <div className="footer-content-box">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-content">
                <div className="footer-label">Address:</div>
                <div className="footer-data">
                  6391 Elgin St. Celina, Delaware 10299
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-label">Phone:</div>
                <div className="footer-data">+84 1102 2703</div>
              </div>
              <div className="footer-content">
                <div className="footer-label">Email:</div>
                <div className="footer-data">hello@thebox.com</div>
              </div>
              <div className="logo-container">
                <Logo />
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-content">
                <div
                  className="footer-label cursor-pointer"
                  onClick={() => {
                    navigate("/privacypolicy");
                  }}
                >
                  Privacy Policy
                </div>
              </div>
              <div className="footer-content">
                <div
                  className="footer-label cursor-pointer"
                  onClick={() => {
                    navigate("/termscondition");
                  }}
                >
                  Terms and Condition
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-label">Newsletter:</div>
                <div className="input-box">
                  <div class="form-group">
                    <input
                      type="text"
                      id="reason"
                      name="reason"
                      class="form-control"
                      placeholder="Enter Email Here"
                    />
                  </div>
                  &nbsp;
                  <button className="button-secondary">Subscribe</button>
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-label">Social:</div>
                <div className="social-links">
                  <div className="social-link">
                    <Facebook />
                  </div>
                  <div className="social-link">
                    <LinkedIn />
                  </div>
                  <div className="social-link">
                    <Instagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-4 footer-bar">
        <a class="fw-bold" href="https://apptimates.com">
          Apptimate
        </a>
        &nbsp;:&nbsp;Company © 2023. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
