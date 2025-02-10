import css from "./UserCard.module.css";
import EditUserBtn from "../EditUserBtn/EditUserBtn";
import EditModal from "../EditModal/EditModal";
import UserBlock from "../UserBlock/UserBlock";
import PetsBlock from "../PetsBlock/PetsBlock";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UploaderPhoto from "../UploaderPhoto/UploaderPhoto";

import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { editUsers } from "../../redux/auth/operations";

const UserCard = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleEditUser(data) {
    dispatch(editUsers(data));
  }

  return (
    <div className={css.card}>
      <div className={css["edit-block"]}>
        <div className={css["user-and-person"]}>
          <p className={css.user}>User</p>
          <svg className={css["person-icon"]}>
            <use href="/icons/symbol-defs.svg#icon-person-icon"></use>
          </svg>
        </div>
        {isTablet && <UploaderPhoto />}
        <EditUserBtn
          handleEditUser={handleEditUser}
          setModalIsOpen={setModalIsOpen}
        />
      </div>

      <div className={css["user-pets-blocks"]}>
        <UserBlock handleEditUser={handleEditUser} />
        <PetsBlock />
      </div>
      <LogOutBtn />

      <EditModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default UserCard;
