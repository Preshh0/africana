import React, { Component } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ImageCard = ({
  image,
  extraClassName,
  handleImageSelect,
  handleShowModal,
}) => {
  return (
    <div className={"imagecardcontainer " + extraClassName}>
      <div className="imagecard">
        <Link to={`?ImageId=${image.id}`}>
          <img
            src={image.image}
            alt={image.name}
            onImageSelect={() => handleImageSelect(image?.id)}
            // onClick={() => handleShowModal(image?.id)}
          />
        </Link>
        <div className="imagecard-bottom">
          <div className="imagecard-bottom-left">
            <p className="rounded-profileImg ">{image.source[0]}</p>
            <p>{image.source}</p>
          </div>
          <BsFillArrowDownSquareFill className="download-icon" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
