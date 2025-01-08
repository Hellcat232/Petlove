import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <ul className="flex flex-row gap-2">
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
