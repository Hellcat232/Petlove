import css from "./UserBar.module.css";

const UserBar = () => {
  return (
    <>
      <div className={css.iconDiv}>
        <svg height="24" width="24" fill="#F6B83D">
          <use href="/public/icons/symbol-defs.svg#icon-person-icon"></use>
        </svg>
      </div>

      <div className={css["display-name"]}>
        <p className={css.userName}>Name</p>
      </div>
    </>
  );
};

export default UserBar;
