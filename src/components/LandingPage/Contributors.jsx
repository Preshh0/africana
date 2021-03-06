import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import Button from "../Common/button";

const contributorsImgs = [
  {
    id: 4,
    contributorimage: "/images/Rectangle 11.png",
  },
  {
    id: 5,
    contributorimage: "/images/Rectangle 4.png",
  },
  {
    id: 6,
    contributorimage: "/images/Rectangle 6.png",
  },
  {
    id: 7,
    contributorimage: "/images/Rectangle 5.png",
  },
  {
    id: 8,
    contributorimage: "/images/Rectangle 7.png",
  },
];

const Contributors = () => {
  const contributorsImgUI = contributorsImgs.map((img) => (
    <img extraClassName={`lower-img`} key={img.id} src={img.contributorimage} />
  ));

  const breakpointColumnsObj = {
    default: 2,
    768: 2,
    528: 1,
  };

  return (
    <section className="contributors">
      <div className="container contributorscontainer">
        <div className="contributors-left-col">
          <h2>Curated by Africans, For Africans.</h2>
          <p>
            At Africana, we hope to serve as a bridge between African creators
            in need of high definition images, and those who provide these
            images at very affordable prices.
          </p>
          <p className="contributors-paragraph2">
            Are you a photographer in need of a medium to show and sell your
            work? We need you. Join Indegene today as a creator and earn from
            your skill.
          </p>
          <Link to="/Registration">
            <Button name="Become a Contributor" className="contributors-btn" />
          </Link>
        </div>

        <div className="contributors-right-col">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {contributorsImgUI}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Contributors;
