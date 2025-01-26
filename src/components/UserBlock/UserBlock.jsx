import css from "./UserBlock.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  selectAuthIsUser,
  selectAuthNoticesFavorites,
  selectAuthNoticesViewed,
  selectAuthPets,
} from "../../redux/auth/selectors";

import UploaderPhoto from "../UploaderPhoto/UploaderPhoto";

const UserBlock = ({ handleEditUser }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
      {isMobile && <UploaderPhoto />}

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
