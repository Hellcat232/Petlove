import css from "./PetBlock.module.css";
import { useMatch } from "react-router-dom";

const PetBlock = ({ children }) => {
  const matchRegister = useMatch("/register");

  return (
    <div className={matchRegister ? css["register-pet"] : css["login-pet"]}>
      {children}
    </div>
  );
};

export default PetBlock;
