import React, { Component } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reportbox from "./report-form";

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <Routes>
            <Route path="report" element={<Reportbox/>}>  
            </Route>
          </Routes>
        </BrowserRouter>

        <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <img src="/logo192.png" alt="" width={30} height={30} className="d-inline-block align-text-top" />
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Explore</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://my.atlistmaps.com/map/62ce56d3-9b67-491f-92c3-1d6b4b0fbf71?marker_id=3826838d-7e06-4e09-b344-607f6bc351a0" target="_blank">Register Store Here</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/harishsikriwal/ " target="_blank">Linked in</a></li>
                    <li><a className="dropdown-item" href="https://github.com/ashusikriwal1998" target="_blank">GitHub</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="/report" target="_blank">Report issue</a></li>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

