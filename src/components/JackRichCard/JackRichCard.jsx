import css from "./JackRichCard.module.css";
import { useMatch } from "react-router-dom";

const JackRichCard = () => {
  const matchRegister = useMatch("/register");

  return (
    <ul className={css["jack-rich"]}>
      <li>
        {matchRegister ? (
          <img
            src="/jack1x.png"
            alt="Jack"
            srcSet="/jack1x.png 1x, /jack2x.png 2x"
          />
        ) : (
          <img
            src="/rich1x.png"
            alt="Rich"
            srcSet="/rich1x.png 1x, /rich2x.png 2x"
          />
        )}
      </li>

      <li>
        <div className="flex flex-col gap-2">
          <div className="flex w-[194px] justify-between items-center">
            <p className={css["jack-rich-name"]}>
              {matchRegister ? "Jack" : "Rich"}
            </p>
            <p className={css.birthday}>
              Birthday:{" "}
              <span className={css["span-data"]}>
                {matchRegister ? "18.10.2021" : "21.09.2020"}
              </span>
            </p>
          </div>
          <div>
            {matchRegister ? (
              <p className={css["about-jack-rich"]}>
                Jack is a gray Persian cat with green eyes. He loves to be
                pampered and groomed, and enjoys playing with toys.
              </p>
            ) : (
              <p className={css["about-jack-rich"]}>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!
              </p>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default JackRichCard;
