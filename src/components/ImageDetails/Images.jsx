import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Images.css";
import Button from "../Common/button";
import ImagesContext from "../Common/stateProvider";
import ImageCard from "../Common/ImageCard";

const ImageDetails = ({ match }) => {
  let ImageId = new URLSearchParams(useLocation().search).get("ImageId");

  const imgContext = useContext(ImagesContext);

  const selectedImage = imgContext.images?.find(
    (img) => img.id === parseInt(ImageId)
  );
  const sameCategory = imgContext.images?.filter(
    (img) =>
      img.category.id === selectedImage?.category.id &&
      img.id !== selectedImage?.id
  );
  return (
    <div className="imagedetails-page">
      <div className="image-details" id="imageDetails">
        <div className="image-details-left">
          <h2> {selectedImage?.name}</h2>
          <p>{selectedImage?.description}</p>
          <a href={selectedImage?.image} download>
            <Button className="image-details-button" name="Download" />
          </a>
          <div className="image-details-left-bottom">
            <p>Tags</p>
            <div className="image-details-left-bottomboxes">
              <div className="bottomboxes-top">
                <p>African culture</p>
                <p>Arts</p>
              </div>
              <div className="bottomboxes-down">
                <p>Animals</p>
                <p>African Arts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-details-right">
          <img src={selectedImage?.image} alt={selectedImage?.name} />
        </div>
      </div>

      <div className="image-details-bottomcontainer">
        <p>More Like This</p>
        <div className="image-details-bottom">
          {sameCategory.map((image) => (
            <ImageCard
              image={image}
              extraClassName={"image-details-bottomimg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
