import css from "./NoticesItem.module.css";
import { useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { IoHeartOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import calculatePupularity from "../../utils/calculatePupularity";

import { noticesFavoriteAddById } from "../../redux/notices/operation";

const NoticesItem = ({
  notice,
  handleOpenModal,
  handleRemoveFavorite,
  isLogged,
  setAdded,
  added,
  viewedTab,
}) => {
  const matchProfile = useMatch("/profile");
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const dispatch = useDispatch();

  function handleAddToFavorite(id) {
    dispatch(noticesFavoriteAddById(id));
    setAdded(true);
  }

  function toUpperCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return (
    <li
      className={
        matchProfile && isDesktop ? css["card-profile-desktop"] : css.card
      }
    >
      <img
        src={notice.imgURL}
        alt="notice image"
        className={css["notice-img"]}
        loading="lazy"
      />

      <div className={css["info-block"]}>
        <div className={css["title-and-list"]}>
          <div className="flex flex-row justify-between items-center">
            <h2 className={css.title}>{notice.title}</h2>
            <div className="flex flex-row gap-1 items-center">
              <span>
                <FaStar className={css.star} />
              </span>
              <p className={css.popularity}>
                {calculatePupularity(notice.popularity)}
              </p>
            </div>
          </div>

          <ul className={css["about-list"]}>
            <li className={css["about-item"]}>
              <p className={css.name}>Name</p>
              <span className={css.span}>{notice.name}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Birthday</p>
              <span className={css.span}>
                {notice.birthday ? notice.birthday : "Unknown"}
              </span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Sex</p>
              <span className={css.span}>{toUpperCase(notice.sex)}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Species</p>
              <span className={css.span}>{toUpperCase(notice.species)}</span>
            </li>
            <li className={css["about-item"]}>
              <p className={css.name}>Category</p>
              <span className={css.span}>{toUpperCase(notice.category)}</span>
            </li>
          </ul>
        </div>

        <div className="h-9">
          <p className={css.comment}>{notice.comment}</p>
        </div>

        <div className={css["bottom-card"]}>
          <p className={css.price}>
            {notice.price
              ? `$${notice.price}.99`
              : toUpperCase(notice.category)}
          </p>

          <div className={css["btns-block"]}>
            <button
              type="button"
              className={
                viewedTab ? css["learn-more-btn-viewed"] : css["learn-more-btn"]
              }
              onClick={() => handleOpenModal(notice._id)}
            >
              Learn more
            </button>

            {viewedTab ? null : !matchProfile ? (
              added && !matchProfile ? (
                <button
                  type="button"
                  className={css["bin-btn"]}
                  onClick={() => handleRemoveFavorite(notice._id)}
                >
                  <RiDeleteBinLine className={css["icon-bin"]} />
                </button>
              ) : (
                <button
                  type="button"
                  className={css["heart-btn"]}
                  onClick={() => {
                    if (!isLogged) {
                      handleOpenModal(notice._id);
                    } else {
                      handleAddToFavorite(notice._id);
                    }
                  }}
                >
                  <IoHeartOutline className={css["icon-heart"]} />
                </button>
              )
            ) : (
              <button
                type="button"
                className={css["bin-btn"]}
                onClick={() => handleRemoveFavorite(notice._id)}
              >
                <RiDeleteBinLine className={css["icon-bin"]} />
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default NoticesItem;
