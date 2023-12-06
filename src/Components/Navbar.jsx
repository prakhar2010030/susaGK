import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid ">
        <Link to={"/"} className="navbar-brand text-light text-bold">
          <strong>SusaKGjyo</strong>
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link
                to={"/"}
                className="nav-link text-light  active"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link text-light">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/user"} className="nav-link text-light">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
