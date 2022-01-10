import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue-600" aria-label="Eighth navbar example">
      <div className="container">
        <a className="navbar-brand" href="/product">
          Trakkkr⏰
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none', outline: 'none' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar__ui">
            <li className="nav-item">
              <Link className="nav-link text-semibold font-sans  active " to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-semibold font-sans  active " to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className=" nav-link text-semibold font-semibold font-sans border text-blue-600 hover:text-blue-700 rounded-md px-4 active hover:no-underline "
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    //   <nav className="navbar navbar-expand-lg navbar-light ">
    //   <div className="container">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-mdb-toggle="collapse"
    //       data-mdb-target="#navbarTogglerDemo03"
    //       aria-controls="navbarTogglerDemo03"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <i className="fas fa-bars"></i>
    //     </button>
    //     <a className="text-bold text-2xl text-black hover:text-black text" href="/product" style={{textDecoration: "none"}}>Trakkkr.</a>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

    //     </div>
    //   </div>
    // </nav>
  );
}
