import css from "./ModalNotice.module.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import calculatePupularity from "../../utils/calculatePupularity";

import { selectNoticeById } from "../../redux/notices/selectors";
import { noticesFavoriteAddById } from "../../redux/notices/operation";

const ModalNotice = ({ modalIsOpen, setModalOpen, id }) => {
  const noticeById = useSelector(selectNoticeById);
  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    // dispatch(noticesFavoriteAddById(id));
  };

  if (!noticeById) return null;

  function toUpperCase(value) {
    if (!Object.keys(noticeById).length) return null;

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const renderStars = (rating, totalStars = 5) => {
    return Array.from({ length: totalStars }, (_, index) => {
      return (
        <FaStar
          key={index}
          style={{
            width: "16px",
            height: "16px",
            color: index < rating ? "gold" : "lightgray",
          }}
        />
      );
    });
  };

  function correctPopularity(value) {
    let calculate = calculatePupularity(value);
    if (calculate > 5) {
      calculate = 5;
      return calculate;
    }

    return calculate;
  }

  return (
    <Modal
      id={id}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      overlayClassName={css["notice-modal-overlay"]}
      className={css["notice-modal-content"]}
      contentLabel="Example Modal"
    >
      <div className="relative">
        <IoClose onClick={closeModal} className={css.close} />
      </div>

      <div className={css["img-score-block"]}>
        <div className="relative">
          <img
            src={noticeById.imgURL}
            alt="photo"
            className={css.img}
            loading="lazy"
          />
          <span className={css.cloud}>{toUpperCase(noticeById.category)}</span>
        </div>

        <div className={css["stars-number"]}>
          <h2 className={css.title}>{noticeById.title}</h2>
          <div className={css["score"]}>
            {renderStars(calculatePupularity(noticeById.popularity), 5)}
            <p className={css.popularity}>
              {correctPopularity(noticeById.popularity)}
            </p>
          </div>
        </div>
      </div>

      <div className={css["info-block"]}>
        <ul className={css["about-list"]}>
          <li className={css["about-item"]}>
            <p className={css.name}>Name</p>
            <span className={css.span}>{noticeById.name}</span>
          </li>
          <li className={css["about-item"]}>
            <p className={css.name}>Birthday</p>
            <span className={css.span}>
              {noticeById.birthday ? noticeById.birthday : "Unknown"}
            </span>
          </li>
          <li className={css["about-item"]}>
            <p className={css.name}>Sex</p>
            <span className={css.span}>{toUpperCase(noticeById.sex)}</span>
          </li>
          <li className={css["about-item"]}>
            <p className={css.name}>Species</p>
            <span className={css.span}>{toUpperCase(noticeById.species)}</span>
          </li>
        </ul>

        <div className="w-[100%] h-[auto]">
          <p className={css.comment}>{noticeById.comment}</p>
        </div>
      </div>

      <p className={css.price}>
        {noticeById.price
          ? `$${noticeById.price}.99`
          : toUpperCase(noticeById.category)}
      </p>

      <div className={css["btns-block"]}>
        <button
          className={css["add-btn"]}
          type="button"
          onClick={() => handleSubmit(noticeById._id)}
        >
          Add to{" "}
          <span>
            <IoHeartOutline className={css.heart} />
          </span>
        </button>

        <button className={css["contact-btn"]}>Contact</button>
      </div>
    </Modal>
  );
};

export default ModalNotice;
