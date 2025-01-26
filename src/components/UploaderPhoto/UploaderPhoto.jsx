import css from "./UploaderPhoto.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsUser } from "../../redux/auth/selectors";

const UploaderPhoto = () => {
  const isUser = useSelector(selectAuthIsUser);
  if (!isUser) return null;

  return (
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
  );
};

export default UploaderPhoto;
