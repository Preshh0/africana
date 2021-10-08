// import ImagesContext from "../Common/stateProvider";
// import { useContext } from "react";
// import UploadImg from "../UploadImg/UploadImg";
// import Modal from "react-modal";

// const UploadModal = () => {
//   const ImgContext = useContext(ImagesContext);
//   console.log(ImgContext.displayModal);
//   return (
//     <Modal
//       isOpen={ImgContext.displayModal}
//       onRequestClose={() => ImgContext.setDisplayModal(false)}
//       style={{
//         overlay: {
//           display: "flex",
//           zIndex: "100",
//           backgroundColor: "rgb(131 128 128 / 50%)",
//           backdropFilter: "blur(5px)",
//         },
//         content: { width: "80%", margin: "auto", bottom: "0px", padding: "0" },
//       }}
//     >
//       <UploadImg />
//     </Modal>
//   );
// };

// export default UploadModal;
