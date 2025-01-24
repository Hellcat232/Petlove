import css from "./LogOutBtn.module.css";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/auth/operations";

const LogOutBtn = ({ isLogged }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.logoutBtn}
      >
        Log Out
      </button>
    </>
  );
};

export default LogOutBtn;
