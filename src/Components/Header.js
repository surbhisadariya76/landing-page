import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="container-inline header-container" >
      <div className="header-bg position-relative">
        <div className="position-relative">
          <div className="green-outer">
            {" "}
            <div className=" green-color-box"></div>
          </div>
          <div className="best-way pt-5 position-absolute">
            The best way showcase your saas
          </div>
        </div>

        <div className="make-your-sass">
          Make your saas application stand out with high-quality landing page
          designed and developed by professional
        </div>

        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-2 p-md-1 p-2">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              aria-label="Username"
            />
          </div>
          <div className="col-md-2 p-md-1 p-2">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email"
              aria-label="Server"
            />
          </div>
          <div className="col-md-1 pe-md-5 p-md-1">
            <button
              type="button"
              class="btn "
              style={{ backgroundColor: "#0055FF", color: "white" }}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center check-rounded-box mt-3">
          <div className="px-md-3 px-1"><img src="./check-circle.svg" alt="" /> Free 14-day Demo</div>
          <div className="px-md-3 px-1"><img src="./check-circle.svg" alt="" /> No credit card needed</div>
          <div className="px-md-3 px-1"><img src="./check-circle.svg" alt="" /> No Setup</div>
          </div>

      <div className="position-absolute image-main w-100">
       <div className=""><img src="./image 10.svg" alt=""  className="img-fluid"/></div>
      </div>
      <div className="position-absolute play w-100">
       <div className=""><img src="./play.svg" alt=""  className="img-fluid"/></div>
      </div>

      </div>
    </div>
  );
}

export default Header;
