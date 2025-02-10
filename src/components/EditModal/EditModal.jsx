import css from "./EditModal.module.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectAuthIsUser } from "../../redux/auth/selectors";

const EditModal = ({ modalIsOpen, setModalIsOpen }) => {
  const isUser = useSelector(selectAuthIsUser);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      overlayClassName={css["edit-modal-overlay"]}
      className={css["edit-modal-content"]}
      contentLabel="Example Modal"
    >
      <div className="relative">
        <IoClose onClick={closeModal} className={css.close} />
      </div>

      <form action="">
        <h1>Edit information</h1>

        <div className={css["upload-block"]}>
          {isUser.avatar ? (
            <img src={isUser?.avatar} alt="avatar" />
          ) : (
            <button disabled className={css["upload-btn"]}>
              <svg className={css["upload-icon"]}>
                <use href="/icons/symbol-defs.svg#icon-person-icon"></use>
              </svg>
            </button>
          )}
          <label>
            <input
              type="text"
              name="photo"
              accept="image/*"
              // onChange={handleFileChange}
              className={css["upload-input"]}
            />
          </label>

          <div>
            <button className={css["upload-btn"]}>Upload a photo</button>
          </div>
        </div>

        <div className={css["info-inputs-block"]}>
          <input
            type="text"
            placeholder={isUser.name || "Add name"}
            className={css["info-input"]}
          />
          <input
            type="text"
            placeholder={isUser.email || "Add email"}
            className={css["info-input"]}
          />
          <input
            type="text"
            placeholder={isUser?.phone || "+380"}
            className={css["info-input"]}
          />
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
