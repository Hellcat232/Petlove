import css from "./BigLogo.module.css";
import { NavLink } from "react-router-dom";

const BigLogo = () => {
  return (
    <div className={css["big-logo-div"]}>
      <NavLink to="/login">
        <img
          src="/public/big-logo1x.png"
          srcSet="/public/big-logo1x.png 1x, /public/big-logo2x.png 2x"
          alt="Click here"
          className={css["big-logo-img"]}
        />
      </NavLink>
    </div>
  );
};

export default BigLogo;
