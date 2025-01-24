import css from "./PetsBlock.module.css";
import { GoPlus } from "react-icons/go";
import PetsList from "../PetsList/PetsList";

const PetsBlock = () => {
  return (
    <div className={css["pets-block"]}>
      <div className={css["title-and-button"]}>
        <h2 className={css.title}>My pets</h2>
        <button className={css["add-pet-btn"]}>
          Add pet{" "}
          <span>
            <GoPlus className={css.plus} />
          </span>
        </button>
      </div>

      <div className={css["cards-block"]}>
        <PetsList />
      </div>
    </div>
  );
};

export default PetsBlock;
