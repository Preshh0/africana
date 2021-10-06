import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Index from "./components/LandingPage/Index";
import ImagesContext from "./components/Common/stateProvider";
import { getCategories } from "./components/utils/getCategories";
import { getImages } from "./components/utils/getImages";
import Feeds from "./components/Feeds/Feeds";
import ImageDetails from "./components/ImageDetails/Images";
import ModalPopup from "./components/Modal/Modal";

function App() {
  let history = useHistory();
  const [imagesCategories, setImagesCategories] = useState([]);
  const [selectedImageCategory, setSelectedImageCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setImagesCategories([...getCategories()]);
  }, []);

  useEffect(() => {
    setImages([...getImages()]);
  }, []);

  const handleSelectedImageCategory = (category) => {
    setSelectedImageCategory(category);
  };
  const handleImageSelect = (img) => [setSelectedImage(img)];

  const handleShowModal = (id) => {
    history.push(`ImageId=${id}`);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <div className="App">
        <ImagesContext.Provider
          value={{
            imagesCategories: imagesCategories,
            images: images,
            selectedImageCategory: selectedImageCategory,
            handleSelectedImageCategory: handleSelectedImageCategory,
            handleImageSelect: handleImageSelect,
            showModal: showModal,
            handleShowModal: handleShowModal,
            handleCloseModal: handleCloseModal,
          }}
        >
          <ModalPopup />
          <Switch>
            <Route
              path="/Images/:id"
              render={(props) => (
                <div>
                  <ImageDetails {...props} />
                </div>
              )}
            />

            <Route path="/Feeds">
              <Feeds />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </ImagesContext.Provider>
      </div>
    </Router>
  );
}

export default App;
