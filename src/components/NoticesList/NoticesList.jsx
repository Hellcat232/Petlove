import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectNotices } from "../../redux/notices/selectors";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";

import { noticesById } from "../../redux/notices/operation";

import { selectAuthIsUser } from "../../redux/auth/selectors";

const NoticesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUser = useSelector(selectAuthIsUser);
  const isNoticesItem = useSelector(selectNotices);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const [isModalNoticeOpen, setModalNoticeOpen] = useState(false);
  const [isModalAttentionOpen, setModalAttentionOpen] = useState(false);

  const [isLogged, setIsLogged] = useState(true); /* TEMPORARY STATE FOR TEST */

  async function handleOpenModal(id) {
    if (isLogged) {
      setModalAttentionOpen(false);
      setSelectedNoticeId(id);
      await dispatch(noticesById(id));
      setModalNoticeOpen(true);
    } else {
      setModalNoticeOpen(false);
      setModalAttentionOpen(true);
    }
  }

  return (
    <ul className={css["notice-list"]}>
      {isNoticesItem !== null &&
        isNoticesItem.map((notice) => {
          return (
            <NoticesItem
              key={notice._id}
              notice={notice}
              handleOpenModal={handleOpenModal}
            />
          );
        })}

      {/* ======================MODALS ATTENTION AND NOTICE START WITH========================== */}

      {isLogged && !isModalAttentionOpen && (
        <ModalNotice
          modalIsOpen={isModalNoticeOpen}
          setModalOpen={setModalNoticeOpen}
          id={selectedNoticeId}
        />
      )}

      {!isLogged && !isModalNoticeOpen && (
        <ModalAttention
          modalIsOpen={isModalAttentionOpen}
          setModalOpen={setModalAttentionOpen}
        >
          <img
            src="/dog-face-attention1x.png"
            alt="attention face"
            srcSet="/dog-face-attention1x.png 1x, /dog-face-attention2x.png 2x"
            className={css["modal-img"]}
          />

          <h2 className={css["modal-attention-title"]}>Attention</h2>

          <p className={css["modal-attention-text"]}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>

          <div className={css["modal-btns-block"]}>
            <button
              type="button"
              className={css["login-modal-btn"]}
              onClick={() => navigate("/login")}
            >
              Log in
            </button>

            <button
              type="button"
              className={css["register-modal-btn"]}
              onClick={() => navigate("/register")}
            >
              Registration
            </button>
          </div>
        </ModalAttention>
      )}
    </ul>
  );
};

export default NoticesList;
