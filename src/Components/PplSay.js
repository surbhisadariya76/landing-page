import React from 'react'
import './pplsay.css'

function PplSay() {
  return (
    <div className='container-inline'>
          
    <div className='mt-4 row'>
        <div className="col-md-2"></div>
       
       
        <div className="col-md-2 col-12 ">
        <div className="features  text-start ms-5"><span>Feedback</span></div>
            <p className='smart-p1 w-100 text-start  ms-5'>What people say </p>
            <p className='smart-p2 text-start  ms-5'>Few valuables words from our 
            customers</p>
            <div className='text-start ms-5'><i class="fa-solid fa-arrow-left"></i> <i class="fa-solid fa-arrow-right"></i></div>
           
        </div>
        <div className="col-md-8 col-12 d-md-block d-none">
            <div className='position-relative blue-green-2 ps-5'>
                <div className='d-flex justify-content-between mix px-5'>
                <img src="DotGreen.svg" alt="" className='dot-green-2'/>
                <img src="DotGreen.svg" alt="" className='dot-green-3'/>
                {/* <img src="DotsBlue.svg" alt="" className='dot-blue-2'/> */}
                </div>
                <div className="position-absolute dot-img-set">
                <div class="card ppl-card " style={{marginLeft:"6.4rem",width:"600px",marginTop:"10px"}}>
  
  <div class="card-body px-3">
    <h1 class="card-title text-start ">"</h1>
    <p class="card-text text-start ">It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others. Simply loved it!</p>
    <hr />
    <div className='row'>
        <div className="col-md-2 "><img src="./user-img.svg" alt="" style={{width:"60%"}} /></div>
        <div className="col-md-4 text-start"><span>Jhon Stark</span><br /><span>Engineer Director</span></div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default PplSay