import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='container-inline'>
        <nav class="navbar navbar-expand-lg bg-body-light d-flex align-items-center ">
  <div class="container-fluid px-5">
    <a class="navbar-brand ps-5" href="#">
        <img src="./logo.svg" alt="" className='img-fluid' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-md-flex justify-content-end ps-5" id="navbarNavDropdown">
      <ul class="navbar-nav pe-5 ">
        <li class="nav-item px-3 ">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link active " href="#">Landing <img src="./arrowDown.svg" alt="" /></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Pages  <img src="./arrowDown.svg" alt="" /></a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Docs <img src="./arrowDown.svg" alt="" /></a>
        </li>
        <li class="nav-item px-3 pt-1">
          <button class="nav-link download-button px-4" href="#">Download</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar