import css from "./ModalAttention.module.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const ModalAttention = ({ children, modalIsOpen, setModalOpen }) => {
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className={css.div}>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        overlayClassName={css["attention-modal-overlay"]}
        className={css["attention-modal-content"]}
        contentLabel="Example Modal"
      >
        <div className="relative">
          <IoClose onClick={closeModal} className={css.close} />
        </div>
        {children}
      </Modal>
    </div>
  );
};

export default ModalAttention;
