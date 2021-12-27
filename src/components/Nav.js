import React, {} from "react";
import { Link } from "react-router-dom";

export default function Index() {

  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <a className="navbar-brand" href="/">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-semibold font-sans  active " to="/product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-semibold font-sans  active " to="/faq">FAQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-green-500 text-semibold font-sans border rounded-full px-4 active " to="/faq">
            Logout
          </Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  );
}
