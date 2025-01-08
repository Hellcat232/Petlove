import css from "./Layout.module.css";
import { Outlet, useMatch } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import BigLogo from "../BigLogo/BigLogo";

const Layout = () => {
  const matchHome = useMatch("/home");
  const matchMain = useMatch("/");

  return (
    <>
      {matchMain ? null : <Header />}
      {/* <Loader /> */}
      <main className={matchMain ? css["main-background"] : null}>
        {matchMain ? <BigLogo /> : <Outlet />}
      </main>
    </>
  );
};

export default Layout;
