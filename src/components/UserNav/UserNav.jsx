import css from "./UserNav.module.css";
import { useMediaQuery } from "react-responsive";

import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../LogOutBtn/LogOut";

const UserNav = () => {
  return (
    <>
      <ul className="flex flex-row gap-2">
        <li>
          <LogOutBtn />
        </li>

        <li className="flex items-center gap-2">
          <UserBar />
        </li>
      </ul>
    </>
  );
};

export default UserNav;
