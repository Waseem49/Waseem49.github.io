import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About " },
    { path: "/skill", title: "Skills" },
    { path: "/project", title: "Project" },
    { path: "/contact", title: "Contact" },
    { path: "/resume", title: "Resume" },
  ];
  return (
    <div
      className="navbar"
      style={{ backgroundColor: "black", color: "white" }}>
      <div
        className="navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}>
        <div className="left">LOGO</div>
        <div className="right">
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
              listStyle: "none",
            }}>
            {links.map((it) => {
              return (
                <NavLink
                  key={it.path}
                  to={it.path}
                  style={({ isActive }) => {
                    return isActive
                      ? { textDecoration: "none", color: "blanchedalmond" }
                      : { textDecoration: "none", color: "white" };
                  }}>
                  <li>{it.title}</li>
                </NavLink>
              );
            })}
            {/* <li>HOME</li>
            <li>
              <Link to="/about">ABOUT ME</Link>
            </li>
            <li>SKILLS</li>
            <li>PROJECT</li>
            <li>CONTACT</li>
            <li>RESUME</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
