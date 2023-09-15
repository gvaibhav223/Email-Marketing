import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className=" container">
        <div className="secion-heading">
          <h2 align="center">What can us do for you?</h2>
        </div>
        <div className="contact-desc" align="center">
          We are ready to work on a project of any complexity,
          <br /> whether it’s commercial or residential.
        </div>
        <div className="contact-form-box">
          <div className="row">
            <div className="col-md-6 my-2">
              <div class="form-group">
                <label for="name">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div class="form-group">
                <label for="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div class="form-group">
                <label for="reason">
                  Reason<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  class="form-control"
                  placeholder="Reason for Contacting"
                />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="form-control"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="col-md-12 my-2">
              <div class="form-group">
                <label for="message">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  class="form-control"
                  placeholder="Enter Message"
                  name="message"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 my-2">
              <div align="center" class="form-group">
                <button className="button-contained">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
