import React from "react";

function PricingPlan() {
  return (
    <div className="container-inline" style={{ height: "800px" }}>
      <div className="main-smart mt-5"></div>
      <div className="main-smart1 "></div>
      <div className="main-smart2">
        <div className="content-deg">
          <div style={{ height: "600px", backgroundColor: "#F4F5F7" }}>
            <div className="features  text-center">
              <span>Plans</span>
            </div>
            <div className="mt-2 better-management">Pricing Plans</div>
            <div className="start-work mt-1">
              <span>
                Pricing that{" "}
                <span style={{ color: "blue", fontWeight: "500" }}>
                  {" "}
                  works{" "}
                </span>
                for everyone
              </span>
            </div>

            <div className="row mt-5">
              <div className="col-md-2"></div>
              <div className="col-md-8 d-flex justify-content-around">
                  <div class="card" style={{width:"300px"}}>
                    <div class="card-body mt-2">
                      <h5 class="card-title text-primary">Starter</h5>
                      <span class="card-text mb-2">
                      <sup>$</sup> <span style={{fontSize:"1.2rem",fontWeight:"500"}}>49 </span>/ month
                      </span>
                      <hr />
                      <div className="text-start">
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Up to 600 minutes usage time</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Use for personal only</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Add up to 10 attendees</div>
                      <div className="py-2 mb-2"><img src="./checkGreenArrow.svg" alt="" /> Technical support via email</div>
                      </div>

                      <button type="button" class="btn  w-100  mt-5" style={{backgroundColor:"#DEE2E6",color:"#0055FF"}}>Sign Up Now</button>
                    </div>
                  </div>
                  <div class="card" style={{width:"300px"}}>
                    <div class="card-body mt-2">
                      <h5 class="card-title text-primary">Professional</h5>
                      <span class="card-text mb-2">
                      <sup>$</sup> <span style={{fontSize:"1.2rem",fontWeight:"500"}}>99 </span>/ month
                      </span>
                      <hr />
                      <div className="text-start">
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Up to 600 minutes usage time</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Use for personal only</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Add up to 10 attendees</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Technical support via email</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Technical support via email</div>
                      </div>

                      <button type="button" class="btn btn-primary w-100 mt-3 mb-3">Sign Up Now</button>
                    </div>
                  </div>
                  <div class="card " style={{width:"300px"}}>
                    <div class="card-body mt-2">
                      <h5 class="card-title text-primary">Enterprise</h5>
                      <span class="card-text mb-2">
                      <sup>$</sup> <span style={{fontSize:"1.2rem",fontWeight:"500"}}>599 </span>/ month
                      </span>
                      <hr />
                      <div className="text-start">
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Up to 600 minutes usage time</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Use for personal only</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Add up to 10 attendees</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Technical support via email</div>
                      <div className="py-2"><img src="./checkGreenArrow.svg" alt="" /> Technical support via email</div>
                      </div>

                      <button type="button" class="btn w-100 mt-3 mb-3" style={{backgroundColor:"#DEE2E6",color:"#0055FF"}}>Sign Up Now</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
