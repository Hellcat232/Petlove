import css from "./UserNav.module.css";

import UserBar from "../UserBar/UserBar";

const UserNav = () => {
  return (
    <>
      <ul className="flex flex-row gap-2">
        <li>
          <button type="submit" className={css.logoutBtn}>
            Log Out
          </button>
        </li>
        <li className="flex items-center gap-2">
          <UserBar />
        </li>
      </ul>
    </>
  );
};

export default UserNav;
