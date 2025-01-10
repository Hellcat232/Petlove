import { NavLink, useMatch } from "react-router-dom";
import getNavLinkClass from "../../utils/getNavLinkLight";
import css from "./Nav.module.css";

const Nav = ({ modalIsOpen }) => {
  const matchHome = useMatch("/home");

  return (
    <>
      <ul className={modalIsOpen ? css["nav-modal"] : css.nav}>
        <li>
          <NavLink
            to="/news"
            className={
              matchHome
                ? modalIsOpen
                  ? css["news-home-modal"]
                  : css["news-home"]
                : ({ isActive }) =>
                    getNavLinkClass(isActive, css.newsActive, css.newsNotActive)
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notices"
            className={
              matchHome
                ? modalIsOpen
                  ? css["findpet-home-modal"]
                  : css["findpet-home"]
                : ({ isActive }) =>
                    getNavLinkClass(
                      isActive,
                      css.findpetActive,
                      css.findpetNotActive
                    )
            }
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={
              matchHome
                ? modalIsOpen
                  ? css["friends-home-modal"]
                  : css["friends-home"]
                : ({ isActive }) =>
                    getNavLinkClass(
                      isActive,
                      css.friendsActive,
                      css.friendsNotActive
                    )
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
