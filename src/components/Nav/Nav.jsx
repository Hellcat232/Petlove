import { NavLink } from "react-router-dom";
import getNavLinkClass from "../../utils/getNavLinkLight";
import css from "./Nav.module.css";
import clsx from "clsx";

const Nav = () => {
  return (
    <>
      <ul className="flex flex-row gap-[10px]">
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.active, css.notActive)
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notices"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.active, css.notActive)
            }
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.active, css.notActive)
            }
          >
            Our friends
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
