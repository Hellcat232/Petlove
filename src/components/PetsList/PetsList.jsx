import css from "./PetsList.module.css";
import PetsItem from "../PetsItem/PetsItem";
import { useSelector } from "react-redux";
import { selectAuthPets } from "../../redux/auth/selectors";

const PetsList = () => {
  const pets = useSelector(selectAuthPets);

  return (
    <ul className={css["user-pets-list"]}>
      <PetsItem />
      <PetsItem />
      <PetsItem />
      {/* <PetsItem /> */}
    </ul>
  );
};

export default PetsList;
