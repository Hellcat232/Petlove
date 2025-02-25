import css from "./AuthNav.module.css";
import { NavLink, useMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthNav = ({ modalIsOpen, isTablet }) => {
  const navigate = useNavigate();
  const matchHome = useMatch("/home");

  return (
    <>
      <ul
        className={
          modalIsOpen
            ? isTablet
              ? "flex flex-row gap-2"
              : "flex flex-col justify-center gap-2 w-44 h-24"
            : "flex flex-row gap-2"
        }
      >
        <li>
          <button
            type="click"
            onClick={() => navigate("/login")}
            className={matchHome ? css["loginlink-home"] : css.loginlink}
          >
            Log in
          </button>
        </li>
        <li>
          <button
            type="click"
            onClick={() => navigate("/register")}
            className={css.reglink}
          >
            Registration
          </button>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
