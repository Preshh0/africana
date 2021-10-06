import ImagesContext from "../Common/stateProvider";
import { useContext } from "react";
import ImageDetails from "../ImageDetails/Images";
import Modal from "react-modal";

const ModalPopup = () => {
  const ImgContext = useContext(ImagesContext);
  console.log(ImgContext.showModal);
  return (
    <Modal
      isOpen={ImgContext.showModal}
      onRequestClose={() => ImgContext.setShowModal(false)}
      style={{
        overlay: {
          display: "flex",
          zIndex: "100",
          backgroundColor: "rgb(131 128 128 / 50%)",
          backdropFilter: "blur(5px)",
        },
        content: { width: "80%", margin: "auto", bottom: "0px", padding: "0" },
      }}
    >
      <ImageDetails />
    </Modal>
  );
};

export default ModalPopup;
