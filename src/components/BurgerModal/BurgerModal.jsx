import css from "./BurgerModal.module.css";
import { IoClose } from "react-icons/io5";
import AuthNav from "../AuthNav/AuthNav";
import Nav from "../Nav/Nav";
import LogOutBtn from "../LogOutBtn/LogOut";
import Modal from "react-modal";

const BurgerModal = ({ modalIsOpen, setIsOpen, isTablet, isLogged }) => {
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
        className={
          isLogged
            ? css["burger-modal-content-logged"]
            : css["burger-modal-content"]
        }
        contentLabel="Example Modal"
      >
        <div className="">
          <IoClose
            onClick={closeModal}
            className={isLogged ? css["close-logged"] : css.close}
          />
        </div>

        <div className="flex flex-col">
          <Nav modalIsOpen={modalIsOpen} />
        </div>

        <div className="flex flex-col">
          {isLogged ? (
            <LogOutBtn isLogged={isLogged} />
          ) : (
            <AuthNav modalIsOpen={modalIsOpen} isTablet={isTablet} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default BurgerModal;
