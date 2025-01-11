import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegisterForm/RegisterForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import Title from "../../components/Title/Title";
import JackRichCard from "../../components/JackRichCard/JackRichCard";
import { useMediaQuery } from "react-responsive";

export default function RegistrationPage() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section
      className={
        isDesktop ? css["register-section-desktop"] : css["register-section"]
      }
    >
      <div className={css.pet}>
        <PetBlock>
          <JackRichCard />
        </PetBlock>
      </div>
      <div className={css["register-div"]}>
        <div>
          <Title>Registration</Title>
          <p className={css.description}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </section>
  );
}
