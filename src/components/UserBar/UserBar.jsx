import css from "./UserBar.module.css";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";

const UserBar = () => {
  const navigate = useNavigate();
  const matchHome = useMatch("/home");

  return (
    <>
      <div
        className={matchHome ? css["icon-div-home"] : css["icon-div"]}
        onClick={() => navigate("/profile")}
      >
        <svg className={matchHome ? css["icon-home"] : css.icon}>
          <use href="/icons/symbol-defs.svg#icon-person-icon"></use>
        </svg>
      </div>

      <div className={css["display-name"]}>
        <p className={matchHome ? css["user-name-home"] : css["user-name"]}>
          Name
        </p>
      </div>
    </>
  );
};

export default UserBar;
