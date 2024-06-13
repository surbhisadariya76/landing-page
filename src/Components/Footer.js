import React from 'react'

function Footer() {
  return (
    <div className='container-inline'>
        <div style={{backgroundColor:"#F4F5F6",height:"335px"}}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 mt-5">
                <img src="./logo.svg" alt="" className='' style={{marginRight:"9rem"}} />
                <br />
                <div className='text-start ms-5 mt-2'style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Make your web application stand 
                out with high-quality landing page</div>
                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-between text-start">
                    <div>
                        <div className='mb-2'>PLATFORMS</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Demo</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Integrations</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Status</div>
                  </div>
                  <div>
                        <div  className='mb-2'>KNOWLEDGE BASE</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Blog</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Help Center</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Sales Tools catalog</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>API</div>
                       
                  </div>
                  <div>
                        <div  className='mb-2'>COMPANY</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>About us</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Career</div>
                        <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Contact Us</div>
                  </div>
                  <div>
                    <div  className='mb-2'>LEGAL</div>
                    <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Usage Policy</div>
                    <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Privacy Policy</div>
                    <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Terms of Service</div>
                    <div style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>Trust</div>
                  </div>
                  
                </div>
            </div>
           
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10"> <hr />
            <div className='d-flex justify-content-between'>
                <div ><span style={{fontSize:"15px",fontWeight:"500", color:"#8A90A2"}}>2023 © Prompt. All rights reserved. Crafted by</span > <span  style={{fontSize:"15px",fontWeight:"500", }}>Coderthemes</span></div>
                <div><img src="./facebookLogo.svg" alt="" className='px-2'/> <img src="./twitter.svg" alt="" className='px-2' /><img src="./linkedin.svg" alt=""  className='px-2'/></div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer