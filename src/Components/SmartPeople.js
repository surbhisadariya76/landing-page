import React from 'react'
import './smartppl.css'

function SmartPeople() {
  return (
    <div className='container-inline'style={{height:"400px"}}>
        <div className='main-smart mt-5'></div>
        <div className='main-smart1 '></div>
        <div className='main-smart2'>
            <div className='content-deg'>
        <div style={{height:"300px",backgroundColor:"#F4F5F7"}}>   
                 <div className="features  text-center"><span>Clients</span></div>
            <div className='mt-2 better-management'>The smart people management you need</div>
            <div className='start-work mt-1'><span>21,000+ organizations trust <span style={{color:"blue",fontWeight:"500"}}> Prompt </span> to drive performance & engagementh</span>
        </div>

        <div className="row mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6  d-flex justify-content-around">
                <div><img src="amazon.svg" alt="" /></div>
                <div><img src="google.svg" alt="" /></div>
                <div><img src="paypal.svg" alt="" /></div>
                <div><img src="spotify.svg" alt="" /></div>
                <div><img src="shopify.svg" alt="" /></div>
            </div>
        </div>
        </div>
        </div></div>

      


    </div>
  )
}

export default SmartPeople