import css from "./BigLogo.module.css";
import { NavLink } from "react-router-dom";

const BigLogo = () => {
  return (
    <div className={css["big-logo-div"]}>
      <NavLink to="/home">
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/big-logo-tablet1x.png 1x, /big-logo-tablet2x.png 2x"
          />

          <source
            media="(min-width:375px)"
            srcSet="/big-logo-mob1x.png 1x, /big-logo-mob2x.png 2x"
          />

          <source
            media="(max-width:374px)"
            srcSet="/big-logo-mob1x.png 1x, /big-logo-mob2x.png 2x"
          />

          <img
            className={css["big-logo-img"]}
            src="/big-logo-tablet1x.png"
            alt="Click here!"
            srcSet="/big-logo-tablet1x.png 1x, /big-logo-tablet2x.png 2x"
          />
        </picture>
      </NavLink>
    </div>
  );
};

export default BigLogo;
