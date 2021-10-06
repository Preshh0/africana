import React, { Component, useContext } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import ImagesContext from "./stateProvider";

const ImageCard = ({ image, extraClassName }) => {
  let history = useHistory();
  const ImgContext = useContext(ImagesContext);
  return (
    <div className={"imagecardcontainer " + extraClassName}>
      <div className="imagecard">
        <img
          src={image.image}
          alt={image.name}
          onClick={() => {
            history.push(`?ImageId=${image?.id}`);
            ImgContext.setShowModal(true);
            const imageDetail = document.getElementById("imageDetails");
            imageDetail &&
              imageDetail.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }}
        />
        <div className="imagecard-bottom">
          <div className="imagecard-bottom-left">
            <p className="rounded-profileImg ">{image.source[0]}</p>
            <p>{image.source}</p>
          </div>
          <a href={image.image} download>
            <BsFillArrowDownSquareFill className="download-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
