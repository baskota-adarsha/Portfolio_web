import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed-top navbar py-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          style={{
            color: "white",
            fontSize: "18px",
            position: "relative",
            cursor: "pointer",
          }}
          to="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="adarsha fs-4" style={{ color: "white" }}>
            ADARSHA BASKOTA
          </span>
        </Link>

        {/* Hamburger icon - with fixed position */}
        <button
          className="navbar-toggler mainham"
          onClick={toggleMenu}
          style={{
            display: "block",
            position: "relative",
            right: "0",
            marginLeft: "0 !important",
            marginRight: "0 !important",
            background: "transparent",
            border: "none",
          }}
        >
          <svg
            className="ham"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            viewBox="0 0 16 16"
            style={{
              marginRight: "0 !important",
            }}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        {/* Desktop Navigation links - visible only on larger screens */}
        <ul
          className="nav nav-pills d-none d-md-flex"
          style={{
            gap: "28px",
          }}
        >
          <li className="nav-item">
            <Link
              style={{
                color: "white",
                fontSize: "18px",
                position: "relative",
                cursor: "pointer",
              }}
              to="/"
              className="nav-link"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                color: "white",
                fontSize: "18px",
                position: "relative",
                cursor: "pointer",
              }}
              to="/aboutme"
              className="nav-link"
            >
              ABOUT ME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                color: "white",
                fontSize: "18px",
                position: "relative",
                cursor: "pointer",
              }}
              to="/blogs"
              className="nav-link"
            >
              BLOG
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{
                color: "white",
                fontSize: "18px",
                position: "relative",
                cursor: "pointer",
              }}
              to="/contactme"
              className="nav-link"
            >
              CONTACT ME
            </Link>
          </li>
        </ul>

        {/* Mobile menu when hamburger is clicked */}
        <div
          className={`hamburger-menu position-fixed  ${
            isOpen ? "d-block" : "d-none"
          }`}
          style={{
            backgroundColor: "darkslategray",
            top: "0",
            left: 0,
            padding: "15px",
            paddingTop: "70px",
            zIndex: 999,
            width: "200px",
            height: "100vh",
            boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                to="/aboutme"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                to="/blogs"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                BLOGS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                to="/contactme"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
