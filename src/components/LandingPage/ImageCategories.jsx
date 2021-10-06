import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import ImagesContext from "../Common/stateProvider";
import ImageCard from "../Common/ImageCard";
import Button from "../Common/button";

const ImageCategories = () => {
  const imgContext = useContext(ImagesContext);
  const categorizedImage = imgContext.selectedImageCategory
    ? imgContext.images
        .slice(0, 3)
        .filter(
          (image) => image.category.id === imgContext.selectedImageCategory
        )
    : imgContext.images.slice(0, 3);

  const categorizedImgUI = categorizedImage.map((image) => {
    return (
      <ImageCard
        handleImageSelect={imgContext.handleImageSelect}
        extraClassName={`imageCardCont${image.id}`}
        key={image.id}
        image={image}
        handleShowModal={imgContext.handleShowModal}
      />
    );
  });

  categorizedImgUI.splice(
    2,
    0,
    <div className="moreimages">
      <Link to="/Feeds">
        <Button className="moreimages-btn" name="View more images" />
      </Link>
    </div>
  );

  return (
    <section className="imagescategories">
      <div className="container">
        <h2 className="categoriesh2">
          Explore Thousands of Categories of image
        </h2>
        <div className="categories">
          {imgContext.imagesCategories?.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                imgContext.handleSelectedImageCategory(category.id);
              }}
              className={` ${
                imgContext.selectedImageCategory === category.id
                  ? "category-btn active"
                  : "category-btn"
              }`}
            >
              {category.name}
            </button>
          ))}
          <Link to="/Feeds" className="category-seeall">
            See all
          </Link>
        </div>
        <div className="categoryimagescontainer">{categorizedImgUI}</div>
      </div>
    </section>
  );
};

export default ImageCategories;
