import React from "react";
import "./nav.css";
import { IconContext } from "react-icons";
import { BiFootball } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <ul>
            <li>
              <IconContext.Provider value={{ size: "2em" }}>
                <BiFootball />
              </IconContext.Provider>
            </li>
            <li>Player</li>
            <li>Match</li>
            <li>Ranking</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>icon</li>
            <li>login</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
