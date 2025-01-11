import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import Title from "../../components/Title/Title";
import JackRichCard from "../../components/JackRichCard/JackRichCard";
import { useMediaQuery } from "react-responsive";

export default function LoginPage() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section
      className={
        isDesktop ? css["login-section-desktop"] : css["login-section"]
      }
    >
      <div className={css.pet}>
        <PetBlock>
          <JackRichCard />
        </PetBlock>
      </div>
      <div className={css["login-div"]}>
        <div>
          <Title>Log in</Title>
          <p className={css.description}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
