import React from 'react'
import './management.css'

function Management() {
  return (
    <div className='container-inline'>
            <div className="features text-center"><span>Features</span></div>
            <div className='mt-2 better-management'>Better Management. Better Performance</div>
            <div className='start-work mt-1'><span>Start working with<span style={{color:"blue",fontWeight:"500"}}> Prompt </span>to showcase your app to thousands of people.</span></div>

            <div className='mt-4 row'>
                <div className="col-md-2"></div>
                <div className="col-md-4 col-12 d-md-block d-none">
                    <div className='position-relative blue-green ps-5'>
                        <div className='d-flex justify-content-between mix px-5'>
                        <img src="DotGreen.svg" alt="" className='dot-green'/>
                        <img src="DotsBlue.svg" alt="" className='dot-blue'/>
                        </div>
                        <div className="position-absolute dot-img-set">
                            <img src="./image 10.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 ">
                    <div className='row mt-3'>
                        <div className="col-1"></div>
                        <div className="col-md-1 col-2">
                        <img src="./ImproveEmployee.svg" alt="" className='img-fluid'/>
                    </div>
                    <div className="col-6 mt-1 text-start improve">
                        <p className='p1'>Improve Employee Experience</p>
                        <p className='p2'>Before we dive into why companies must invest in employee experience (EX), it’s important to understand what this concept entails.</p>

                        <a href="">Learn More <img src="./bi_arrow-left.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="row"><div className="col-md-1"></div><div className="col-md-7"><hr /></div></div>
                    <div className='row mt-3'>
                        <div className="col-1"></div>
                        <div className="col-md-1 col-2">
                        <img src="./Hiring.svg" alt="" className='img-fluid'/>
                    </div>
                    <div className="col-6 mt-1 text-start improve">
                        <p className='p1'>Hiring & Onboarding</p>
                        </div>
                    </div>
                    <div className="row"><div className="col-md-1"></div><div className="col-md-7"><hr /></div></div>
                    <div className='row mt-3'>
                        <div className="col-1"></div>
                        <div className="col-md-1 col-2">
                        <img src="./PeopleData.svg" alt="" className='img-fluid'/>
                    </div>
                    <div className="col-6 mt-1 text-start improve">
                        <p className='p1'>People Data & Analytics</p>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Management