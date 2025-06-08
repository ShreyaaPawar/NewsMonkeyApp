import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <style>
        {`
          .navbar {
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
            min-height: 45px;
          }

          .navbar-brand {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .nav-link {
            font-size: 0.95rem;
            padding: 0.4rem 0.6rem;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <DotLottieReact
              src="https://lottie.host/78ca0d4c-754d-49a1-a0c3-439811c5c149/fYFywDyY06.lottie"
              loop
              autoplay
              width={28}
              height={28}
            />
            NewsMonkey
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categories
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Link className="dropdown-item" to="/business">Business</Link></li>
                      <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                      <li><Link className="dropdown-item" to="/general">General</Link></li>
                      <li><Link className="dropdown-item" to="/health">Health</Link></li>
                      <li><Link className="dropdown-item" to="/science">Science</Link></li>
                      <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                      <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
