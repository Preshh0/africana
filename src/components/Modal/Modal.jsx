import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import ImagesContext from "../Common/stateProvider";
import { useContext } from "react";
import ImageDetails from "../ImageDetails/Images";
import Modal from "react-modal";

const ModalPopup = () => {
  const ImgContext = useContext(ImagesContext);
  return (
    <div className="container">
      <Modal
        isOpen={ImgContext.showModal}
        onRequestClose={() => ImgContext.handleShowModal(false)}
      >
        <button onClick={ImgContext.handleCloseModal}>
          <AiOutlineClose />
        </button>
        <ImageDetails />
      </Modal>
    </div>
  );
};

export default ModalPopup;
