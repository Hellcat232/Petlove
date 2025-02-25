import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import BurgerModal from "../BurgerModal/BurgerModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useMatch } from "react-router-dom";

const Header = () => {
  const matchHome = useMatch("/home");
  const [isLogged, setIsLogged] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header className={matchHome ? css["header-home-path"] : css.header}>
      <nav className={css["header-nav"]}>
        <div>
          <Logo />
        </div>

        {isMobile && (
          <>
            <div className={css["hidden-nav-div"]}>
              <Nav />
            </div>

            <div className={css["burger-div-mob"]}>
              {isLogged && <UserNav />}
              <svg
                className={matchHome ? css["burger-home-page"] : css.burger}
                onClick={openModal}
              >
                <use href="/icons/symbol-defs.svg#icon-menu-burger"></use>
              </svg>
            </div>
          </>
        )}

        {isTablet && (
          <div className={css["for-tablet-bar-nav"]}>
            <div className={css["user-and-auth"]}>
              {isLogged ? <UserNav /> : !modalIsOpen && <AuthNav />}
            </div>
            <div className={css["burger-div-tablet"]}>
              <svg
                className={matchHome ? css["burger-home-page"] : css.burger}
                onClick={openModal}
              >
                <use href="/icons/symbol-defs.svg#icon-menu-burger"></use>
              </svg>
            </div>
          </div>
        )}

        {isDesktop && (
          <div className={css["user-and-auth"]}>
            {isLogged ? <UserNav /> : <AuthNav />}
          </div>
        )}
      </nav>

      {!isDesktop && (
        <BurgerModal
          isLogged={isLogged}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          isTablet={isTablet}
        />
      )}
    </header>
  );
};

export default Header;
