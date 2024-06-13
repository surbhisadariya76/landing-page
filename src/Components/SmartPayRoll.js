import React from 'react'
import './smartpayroll.css'

function SmartPayRoll() {
  return (
    <div className='container-inline'>
          
            <div className='mt-4 row'>
                <div className="col-md-2"></div>
               
               
                <div className="col-md-4 col-12 ">
                   <div className='smart-payroll-icon ms-5'>
                    <img src="./SmartpayRoll.svg" alt="" /></div><br />
                    <p className='smart-p1 w-100 text-start  ms-5'>Smart Payroll. Paying your
                    people couldn’t be easier </p>
                    <p className='smart-p2 text-start  ms-5'>You can modify your pages with drag-dropping , can import demos with just ” One Click” and can modify theme setting easy-to-use options panel.</p>
                    
                   
                </div>
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
                
            </div>
    </div>
  )
}

export default SmartPayRoll