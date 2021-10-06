import React, { Component, useEffect, useState, useContext } from "react";
import Button from "../Common/button";
import { FaSearch } from "react-icons/fa";
import ImagesContext from "../Common/stateProvider";

const Header = () => {
  const ImgContext = useContext(ImagesContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  // const handleQuerySubmit = () => {
  // const queriedImg = ImgContext.images?.filter((img) =>
  //   img.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // console.log(queriedImg);
  // return queriedImg;
  // };

  return (
    <header id="header">
      <div className="hero">
        <div className="hero-left">
          <h1>Getting indegenous images should not be a hassle</h1>
          <p>
            We are committed to bringing you the best images from all over
            Africa.
          </p>
          <div className="hero-input-container">
            <FaSearch />
            <input
              value={searchQuery}
              className="header-input"
              type="text"
              placeholder="Search for Image by Keyword"
              onChange={(e) => handleSearchQuery(e.target.value)}
            />
          </div>

          <Button
            // onClick={handleQuerySubmit}
            type="submit"
            name="Search"
          />
          {/* <p>{queriedImg}</p> */}
        </div>
        <div className="hero-right imageholder">
          <img src="/images/Rectangle 3.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
