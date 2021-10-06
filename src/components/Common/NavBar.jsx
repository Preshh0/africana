import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ loggedIn }) => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setNavActive(window.pageYOffset > 82);
  };
  return (
    <nav className={`navigation ${navActive && "navigation-active"}`}>
      <div className="nav-left">
        <Link to="/">
          <h5 className="logo">Africana</h5>
        </Link>
      </div>

      <div className="nav-right">
        {loggedIn && (
          <div className="hero-input-container signedIn">
            <FaSearch />
            <input
              className="nav-input"
              type="text"
              placeholder="Search for Image by Keyword"
            />
            <Button name="Upload Picture" className="nav-button" />
            <p className="nav-rounded-profileImg  ">J</p>
          </div>
        )}

        {!loggedIn && (
          <div className="nav-sign-up">
            <Button name="Sign Up" />
            <p style={{ color: `${navActive ? "black" : "white"}` }}>Login</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
