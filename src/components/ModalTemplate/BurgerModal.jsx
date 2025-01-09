import css from "./BurgerModal.module.css";
import { IoClose } from "react-icons/io5";
import AuthNav from "../AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import Modal from "react-modal";

const BurgerModal = ({ modalIsOpen, setIsOpen, isTablet }) => {
  // let subtitle;

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css.div}>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        overlayClassName={css["burger-modal-overlay"]}
        className={css["burger-modal-content"]}
        contentLabel="Example Modal"
      >
        <div className="">
          <IoClose onClick={closeModal} className={css.close} />
        </div>

        <div className="flex flex-col">
          <Nav modalIsOpen={modalIsOpen} />
        </div>

        <div className="flex flex-col">
          <AuthNav modalIsOpen={modalIsOpen} isTablet={isTablet} />
        </div>
      </Modal>
    </div>
  );
};

export default BurgerModal;
