import "./NavBar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pupster
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/discover"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/discover"
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/discover"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/search"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
