import React, { useState, useRef } from "react";
import "./UploadImg.css";
import { Link } from "react-router-dom";
import Button from "../Common/button";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "../Forms/Login";

const UploadImg = () => {
  //   const [eachTag, setEachTag] = useState("");
  const fileInput = useRef(null);
  const [tags, setTags] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleSetTags = (e) => {
    const newTags = [...tags];
    if (e.code === "Return") {
      newTags.push(e.target.value);
      console.log(newTags);
      setTags(newTags);
      e.target.value = "";
    }
    return;
  };

  const handleDelete = (tag) => {
    const oldTags = [...tags];
    const filteredTags = oldTags.filter((t) => t !== tag);
    setTags(filteredTags);
  };

  const handleUploadDelete = () => {
    setSelectedFile(null);
    setIsSelected(false);
  };

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const s = selectedFile?.type;
  let isImageFile = s?.split("/")[0] === "image";

  console.log(selectedFile?.type);
  return (
    <div className="upload">
      <div className="upload-left">
        <Link to="/">
          <h5 className="logo">Africana</h5>
        </Link>
        <h3>Upload a Picture</h3>
        {selectedFile && (
          <div className="upload-previewImg">
            {" "}
            {isImageFile && (
              <img src={URL.createObjectURL(selectedFile)} alt="" />
            )}
            <AiOutlineClose onClick={handleUploadDelete} />
          </div>
        )}
        <div className="upload-description">
          <h6>Picture Title</h6>
          <input type="text" placeholder=" Put in title for your picture" />
          <h6>Description</h6>
          <input type="text" placeholder=" Briefly describe your picture" />
        </div>
        <div>
          <h6>Tags</h6>

          <div className="upload-tagcontainer">
            {tags.map((tag) => (
              <div className="upload-tag">
                <p>{tag}</p>

                <AiOutlineClose onClick={() => handleDelete(tag)} />
              </div>
            ))}
          </div>
        </div>

        <input
          className="upload-tag-input"
          type="text"
          placeholder="Add tags"
          onKeyPress={handleSetTags}
        />
        <Button className="upload-btn" name="Upload" />
      </div>

      <div className="upload-right">
        <div className="upload-right-drop">
          <p>Drag and drop image here or</p>
          <input
            type="file"
            name="file"
            id="actual-btn"
            onChange={handleFileInput}
            hidden
          />

          <label for="actual-btn">Upload from gallery</label>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
