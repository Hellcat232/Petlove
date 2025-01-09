import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = ({ modalIsOpen, isTablet }) => {
  return (
    <>
      <ul
        className={
          modalIsOpen
            ? isTablet
              ? "flex flex-row gap-2"
              : "flex flex-col justify-center gap-7 w-44 h-24"
            : "flex flex-row gap-2"
        }
      >
        <li>
          <NavLink to="/login" className={css.loginlink}>
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={css.reglink}>
            Registration
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
