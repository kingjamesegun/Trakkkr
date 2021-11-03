import React from 'react';
import {Link} from 'react-router-dom';
import NavLogo from '../assets/logo.png';

function NavMenu() {
  return (
    <div>

      <nav 
        className="navbar navbar-expand-sm navbar-dark" 
        style={{backgroundColor: "#3F3D56", position: "fixed", width : "100%", zIndex : "32"}}
      >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={NavLogo} alt='Trakkker logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample03">
      <ul className="navbar-nav mr-auto mb-2 mb-sm-0">
        <li className="nav-item active">
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" aria-current="page" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item active sand">
          <Link className="nav-link" aria-current="page" to="/team">
            Team
          </Link>
        </li>

      </ul>
      
      <ul className="navbar-nav  mb-sm-0 inline">
        <li className="nav-item active">
          <Link className=" login-btn" aria-current="page" to="/login">
            Login
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavMenu
