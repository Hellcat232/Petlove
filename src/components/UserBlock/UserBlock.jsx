import css from "./UserBlock.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAuthIsUser,
  selectAuthNoticesFavorites,
  selectAuthNoticesViewed,
  selectAuthPets,
} from "../../redux/auth/selectors";

const UserBlock = ({ handleEditUser }) => {
  const isUser = useSelector(selectAuthIsUser);
  if (!isUser) return null;

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("avatar", file);

  //     handleEditUser(formData);
  //   }
  // };

  return (
    <div className={css["user-block"]}>
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
            type="file"
            name="photo"
            accept="image/*"
            // onChange={handleFileChange}
            className={css["upload-input"]}
          />
          <div>
            <p className={css.upload}>Upload a photo</p>
          </div>
        </label>
      </div>

      <div className={css["info-block"]}>
        <h2 className={css["info-title"]}>My information</h2>

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
      </div>
    </div>
  );
};

export default UserBlock;
