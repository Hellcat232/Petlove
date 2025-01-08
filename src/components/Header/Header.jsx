import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";
import { useState } from "react";

const Header = () => {
  const [isLigged, setIsLogged] = useState(false);

  return (
    <header>
      <nav className="flex flex-row justify-between items-center">
        <div>
          <Logo />
        </div>
        <div>
          <Nav />
        </div>
        <div>{isLigged ? <UserNav /> : <AuthNav />}</div>
      </nav>
    </header>
  );
};

export default Header;
