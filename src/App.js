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
import ScrollToTop from "./components/Common/useScrollToTop";

function App() {
  const [imagesCategories, setImagesCategories] = useState([]);
  const [selectedImageCategory, setSelectedImageCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [queriedImg, setQueriedImg] = useState([]);

  useEffect(() => {
    const QueriedImg = images?.filter((img) =>
      img.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setQueriedImg(QueriedImg);
  }, [searchQuery]);

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

  const handleCloseModal = () => {
    setShowModal(false);
    // history.push(`ImageId=${id}`);
  };

  return (
    <Router>
      <div className="App">
        <ImagesContext.Provider
          value={{
            imagesCategories,
            images,
            selectedImageCategory,
            handleSelectedImageCategory,
            handleImageSelect,
            showModal,
            handleCloseModal,
            setShowModal,
            searchQuery,
            setSearchQuery,
          }}
        >
          <ScrollToTop />
          <ModalPopup showModal={showModal} />

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
