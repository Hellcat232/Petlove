import css from "./UserNav.module.css";

import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const UserNav = () => {
  return (
    <>
      <ul className={css["user-nav"]}>
        <li className={css["user-nav-logout-mob"]}>
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
