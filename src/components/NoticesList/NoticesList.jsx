import css from "./NoticesList.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";

import {
  noticesById,
  noticesFavoriteRemoveById,
} from "../../redux/notices/operation";

import { selectAuthIsUser } from "../../redux/auth/selectors";
import { selectNoticesFavoriteList } from "../../redux/notices/selectors";

const NoticesList = ({
  selector,
  viewedTab /*handleRemoveFavorite, added, setAdded*/,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUser = useSelector(selectAuthIsUser);
  const favoriteList = useSelector(selectNoticesFavoriteList);
  const [addedItems, setAddedItems] = useState({});
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

  useEffect(() => {
    const addedMap = selector.reduce((acc, notice) => {
      acc[notice._id] = favoriteList.includes(notice._id);
      return acc;
    }, {});
    setAddedItems(addedMap);
  }, [favoriteList, selector]);

  function handleRemoveFavoriteNoticePage(id) {
    dispatch(noticesFavoriteRemoveById(id));
    setAddedItems(false);
  }

  return (
    <ul className={css["notice-list"]}>
      {selector !== null &&
        selector.map((notice) => {
          return (
            <NoticesItem
              key={notice._id}
              notice={notice}
              handleOpenModal={handleOpenModal}
              handleRemoveFavorite={handleRemoveFavoriteNoticePage}
              // handleRemoveFavorite={handleRemoveFavorite}
              isLogged={isLogged}
              added={addedItems[notice._id]}
              setAdded={(value) =>
                setAddedItems((prev) => ({ ...prev, [notice._id]: value }))
              }
              viewedTab={viewedTab}
            />
          );
        })}

      {/* ======================MODALS ATTENTION AND NOTICE START WITH========================== */}

      {isLogged && !isModalAttentionOpen && (
        <ModalNotice
          modalIsOpen={isModalNoticeOpen}
          setModalOpen={setModalNoticeOpen}
          id={selectedNoticeId}
          // handleRemoveFavorite={handleRemoveFavorite}
          handleRemoveFavorite={handleRemoveFavoriteNoticePage}
          added={addedItems[selectedNoticeId]}
          setAdded={(value) =>
            setAddedItems((prev) => ({
              ...prev,
              [selectedNoticeId]: value,
            }))
          }
          viewedTab={viewedTab}
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
