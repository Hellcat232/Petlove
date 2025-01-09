import { NavLink } from "react-router-dom";
import getNavLinkClass from "../../utils/getNavLinkLight";
import css from "./Nav.module.css";

const Nav = ({ modalIsOpen }) => {
  let chekLink = "news" | "notices" | "friends";

  return (
    <>
      <ul
        className={
          modalIsOpen
            ? "flex flex-col justify-center items-center gap-[35px] h-[165px] w-[130px]"
            : "flex flex-row gap-[10px]"
        }
      >
        <li className={css.news}>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.newsActive, css.newsNotActive)
            }
          >
            News
          </NavLink>
        </li>
        <li className={css.findpet}>
          <NavLink
            to="/notices"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.findpetActive, css.findpetNotActive)
            }
          >
            Find pet
          </NavLink>
        </li>
        <li className={css.friends}>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              getNavLinkClass(isActive, css.friendsActive, css.friendsNotActive)
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
