import React, { useContext } from "react";
import "./feeds.css";
import ImagesContext from "../Common/stateProvider";
import Masonry from "react-masonry-css";
import ImageCard from "../Common/ImageCard";
import NavBar from "../Common/NavBar";
import Footer from "../LandingPage/Footer";

const Feeds = () => {
  const imgContext = useContext(ImagesContext);
  const categorizedImgContext = imgContext.selectedImageCategory
    ? imgContext.images.filter(
        (i) => i.category.id === imgContext.selectedImageCategory
      )
    : imgContext.images;

  console.log(categorizedImgContext);
  const categorizedImg = categorizedImgContext.map((image) => (
    <ImageCard key={image.id} image={image} extraClassName="feeds-card" />
  ));
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    528: 1,
  };

  return (
    <>
      <section className="feeds">
        <NavBar loggedIn={true} />
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
          </div>
          <div className="feeds-imageContainer">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {categorizedImg}
            </Masonry>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Feeds;
