import css from "./EditUserBtn.module.css";
import { LuPen } from "react-icons/lu";
import { HiMiniPencil } from "react-icons/hi2";
import { useState } from "react";

const EditUserBtn = ({ handleEditUser, setModalIsOpen }) => {
  return (
    <div>
      <button
        type="button"
        className={css["edit-btn"]}
        onClick={() => setModalIsOpen(true)}
      >
        <LuPen className={css["empty-pen"]} />
        {/* <HiMiniPencil/> */}
      </button>
    </div>
  );
};

export default EditUserBtn;
