import css from "./LogOut.module.css";

const LogOutBtn = () => {
  return (
    <>
      <button type="submit" className={css.logoutBtn}>
        Log Out
      </button>
    </>
  );
};

export default LogOutBtn;
