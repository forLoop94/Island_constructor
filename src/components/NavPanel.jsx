import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import "../css/navpanel.css";
import logo from "../assets/logo.png";

export const NavPanel = () => {
  const location = useLocation();
  const [panel, setPanel] = useState(true);

  const setNavPanelBackground = (targetLocation) => {
    if (location.pathname === targetLocation)
      return { borderBottom: "1px solid greenyellow", color: "rgb(76, 127, 1)" };
    return {};
  };

  const hideBars = {
    display: !panel ? "none" : "block",
  };

  return (
    <>
      <div style={hideBars} className="mobile-nav">
        <span
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="Toggle Panel"
        >
          <FaBars className="menu-btn ms-2 mt-2" />
        </span>
      </div>
      <div
        className={!panel ? "show" : "hide"}
        id="header"
        role="button"
        onClick={() => setPanel(!panel)}
        onKeyDown={() => setPanel(!panel)}
        tabIndex={0}
      >
        <div className="logo-container d-flex flex-column align-items-center">
          <img src={logo} alt="logo" className="logo" />
          <small>Seyi & Co.</small>
        </div>
        <div className="nav-panel">
          <ul>
            <li>
              <Link style={setNavPanelBackground("/")} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={setNavPanelBackground("/about")} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link style={setNavPanelBackground("/projects")} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link style={setNavPanelBackground("/news")} to="/news">
                News
              </Link>
            </li>
            <li>
              <Link style={setNavPanelBackground("/vision-mission")} to="/vision-mission">
                Objectives
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="mobile-close"
          role="button"
          onClick={() => setPanel(!panel)}
          onKeyDown={() => setPanel(!panel)}
          tabIndex={0}
          aria-label="close button"
        >
          <FaX className="menu-btn" />
        </div>
      </div>
    </>
  );
};
