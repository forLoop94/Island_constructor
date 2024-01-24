import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import "../css/navpanel.css";

export const NavPanel = () => {
  const location = useLocation();
  const [panel, setPanel] = useState(true);

  const setNavPanelBackground = (targetLocation) => {
    if (location.pathname === targetLocation)
      return { borderBottom: "1px solid greenyellow", color: "greenyellow" };
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
          <FaBars className="text-white menu-btn ms-2 mt-2" />
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
        <div className="logo-container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h1 className="text-white">Logo</h1>
        </div>
        <div className="nav-panel">
          <ul>
            <li style={setNavPanelBackground("/")}>
              <Link to="/">
                Home
              </Link>
            </li>
            <li style={setNavPanelBackground("/about")}>
              <Link to="/about">
                About
              </Link>
            </li>
            <li style={setNavPanelBackground("/projects")}>
              <Link to="/projects">
                Projects
              </Link>
            </li>
            <li style={setNavPanelBackground("/vision-mission")}>
              <Link to="/vision-mission">
                Phylosophies
              </Link>
            </li>
            <li style={setNavPanelBackground("/footer")}>
              <Link to="/footer">
                Footer
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
        </div>
      </div>
    </>
  );
};
