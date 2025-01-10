import css from "./HomePage.module.css";
import { useMediaQuery } from "react-responsive";

export default function HomePage() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section className={css["home-page"]}>
      <div className={css["div-yellow"]}>
        <div
          className={isDesktop ? css["home-title-desktop"] : css["home-title"]}
        >
          <strong className={css["title-text"]}>
            Take good <span className={css.span}>care</span> of
            <br className={css.br} /> your small pets
          </strong>
          <p className={css["just-paragraph"]}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div className={css["div-photo"]}>
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet="/home-page-img-desktop1x.jpg 1x, /home-page-img-desktop2x.jpg 2x"
          />
          <source
            media="(min-width:768px)"
            srcSet="/home-page-img-tablet1x.jpg 1x, /home-page-img-tablet2x.jpg 2x"
          />
          <source
            media="(min-width:375px)"
            srcSet="/home-page-img-mob1x.jpg 1x, /home-page-img-mob2x.jpg 2x"
          />
          <source
            media="(max-width:374px)"
            srcSet="/home-page-img-mob1x.jpg 1x, /home-page-img-mob2x.jpg 2x"
          />
          <img
            className={css["main-img"]}
            src="/home-page-img-tablet1x.jpg"
            alt="Main Picture"
            srcSet="/home-page-img-tablet1x.jpg 1x, /home-page-img-tablet2x.jpg 2x"
          />
        </picture>
      </div>
    </section>
  );
}
