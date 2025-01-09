import css from "./UserBar.module.css";
import { useNavigate } from "react-router-dom";

const UserBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={css["icon-div"]} onClick={() => navigate("/profile")}>
        <svg className={css.icon}>
          <use href="/icons/symbol-defs.svg#icon-person-icon"></use>
        </svg>
      </div>

      <div className={css["display-name"]}>
        <p className={css["user-name"]}>Name</p>
      </div>
    </>
  );
};

export default UserBar;
