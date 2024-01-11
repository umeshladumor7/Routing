import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const naviget = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand col-4 fw-bold ps-5" to="/">
            UmEsh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/Blog">
                Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/Form">
                  Registration Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/Table">
                  Table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button className='btn btn-primary mt-3 ms-2' onClick={() => naviget(-1)}>Back</button>
      <button className='btn btn-primary mt-3 ms-2' onClick={() => naviget(1)}>Next</button>

    </div>
  )
}

export default Navbar