import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import BurgerModal from "../ModalTemplate/BurgerModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [isLigged, setIsLogged] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 320 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header>
      <nav className="flex flex-row justify-between items-center">
        <div>
          <Logo />
        </div>

        {isMobile && (
          <>
            <div className={css["hidden-nav-div"]}>
              <Nav />
            </div>

            <div className={css["burger-div-mob"]}>
              <svg className={css.burger} onClick={openModal}>
                <use href="/public/icons/symbol-defs.svg#icon-menu-burger"></use>
              </svg>
            </div>
          </>
        )}

        {isTablet && (
          <div className={css["for-tablet-bar-nav"]}>
            <div className={css["user-and-auth"]}>
              {isLigged ? <UserNav /> : <AuthNav />}
            </div>
            <div className={css["burger-div-tablet"]}>
              <svg className={css.burger} onClick={openModal}>
                <use href="/public/icons/symbol-defs.svg#icon-menu-burger"></use>
              </svg>
            </div>
          </div>
        )}

        {isDesktop && (
          <div className={css["user-and-auth"]}>
            {isLigged ? <UserNav /> : <AuthNav />}
          </div>
        )}
      </nav>

      <BurgerModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        isTablet={isTablet}
      />
    </header>
  );
};

export default Header;
